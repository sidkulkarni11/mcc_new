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
                {/* LOGO + TEXT LEFT */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => setMenuOpen(false)}
                >
                    <img src={logo} className="h-9 w-auto" alt="Mindopiia Logo" />
                    <span className="font-normal text-[15px] text-[#0D3B66] leading-none whitespace-nowrap">
            Mindopiia Counselling Center
          </span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-9 text-[15px]">
                    <Link to="/" className={navLinkClass("/")}>
                        Home
                    </Link>

                    <Link to="/about" className={navLinkClass("/about")}>
                        About
                    </Link>

                    <Link to="/services" className={navLinkClass("/services")}>
                        Services
                    </Link>

                    <Link to="/workshops" className={navLinkClass("/workshops")}>
                        Workshops
                    </Link>

                    <Link to="/digital-products" className={navLinkClass("/digital-products")}>
                        Digital Products
                    </Link>

                    <Link to="/events" className={navLinkClass("/events")}>
                        Events
                    </Link>

                    <Link to="/blogs" className={navLinkClass("/blogs")}>
                        Blogs
                    </Link>

                    <Link to="/assessment" className={navLinkClass("/assessment")}>
                        Assessment
                    </Link>

                    <Link to="/volunteer" className={navLinkClass("/volunteer")}>
                        Volunteer
                    </Link>

                    {/* ✅ Careers Added */}
                    <Link to="/careers" className={navLinkClass("/careers")}>
                        Careers
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#0D3B66] text-3xl"
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg py-6 px-8 space-y-5 text-[#0D3B66] font-medium">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="block">
                        Home
                    </Link>

                    <Link to="/about" onClick={() => setMenuOpen(false)} className="block">
                        About
                    </Link>

                    <Link to="/services" onClick={() => setMenuOpen(false)} className="block">
                        Services
                    </Link>

                    {/* ✅ Workshops Added in Mobile */}
                    <Link to="/workshops" onClick={() => setMenuOpen(false)} className="block">
                        Workshops
                    </Link>

                    <Link
                        to="/digital-products"
                        onClick={() => setMenuOpen(false)}
                        className="block"
                    >
                        Digital Products
                    </Link>

                    <Link to="/events" onClick={() => setMenuOpen(false)} className="block">
                        Events
                    </Link>

                    <Link to="/blogs" onClick={() => setMenuOpen(false)} className="block">
                        Blogs
                    </Link>

                    <Link to="/assessment" onClick={() => setMenuOpen(false)} className="block">
                        Assessment
                    </Link>

                    <Link to="/volunteer" onClick={() => setMenuOpen(false)} className="block">
                        Volunteer
                    </Link>

                    {/* ✅ Careers Added */}
                    <Link to="/careers" onClick={() => setMenuOpen(false)} className="block">
                        Careers
                    </Link>
                </div>
            )}
        </nav>
    );
}
