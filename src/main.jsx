import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import "./index.css";

function RedirectHandler({ children }) {
    React.useEffect(() => {
        const redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;

        if (redirect && redirect !== window.location.pathname) {
            window.history.replaceState(null, "", redirect);
        }
    }, []);

    return children;
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <RedirectHandler>
                <App />
            </RedirectHandler>
        </BrowserRouter>
    </React.StrictMode>
);
