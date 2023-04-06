import { startDevBundle } from "./lib/builder";
import { DevServer } from "./lib/dev-server";
import { watchDocs } from "./lib/util/watch-docs";

const app = DevServer.createAndStart();

async function watchAndUpdateServer() {
  await startDevBundle();

  for await (const info of watchDocs()) {
    app.reloadClients();
  }
}

watchAndUpdateServer();