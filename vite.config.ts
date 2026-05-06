import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// NEO THE AGENCY homepage — served at /Neo_Homepage_Apple/ for parity with
// the DM UK v3_apple project. Local dev runs on port 5182 so the two can
// run side-by-side.
export default defineConfig({
  plugins: [react()],
  base: "/Neo_Homepage_Apple/",
  server: {
    port: 5182,
    host: true,
    strictPort: true,
  },
});
