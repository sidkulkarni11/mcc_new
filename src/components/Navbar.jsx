import React, { useState } from "react";
import logo from "../assets/mcc_logo.jpg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinkClass = (path) =>
        `block w-full py-3 px-4 rounded-lg transition ${
            isActive(path)
                ? "bg-[#0D3B66]/10 text-[#0D3B66] font-semibold"
                : "text-[#0D3B66]/80 hover:bg-gray-100"
        }`;

    const links = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        { path: "/become-counsellor", label: "Become Counsellor" },
        { path: "/workshops", label: "Workshops" },
        { path: "/digital-products", label: "Digital Products" },
        { path: "/blogs", label: "Blogs" },
        { path: "/assessment", label: "Assessment" },
        { path: "/volunteer", label: "Volunteer" },
        { path: "/careers", label: "Careers" }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b shadow-sm">

            {/* TOP BAR */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center gap-3"
                    onClick={() => setMenuOpen(false)}
                >
                    <img src={logo} className="h-9" alt="Mindopiia Logo" />
                    <span className="text-[#0D3B66] font-medium text-[15px]">
            Mindopiia Counselling Centre
          </span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-7 text-[14px] flex-1 justify-end">
                    {links.map((link) => (
                        <Link key={link.path} to={link.path} className={`transition ${
                            isActive(link.path)
                                ? "text-[#0D3B66] font-semibold"
                                : "text-[#0D3B66]/80 hover:text-[#07385a]"
                        }`}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#0D3B66] text-3xl"
                >
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU (STACKED PROPERLY) */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-lg px-4 pb-6">

                    <div className="flex flex-col gap-2 mt-4">

                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={navLinkClass(link.path)}
                            >
                                {link.label}
                            </Link>
                        ))}

                    </div>

                </div>
            )}
        </nav>
    );
}