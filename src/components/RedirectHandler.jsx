import { useEffect } from "react";

export default function RedirectHandler({ children }) {
    useEffect(() => {
        const redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;

        if (redirect && redirect !== window.location.pathname) {
            window.history.replaceState(null, "", redirect);
        }
    }, []);

    return children;
}
