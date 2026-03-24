import React, { useState } from "react";
import logo from "../assets/mcc_logo.jpg";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navLinkClass = (path) =>
        `transition-all whitespace-nowrap ${
            isActive(path)
                ? "text-[#0D3B66] font-semibold"
                : "text-[#0D3B66]/80 hover:text-[#07385a]"
        }`;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-sm">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LEFT (LOGO + NAME) */}
                <Link
                    to="/"
                    className="flex items-center gap-3 min-w-[260px]"
                    onClick={() => setMenuOpen(false)}
                >
                    <img src={logo} className="h-9 w-auto" alt="Mindopiia Logo" />

                    <span className="font-medium text-[15px] text-[#0D3B66] whitespace-nowrap">
                    Mindopiia Counselling Center
                </span>
                </Link>


                {/* RIGHT (NAV LINKS) */}
                <div className="hidden md:flex items-center gap-7 text-[14px] ml-10 flex-wrap">

                    <Link to="/" className={navLinkClass("/")}>Home</Link>
                    <Link to="/about" className={navLinkClass("/about")}>About</Link>
                    <Link to="/services" className={navLinkClass("/services")}>Services</Link>
                    <Link to="/become-counsellor" className={navLinkClass("/become-counsellor")}>
                        Become Counsellor
                    </Link>
                    <Link to="/workshops" className={navLinkClass("/workshops")}>Workshops</Link>
                    <Link to="/digital-products" className={navLinkClass("/digital-products")}>
                        Digital Products
                    </Link>
                    <Link to="/blogs" className={navLinkClass("/blogs")}>Blogs</Link>
                    <Link to="/assessment" className={navLinkClass("/assessment")}>Assessment</Link>
                    <Link to="/volunteer" className={navLinkClass("/volunteer")}>Volunteer</Link>
                    <Link to="/careers" className={navLinkClass("/careers")}>Careers</Link>

                </div>


                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#0D3B66] text-3xl"
                >
                    {menuOpen ? "✖" : "☰"}
                </button>

            </div>


            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg py-6 px-8 space-y-5 text-[#0D3B66] font-medium">

                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link to="/become-counsellor" onClick={() => setMenuOpen(false)}>
                        Become Counsellor
                    </Link>
                    <Link to="/workshops" onClick={() => setMenuOpen(false)}>Workshops</Link>
                    <Link to="/digital-products" onClick={() => setMenuOpen(false)}>
                        Digital Products
                    </Link>
                    <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
                    <Link to="/assessment" onClick={() => setMenuOpen(false)}>Assessment</Link>
                    <Link to="/volunteer" onClick={() => setMenuOpen(false)}>Volunteer</Link>
                    <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>

                </div>
            )}
        </nav>
    );
}
