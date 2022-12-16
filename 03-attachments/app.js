import * as Earthstar from "https://cdn.earthstar-project.org/js/earthstar.web.v10.0.0-rc.1.js";

// Earthstar stuff
const settings = new Earthstar.SharedSettings();

async function setupSettings() {
  const author = await Earthstar.Crypto.generateAuthorKeypair("chou");

  settings.author = author;

  const shareKeypair = await Earthstar.Crypto.generateShareKeypair(
    "attachments"
  );

  settings.addShare(shareKeypair.shareAddress);
  const result = await settings.addSecret(
    shareKeypair.shareAddress,
    shareKeypair.secret
  );

  console.log("SECRET", result);
}

// await setupSettings();

const shareAddress = settings.shares[0];

const shareSecret = settings.shareSecrets[shareAddress];

const replica = new Earthstar.Replica({
  driver: new Earthstar.ReplicaDriverWeb(shareAddress),
  shareSecret: settings.shareSecrets[shareAddress],
});

// DOM Stuff
const fileInput = document.querySelector('input[type="file"]');
const uploadMessage = document.getElementById("upload-result");
const downloadUrl = document.getElementById("download-url");

fileInput.addEventListener("change", async (event) => {
  event.preventDefault();

  const file = event.target.files[0];

  const timestamp = Date.now();

  const extension = file.name.split(".")[1];

  // TODO: use a proper hash ideally
  const path = `/uploads/!${timestamp}.${extension}`;

  console.log(path);

  const result = await replica.set(settings.author, {
    path,
    text: `This was uploaded by ANDREWWWW`,
    attachment: file.stream(),
    // 48 hours
    deleteAfter: Date.now() * 1000 + 172_800_000_000,
  });

  if (Earthstar.isErr(result)) {
    uploadMessage.textContent = "Failed to upload";
  } else {
    uploadMessage.textContent = "Successfully uploaded!";
  }

  // console.log(result);

  const peer = new Earthstar.Peer();

  peer.addReplica(replica);

  const syncer = peer.sync("http://localhost:8000");

  // syncer.onStatusChange((newStatus) => {
  //   console.log("STATUS", newStatus)
  // })

  await syncer.isDone();

  console.log("SYNCED!!!");

  const link = `http://localhost:8000/downloads/${timestamp}.${extension}`;
  downloadUrl.href = link;
  downloadUrl.textContent = `Download image at ${link}`;
});
