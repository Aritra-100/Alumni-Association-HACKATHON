import "./global.css";
import { createRoot } from "react-dom/client";
import App from "./App";

// Ensure we only create root once
const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}

// Check if root already exists to prevent the warning
let root: any;
if (!(container as any)._reactRoot) {
  root = createRoot(container);
  (container as any)._reactRoot = root;
} else {
  root = (container as any)._reactRoot;
}

root.render(<App />);
