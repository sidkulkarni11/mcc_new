import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0D3B66] text-white py-16 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">

                {/* BRAND */}
                <div>
                    <h3 className="text-2xl font-semibold tracking-wide">
                        Mindopiia Counselling Center
                    </h3>

                    <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                        A premium mental-wellness space for emotional clarity,
                        healing and personal growth.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="text-xl font-semibold">Quick Links</h4>

                    <ul className="mt-5 space-y-3 text-gray-300 text-sm leading-relaxed">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/volunteer" className="hover:text-white">Volunteer</Link></li>
                        <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-xl font-semibold">Contact Us</h4>

                    <div className="mt-5 space-y-4 text-gray-300 text-sm leading-relaxed">

                        {/* LOCATION */}
                        <div className="flex items-start gap-3">
                            <span className="text-lg">📍</span>
                            <span>Mumbai, India</span>
                        </div>

                        {/* PHONE NUMBERS */}
                        <div className="flex items-start gap-3">
                            <span className="text-lg">📞</span>
                            <div className="flex flex-col">
                                <a
                                    href="tel:+917977482411"
                                    className="hover:text-white"
                                >
                                    +91 79 7748 2411
                                </a>
                                <a
                                    href="tel:+919773842512"
                                    className="hover:text-white"
                                >
                                    +91 97 7384 2512
                                </a>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="flex items-start gap-3">
                            <span className="text-lg">✉️</span>
                            <a
                                href="mailto:mindopiia@gmail.com"
                                className="hover:text-white break-all"
                            >
                                mindopiia@gmail.com
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/20 my-8 mx-auto w-[90%]"></div>

            {/* COPYRIGHT */}
            <div className="text-center text-gray-400 text-xs tracking-wide">
                © {new Date().getFullYear()} Mindopiia Counselling Center · All Rights Reserved
            </div>
        </footer>
    );
}
