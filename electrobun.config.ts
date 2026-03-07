import type { ElectrobunConfig } from "electrobun";

export default {
  app: {
    name: "svelte-app",
    identifier: "svelteapp.electrobun.dev",
    version: "0.0.1",
  },
  build: {
    copy: {
      "build/index.html": "views/mainview/index.html",
      "build/assets": "views/mainview/assets",
      "build/_app": "views/mainview/_app",
    },
    watchIgnore: ["build/**"],
    mac: { bundleCEF: false },
    linux: { bundleCEF: false },
    win: { bundleCEF: false },
  },
} satisfies ElectrobunConfig;