import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirect = sessionStorage.redirect;

        if (redirect) {
            delete sessionStorage.redirect;
            navigate(redirect, { replace: true });
        }
    }, [navigate]);

    return null;
}
