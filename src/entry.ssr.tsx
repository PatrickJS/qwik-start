/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
// import { eventHandler } from "vinxi/http";

import Root from "./root";

// export default function (opts: RenderToStreamOptions) {
//   console.log("SSR render", opts);
//   return renderToStream(<Root />, {
// manifest,
// ...opts,
// containerAttributes: {
//   lang: "en-us",
//   ...opts.containerAttributes,
// },
//   });
// };

// export default eventHandler((req) => {
//   console.log("SSR render", req);
//   return renderToString(<Root />, {
//     manifest,
//     containerAttributes: {
//       lang: "en-us",
//     },
//   });
// });

/// <reference types="vinxi/types/server" />
import {
  renderToStream,
  // renderToString,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import { eventHandler } from "vinxi/http";
// import { getManifest } from "vinxi/manifest";

// import App from "./app";

export default eventHandler(async (event) => {
  // const clientManifest = getManifest("client");
  // const assets = await clientManifest.inputs[clientManifest.handler].assets();
  const opts = {} as RenderToStreamOptions;
  // const stream = await new Promise(async (resolve) => {
  const stream = renderToStream(
    <Root />,
    {
      manifest,
      ...opts,
      containerAttributes: {
        lang: "en-us",
        // ...opts.containerAttributes,
      },
    }
    // {
    //   onShellReady() {
    //     resolve(stream);
    //   },
    //   bootstrapModules: [
    //     clientManifest.inputs[clientManifest.handler].output.path,
    //   ],
    //   bootstrapScriptContent: `window.manifest = ${JSON.stringify(
    //     await clientManifest.json()
    //   )}`,
    // }
  );
  // });

  event.node.res.setHeader("Content-Type", "text/html");
  return stream;
});
