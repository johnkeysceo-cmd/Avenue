import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@avenuejs/vendor/index.css";
import App from "@avenuejs/vendor";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
