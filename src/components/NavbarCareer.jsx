import React from "react";
import logo from "../assets/mcc_logo.jpg";
import { Link } from "react-router-dom";

export default function NavbarCareer() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo + Name */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        className="h-10 w-auto object-contain"
                        alt="Mindopiia Logo"
                    />
                    <span className="font-semibold text-lg text-[#0D3B66]">
                        Mindopiia Counselling Center
                    </span>
                </Link>

                {/* Career Page Title */}
                <span className="text-lg md:text-xl font-semibold text-[#0D3B66]">
                    Career Counselling
                </span>
            </div>
        </nav>
    );
}
