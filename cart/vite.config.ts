import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

//module federation plugin for vite is going to help the app
//so that it can expose the modules at runtime
// via remoteentry.js

export default defineConfig({
  plugins: [
    federation({
      name: "cart", //unique remote name
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/App.tsx",
      },
      shared: {
        react: {
          singleton: true, // only one react instance in thr browser
          requiredVersion: "^19.2.8",
        },
        "react/": {
          singleton: true, //subpath imports like  -> 'react/jsx-runtime
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.2.8",
        },
      },
      dts: false,
    }),
    react(),
  ],
  base: "http://localhost:3002/", //absolute public path for all asset

  server: {
    port: 3002,
    strictPort: true,
    origin: "http://localhost:3002/",
  },
  build: {
    target: "chrome89",
  },
});
