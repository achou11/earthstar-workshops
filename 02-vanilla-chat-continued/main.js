import * as Earthstar from "./earthstar.bundle.js";

// Set up references to different UI for interactive parts
const displayNameForm = document.getElementById("display-name-form");
const displayNameInput = displayNameForm.querySelector(
  "[name=display-name-input]"
);
const participantsList = document.getElementById("participants");
const messageForm = document.getElementById("message-form");
const messageInput = messageForm.querySelector("[name=message-input]");
const chatContainer = document.getElementById("chat-container");
const log = document.getElementById("log");

// Start the app!
main();

// We set things up here!
function main() {
  const { author, cache, replica } = initEarthstar();

  // React to updates to the replica cache, which we'll use to update the UI
  cache.instance.onCacheUpdated(() => {
    updateUi(cache);
  });

  initDomListeners({ author, replica });

  initOnlinePresence({ author, replica });
}

// Get config information used for Earthstar
// Generated using https://github.com/earthstar-project/applet-control-panel
function getEarthstarConfig() {
  const shareAddresses = JSON.parse(
    localStorage.getItem("earthstar:peer:shares")
  );

  const shareSecrets = JSON.parse(
    localStorage.getItem("earthstar:peer:share-secrets")
  );

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

function initEarthstar() {
  const config = getEarthstarConfig();

  const shareAddress = config.shareAddresses[0];
  const shareSecret = config.shareSecrets[shareAddress];

  // Create the replica, which stores the documents and allows us to query them
  const replica = new Earthstar.Replica({
    driver: new Earthstar.ReplicaDriverWeb(shareAddress),
    shareSecret,
  });

  const cache = initReplicaCache(replica);

  const sync = initSync(config.replicaServerUrls[0], replica);

  return {
    ...sync,
    author: config.author,
    cache,
    replica,
  };
}

function initReplicaCache(replica) {
  // Load the data from the replica and write to the doc
  // The cache allows us to listen to updates to the replica, adding the reactivity aspects we need
  const replicaCache = new Earthstar.ReplicaCache(replica);

  // Initialize the cache queries
  getLogDocuments();
  getParticipants();

  return { instance: replicaCache, getLogDocuments, getParticipants };

  function getLogDocuments() {
    return replicaCache.queryDocs({
      filter: { pathStartsWith: "/chat" },
    });
  }

  function getParticipants() {
    return replicaCache.queryAuthors({
      filter: { pathStartsWith: "/chat" },
    });
  }
}

function initSync(remoteUrl, replica) {
  // Sync with a remote replica so that we can get updates from other internet-enabled
  const peer = new Earthstar.Peer();

  peer.addReplica(replica);

  // The 'live' argument keeps a persistent connection that will update the replica whenever changes are detected from the remote replica
  const syncer = peer.sync(remoteUrl, "live");

  return { peer, syncer };
}

function initDomListeners({ author, replica }) {
  // Add submit handler for the message input
  messageForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const result = await replica.set(
      {
        address: author.address,
        secret: author.secret,
      },
      {
        path: `/chat/~${author.address}/${Date.now()}`,
        text: messageInput.value,
      }
    );

    messageInput.value = "";
  });

  // Add submit handler for the display name input
  displayNameForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const result = await replica.set(
      { address: author.address, secret: author.secret },
      {
        path: `/about/~${author.address}/displayName`,
        text: displayNameInput.value,
      }
    );

    displayNameInput.value = "";
  });
}

// Query updated data and update UI
function updateUi(cache) {
  const logDocs = cache.getLogDocuments({
    filter: { pathStartsWith: "/chat" },
  });

  const participants = cache.getParticipants({
    filter: { pathStartsWith: "/chat" },
  });

  updateLogUi(logDocs, {
    getDisplayName: (authorAddress) =>
      cache.instance.getLatestDocAtPath(`/about/~${authorAddress}/displayName`),
  });

  updateParticipantsUi(participants, {
    getIsOnline: (participant) =>
      !!cache.instance.getLatestDocAtPath(`/about/~${participant}/!lastOnline`),
  });
}

// Update the displayed messages in the log
function updateLogUi(docs, { getDisplayName }) {
  log.innerHTML = "";

  docs.forEach(({ author, text }) => {
    const displayName = getDisplayName(author);
    const parsedAuthorAddress = Earthstar.parseAuthorAddress(author);
    const nameToDisplay = displayName?.text || `@${parsedAuthorAddress.name}`;

    const message = document.createElement("li");
    message.textContent = `${nameToDisplay}: ${text}`;

    log.appendChild(message);
  });

  // Scroll to bottom!
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function updateParticipantsUi(participants, { getIsOnline }) {
  participantsList.innerHTML = "";

  participants.forEach((participant) => {
    const parsedAuthorAddress = Earthstar.parseAuthorAddress(participant);

    const displayedName = `@${parsedAuthorAddress.name}`;

    const listItem = document.createElement("li");

    listItem.textContent =
      displayedName + (getIsOnline(participant) ? " 🟢" : "");

    participantsList.appendChild(listItem);
  });
}

// Set up an interval that writes to a document used for determining if an author is currently online
function initOnlinePresence({ author, replica }) {
  function updateDoc() {
    if (!author) return;

    replica.set(author, {
      path: `/about/~${author.address}/!lastOnline`,
      text: JSON.stringify(true),
      deleteAfter: Date.now() * 1000 + 120_000_000,
    });
  }

  const interval = setInterval(() => {
    updateDoc();
  }, 80_000);

  // Do an initial call to have something written immediately
  updateDoc();

  return () => clearInterval(interval);
}
