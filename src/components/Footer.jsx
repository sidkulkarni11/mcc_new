import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#0D3B66] text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

                {/* Column 1 - Logo & Intro */}
                <div>
                    <h3 className="text-xl font-semibold">Mindopiia Counselling Center</h3>
                    <p className="mt-4 text-white/80 leading-relaxed">
                        Helping you heal, grow, and transform with compassionate,
                        evidence-based psychological care.
                    </p>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-white/80">
                        <li><a href="#services" className="hover:text-white transition">Services</a></li>
                        <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Column 3 - Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Get In Touch</h4>
                    <p className="text-white/80">📞 +91 6388190328</p>
                    <p className="text-white/80">📧 mindopiia@gmail.com</p>
                    <p className="text-white/80">🌐 www.mindopiia.com</p>
                </div>

            </div>

            {/* Bottom Strip */}
            <div className="mt-10 border-t border-white/20 pt-6 text-center text-white/60 text-sm">
                © {new Date().getFullYear()} Mindopiia Counselling Center. All rights reserved.
            </div>
        </footer>
    );
}
