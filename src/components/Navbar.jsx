import React, { useState } from "react";
import logo from "../assets/mcc_logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} className="h-9 w-auto" alt="Mindopiia Logo" />
                    <span className="font-semibold text-lg text-[#0D3B66] whitespace-nowrap">
                        Mindopiia Counselling Center
                    </span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8 text-[#0D3B66] font-medium">

                    <Link to="/about" className="hover:text-[#07406b] transition">
                        About
                    </Link>

                    {/* SINGLE SERVICES PAGE */}
                    <Link to="/services" className="hover:text-[#07406b] transition whitespace-nowrap">
                        Services
                    </Link>

                    <Link
                        to="/events"
                        className="hover:text-[#07406b] transition whitespace-nowrap"
                    >
                        Events
                    </Link>

                    <Link to="/volunteer" onClick={() => setMenuOpen(false)} className="block">
                        Volunteer
                    </Link>

                   {/* <Link
                        to="/admin"
                        className="hover:text-[#07406b] transition whitespace-nowrap"
                    >
                        Control Center
                    </Link>*/}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#0D3B66] text-3xl"
                >
                    {menuOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* MOBILE DROPDOWN */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-md py-4 px-6 space-y-4 text-[#0D3B66]">

                    <Link to="/about" onClick={() => setMenuOpen(false)} className="block">
                        About
                    </Link>

                    <Link to="/services" onClick={() => setMenuOpen(false)} className="block">
                        Services
                    </Link>

                    <Link to="/events" onClick={() => setMenuOpen(false)} className="block">
                        Events
                    </Link>

                    <Link to="/volunteer" onClick={() => setMenuOpen(false)} className="block">
                        Volunteer
                    </Link>

                   {/* <Link to="/admin" onClick={() => setMenuOpen(false)} className="block">
                        Control Center
                    </Link>*/}
                </div>
            )}
        </nav>
    );
}
