import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import RedirectHandler from "./components/RedirectHandler.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* Remove RedirectHandler permanently */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
