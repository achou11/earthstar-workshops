import * as Earthstar from "./earthstar.bundle.js";

const config = getEarthstarConfig();

// Generated using Earthstar.Crypto.generateShareKeypair()
const shareAddress = config.shareAddresses[0];

const shareSecret = config.shareSecrets[shareAddress];

// Generated using Earthstar.Crypto.generateAuthorKeypair()
const author = config.author;
const authorAddress = author.address;
const authorSecret = author.secret;

// Create the replica, which stores the documents and allows us to query them
const replica = new Earthstar.Replica({
  driver: new Earthstar.ReplicaDriverWeb(shareAddress),
  shareSecret,
});

// Set up references to different UI for interactive parts
const displayNameForm = document.getElementById("display-name-form");
const displayNameInput = displayNameForm.querySelector(
  "[name=display-name-input]"
);

const messageForm = document.getElementById("message-form");
const messageInput = messageForm.querySelector("[name=message-input]");

const log = document.getElementById("log");

// Write messages to the replica on form submit
messageForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const result = await replica.set(
    {
      address: authorAddress,
      secret: authorSecret,
    },
    {
      path: `/chat/~${authorAddress}/${Date.now()}`,
      text: messageInput.value,
    }
  );

  messageInput.value = "";
});

displayNameForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const result = await replica.set(
    { address: authorAddress, secret: authorSecret },
    {
      path: `/about/~${authorAddress}/displayName`,
      text: displayNameInput.value,
    }
  );

  displayNameInput.value = "";
});

// Load the data from the replica and write to the doc
// The cache allows us to listen to updates to the replica, adding the reactivity aspects we need
const cache = new Earthstar.ReplicaCache(replica);

// On initial page load, query the previously existing docs and update the log
const cacheDocs = cache.queryDocs({
  filter: {
    pathStartsWith: "/chat",
  },
});

// Update the log initially
updateLog(cacheDocs);

// Whenever the replica is updated, this gets called and we update the log
cache.onCacheUpdated(() => {
  const updatedDocs = cache.queryDocs({
    filter: {
      pathStartsWith: "/chat",
    },
  });

  updateLog(updatedDocs);
});

// Update the displayed messages in the log
function updateLog(docs) {
  log.innerHTML = "";

  docs.forEach((doc) => {
    const displayName = cache.getLatestDocAtPath(
      `/about/~${doc.author}/displayName`
    );

    const parsed = Earthstar.parseAuthorAddress(doc.author);

    const displayedName = displayName?.text || `@${parsed.name}`;

    const message = document.createElement("li");
    message.textContent = `${displayedName}: ${doc.text}`;

    log.appendChild(message);
  });
}

// Sync with a remote replica so that we can get updates from other internet-enabled
const peer = new Earthstar.Peer();
peer.addReplica(replica);

// The 'live' argument keeps a persistent connection that will update the replica whenever changes are detected from the remote replica
const syncer = peer.sync(config.replicaServerUrls[0], "live");

function getEarthstarConfig() {
  const shareAddresses = JSON.parse(
    localStorage.getItem("earthstar:peer:shares")
  );

  const shareSecrets = JSON.parse(
    localStorage.getItem("earthstar:peer:share-secrets")
  );

  // Generated using Earthstar.Crypto.generateAuthorKeypair()
  const author = JSON.parse(localStorage.getItem("earthstar:peer:author"));

  const replicaServerUrls = JSON.parse(
    localStorage.getItem("earthstar:peer:replica-servers")
  );

  return {
    shareAddresses,
    shareSecrets,
    author,
    replicaServerUrls,
  };
}
