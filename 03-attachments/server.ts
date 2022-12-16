import { contentType } from "https://deno.land/std@0.167.0/media_types/mod.ts";
import { extname } from "https://deno.land/std@0.154.0/path/mod.ts";
import * as Earthstar from "https://deno.land/x/earthstar@v10.0.0-rc.1/mod.ts";

class AttachmentsViewerExtension implements Earthstar.IServerExtension {
  private replica: Earthstar.Replica | null | undefined = null;

  register(peer: Earthstar.Peer): Promise<void> {
    this.replica = peer.getReplica(
      "+attachments.bww37ungbbclwmnhf3ll7mfvy2vxc6ehv6djokswwugftfu2l3mna"
    );

    return Promise.resolve();
  }

  async handler(req: Request): Promise<Response | null> {
    if (!this.replica) {
      return Promise.resolve(null);
    }

    const pattern = new URLPattern({
      pathname: "/downloads/:filename",
    });

    const match = pattern.exec(req.url);

    if (!match) {
      return Promise.resolve(null);
    }

    const { filename } = match.pathname.groups;

    const documentPath = `/uploads/!${filename}`;

    const doc = await this.replica.getLatestDocAtPath(documentPath);

    if (!doc) {
      return Promise.resolve(null);
    }

    const attachment = await this.replica.getAttachment(doc);

    if (Earthstar.isErr(attachment) || !attachment) {
      return new Response("No attachment found", { status: 404 });
    }

    const extension = extname(documentPath);

    return new Response(await attachment.stream(), {
      headers: {
        "content-type": contentType(extension) || "plain/text",
      },
    });
  }
}

new Earthstar.Server([
  new Earthstar.ExtensionKnownShares({
    knownSharesPath: "./known-shares.json",
    onCreateReplica: (shareAddress: string) => {
      return new Earthstar.Replica({
        driver: new Earthstar.ReplicaDriverFs(
          shareAddress,
          `./share-data/${shareAddress}`
        ),
      });
    },
  }),
  new AttachmentsViewerExtension(),
  new Earthstar.ExtensionSyncWeb(),
]);
