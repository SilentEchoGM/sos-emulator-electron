import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import node from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: node({
      out: "../build/svelte",
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      //@ts-expect-error
      ssr: {
        noExternal: ["custom-electron-titlebar"],
      },
      resolve: {
        alias: {
          "xmlhttprequest-ssl":
            "./node_modules/engine.io-client/lib/xmlhttprequest.js",
        },
      },
    },
  },
};

export default config;
