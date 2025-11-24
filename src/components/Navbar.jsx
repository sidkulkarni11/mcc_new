import React, { useState } from "react";
import logo from "../assets/mcc_logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm transition">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} className="h-10 w-auto object-contain" alt="Mindopiia Logo" />
                    <span className="font-semibold text-lg text-[#0D3B66]">
                        Mindopiia Counselling Center
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 text-[#0D3B66] font-medium">

                    <a href="/about" className="hover:text-[#07406b] transition">
                        About
                    </a>

                    {/* NOW A FULL PAGE */}
                    <Link to="/approaches" className="hover:text-[#07406b] transition">
                        Therapeutic Approaches
                    </Link>

                    <Link to="/career" className="hover:text-[#07406b] transition">
                        Career Counselling
                    </Link>

                    <Link to="/careercounsellor" className="hover:text-[#07406b] transition">
                        Become a Career Counsellor
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[#0D3B66] focus:outline-none"
                >
                    {open ? <span className="text-3xl">✖</span> : <span className="text-3xl">☰</span>}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-md py-4 px-6 space-y-4 text-[#0D3B66]">

                    <a href="/about" onClick={() => setOpen(false)} className="block border-b py-2">
                        About
                    </a>

                    {/* NEW PAGE NAVIGATION */}
                    <Link to="/approaches" onClick={() => setOpen(false)} className="block border-b py-2">
                        Therapeutic Approaches
                    </Link>

                    <Link to="/career" onClick={() => setOpen(false)} className="block py-2">
                        Career Counselling
                    </Link>

                    <Link to="/careercounsellor" className="hover:text-[#07406b] transition">
                        Become a Career Counsellor
                    </Link>
                </div>
            )}
        </nav>
    );
}
