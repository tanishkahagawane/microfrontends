import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

//fix port so remotes always know where your host or shell lives
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // keep this stable
    //if 3000 is budy , fail instead of jumping to 3001/3002
    strictPort: true,
    origin: "http://localhost:3000/",
  },
});
