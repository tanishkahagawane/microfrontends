import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

//fix port so remotes always know where your host or shell lives
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        products: {
          type: "module",
          name: "products",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "products",
          shareScope: "default",
        },
        cart: {
          type: "module",
          name: "cart",
          entry: "http://localhost:3002/remoteEntry.js",
          entryGlobalName: "cart",
          shareScope: "default",
        },
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
  ],
  server: {
    port: 3000, // keep this stable
    //if 3000 is busy , fail instead of jumping to 3001/3002
    strictPort: true,
    origin: "http://localhost:3000/",
  },
  build: {
    target: "chrome89",
  },
});
