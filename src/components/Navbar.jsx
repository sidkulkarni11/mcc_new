import React, { useState } from "react";
import logo from "../assets/mcc_logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* LOGO + NAME */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        className="h-10 w-auto object-contain"
                        alt="Mindopiia Logo"
                    />
                    <span className="font-semibold text-lg text-[#0D3B66] whitespace-nowrap">
                        Mindopiia Counselling Center
                    </span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8 text-[#0D3B66] font-medium">

                    <Link to="/about" className="hover:text-[#07406b] transition">
                        About
                    </Link>

                    <Link to="/approaches" className="hover:text-[#07406b] transition">
                        Approaches
                    </Link>

                    <Link to="/career" className="hover:text-[#07406b] transition whitespace-nowrap">
                        Career Counselling
                    </Link>

                    <Link to="/careercounsellor" className="hover:text-[#07406b] transition whitespace-nowrap">
                        Become a Counsellor
                    </Link>

                    <Link to="/volunteer" className="hover:text-[#07406b] transition whitespace-nowrap">
                        Volunteer
                    </Link>

                    <Link to="/events" className="hover:text-[#07406b] transition whitespace-nowrap">
                        Growth & Expression Events
                    </Link>

                    {/*<Link to="/admin" className="hover:text-[#07406b] transition font-semibold whitespace-nowrap">
                        Control Center
                    </Link>*/}
                </div>

                {/* MOBILE MENU BTN */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[#0D3B66] text-3xl"
                >
                    {open ? "✖" : "☰"}
                </button>
            </div>

            {/* MOBILE DROPDOWN */}
            {open && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl py-5 px-6 space-y-4 text-[#0D3B66] font-medium border-t">

                    <Link to="/about" onClick={() => setOpen(false)} className="block">
                        About
                    </Link>

                    <Link to="/approaches" onClick={() => setOpen(false)} className="block">
                        Approaches
                    </Link>

                    <Link to="/career" onClick={() => setOpen(false)} className="block">
                        Career Counselling
                    </Link>

                    <Link to="/careercounsellor" onClick={() => setOpen(false)} className="block">
                        Become a Counsellor
                    </Link>

                    <Link to="/volunteer" onClick={() => setOpen(false)} className="block">
                        Volunteer
                    </Link>

                   {/* <Link to="/events" onClick={() => setOpen(false)} className="block">
                        Growth & Expression Events
                    </Link>*/}


                </div>
            )}
        </nav>
    );
}
