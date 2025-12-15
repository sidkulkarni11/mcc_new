import React, { useState } from "react";
import logo from "../assets/mcc_logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO + TEXT LEFT */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} className="h-9 w-auto" alt="Mindopiia Logo" />
                    <span className="font-normal text-[15px] text-[#0D3B66] leading-none whitespace-nowrap">
                        Mindopiia Counselling Center
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-10 text-[#0D3B66] font-medium text-[15px]">

                    <Link to="/" className="hover:text-[#07385a] transition-all whitespace-nowrap">
                        Home
                    </Link>

                    <Link to="/about" className="hover:text-[#07385a] transition-all">
                        About
                    </Link>

                    <Link to="/services" className="hover:text-[#07385a] transition-all">
                        Services
                    </Link>

                    <Link to="/digital-products" className="hover:text-[#07385a] transition-all whitespace-nowrap">
                        Digital Products
                    </Link>

                    <Link to="/events" className="hover:text-[#07385a] transition-all whitespace-nowrap">
                        Events
                    </Link>

                    <Link to="/blogs" className="hover:text-[#07385a] transition-all">
                        Blogs
                    </Link>

                    <Link to="/assessment" className="hover:text-[#07406b] transition">
                        Assessment
                    </Link>

                    <Link to="/volunteer" className="hover:text-[#07385a] transition-all whitespace-nowrap">
                        Volunteer
                    </Link>

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

                    <Link to="/" onClick={() => setMenuOpen(false)} className="block">
                        Home
                    </Link>

                    <Link to="/about" onClick={() => setMenuOpen(false)} className="block">
                        About
                    </Link>

                    <Link to="/services" onClick={() => setMenuOpen(false)} className="block">
                        Services
                    </Link>

                    <Link to="/digital-products" onClick={() => setMenuOpen(false)} className="block">
                        Digital Products
                    </Link>

                    <Link to="/events" onClick={() => setMenuOpen(false)} className="block">
                        Events
                    </Link>

                    <Link to="/assessment" onClick={() => setMenuOpen(false)} className="block">
                        Assessment
                    </Link>

                    <Link to="/volunteer" onClick={() => setMenuOpen(false)} className="block">
                        Volunteer
                    </Link>
                </div>
            )}
        </nav>
    );
}
