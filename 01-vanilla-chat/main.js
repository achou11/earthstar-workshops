import * as Earthstar from "./earthstar.bundle.js";

// Generated using Earthstar.Crypto.generateShareKeypair()
const shareSecret = "bxx7bgoesoasq276pue24t2px5yfuqookh5jfve3dhuwt4qpchqlq";
const shareAddress =
  "+vanilla.bicq37hcty2xu7jx4vdxjxe5dzxnzcij5cukqwgmypokd5b5padcq";

// Generated using Earthstar.Crypto.generateAuthorKeypair()
const authorAddress =
  "@chou.bfmnnhvinqqyguphg3viauxi23r3tzu2qisi56peuwpcpq35jvs4a";
const authorSecret = "bz3vbxbifwc2v75w66xulncimyr7nryftdnyehwkzqoqotp5aumaq";

// Create the replica, which stores the documents and allows us to query them
const replica = new Earthstar.Replica({
  driver: new Earthstar.ReplicaDriverWeb(shareAddress),
  shareSecret,
});

// Set up references to different UI for interactive parts
const form = document.getElementById("input-form");
const input = document.querySelector("input");
const log = document.getElementById("log");

// Write messages to the replica on form submit
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const result = await replica.set(
    {
      address: authorAddress,
      secret: authorSecret,
    },
    {
      path: `/chat/~${authorAddress}/${Date.now()}`,
      text: input.value,
    }
  );
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
    const message = document.createElement("li");

    message.textContent = `${doc.author}: ${doc.text}`;

    log.appendChild(message);
  });
}

// Sync with a remote replica so that we can get updates from other internet-enabled
const peer = new Earthstar.Peer();
peer.addReplica(replica);
// The 'live' argument keeps a persistent connection that will update the replica whenever changes are detected from the remote replica
const syncer = peer.sync("https://es-rs-squirrel.fly.dev/sync", "live");
