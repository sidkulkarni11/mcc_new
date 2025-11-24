import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0D3B66] text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-semibold tracking-wide">
                        Mindopiia Counselling Center
                    </h3>
                    <p className="text-gray-200 mt-3 text-sm leading-relaxed">
                        A trusted space for emotional clarity, healing, and mental well-being.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-lg font-semibold">Quick Links</h4>
                    <ul className="mt-4 space-y-2 text-gray-200 text-sm">

                        {/* Home Page Sections */}
                        <li>
                            <Link to="/#about" className="hover:text-white">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/#approaches" className="hover:text-white">
                                Therapeutic Approaches
                            </Link>
                        </li>

                        <li>
                            <Link to="/career" className="hover:text-white">
                                Career Counselling
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold">Contact</h4>
                    <ul className="mt-4 text-gray-200 text-sm space-y-2">
                        <li>Mumbai, India</li>
                        <li>mindopiia@gmail.com</li>
                        <li>+91 63881 90328</li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-10 text-gray-300 text-sm">
                © {new Date().getFullYear()} Mindopiia Counselling Center. All rights reserved.
            </div>
        </footer>
    );
}
