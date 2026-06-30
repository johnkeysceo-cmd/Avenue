import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@avenuejs/admin/index.css";
import App from "@avenuejs/admin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
