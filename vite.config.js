import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // This will allow access from any IP address
    port: 5173,
  },
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
});
