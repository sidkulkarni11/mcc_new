import React from "react";
import logo from "../assets/mcc_logo.jpg";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* Left Logo Section */}
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Mindopiia Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <span className="font-semibold text-lg text-[#0D3B66]">
            Mindopiia Counselling Center
          </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-8 text-[#0D3B66] font-medium">
                    <a href="#services" className="hover:text-[#07406b] transition">Services</a>
                    <a href="#about" className="hover:text-[#07406b] transition">About</a>
                    <a href="#contact" className="hover:text-[#07406b] transition">Contact</a>
                </div>
            </div>
        </nav>
    );
}
