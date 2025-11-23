import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";   // ← THIS IS THE IMPORTANT FIX

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
