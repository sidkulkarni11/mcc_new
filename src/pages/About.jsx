import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaStar, FaShieldAlt, FaHeart } from "react-icons/fa";
import therapistImg from "../assets/nishaclinic.png";

export default function About() {

    // ✅ Proper encoded message
    const whatsappMessage = encodeURIComponent(
        "Hello, I would like to book a therapy session with Ms. Nisha Shah."
    );

    // ✅ Correct WhatsApp number
    const whatsappLink = `https://wa.me/917977482411?text=${whatsappMessage}`;

    return (
        <section
            id="about"
            className="relative bg-gradient-to-b from-[#F7F9FF] via-[#F2F6FF] to-[#EEF3FF] border-t border-gray-200 overflow-hidden
                 pt-[95px] sm:pt-[110px] pb-20 px-6"
        >
            {/* Background */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#DCE8FF] blur-3xl opacity-60" />
            <div className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#E9DDFF] blur-3xl opacity-60" />

            <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* IMAGE */}
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-full max-w-[480px]">

                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#0D3B66]/20 via-transparent to-[#8A5BFF]/15 blur-2xl opacity-70" />

                        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-white/60 bg-white/60 backdrop-blur-md">
                            <div className="p-2">
                                <div className="overflow-hidden rounded-[1.7rem]">
                                    <img
                                        src={therapistImg}
                                        alt="Founder & CEO - Mindopiia Counselling Centre"
                                        className="w-full h-[360px] sm:h-[520px] md:h-[560px] object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="absolute top-5 left-5">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border shadow text-sm font-semibold text-[#0D3B66]">
                                    <FaStar />
                                    Founder • Lead Psychologist
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEXT */}
                <div>

                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D3B66]/10 text-[#0D3B66] font-semibold text-sm">
                        Meet Our Founder & CEO
                    </p>

                    <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0D2440]">
                        Nisha Shah
                    </h2>

                    <h3 className="mt-3 text-lg font-semibold text-gray-700">
                        Lead Psychologist & Mental Wellness Expert
                    </h3>

                    {/* Chips */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Chip icon={<FaShieldAlt />} text="Evidence-based therapy" />
                        <Chip icon={<FaHeart />} text="Empathy-first approach" />
                        <Chip icon={<FaStar />} text="12+ years experience" />
                    </div>

                    {/* Description */}
                    <div className="mt-7 space-y-4">
                        <p className="text-lg text-gray-700">
                            As the Founder & CEO of{" "}
                            <span className="font-semibold text-gray-900">
                                Mindopiia Counselling Centre
                            </span>, she has created a safe and warm space for emotional healing.
                        </p>

                        <p className="text-lg text-gray-700">
                            Her approach blends clinical clarity with compassionate listening —
                            helping individuals overcome stress, anxiety, and relationship challenges.
                        </p>
                    </div>

                    {/* Quote */}
                    <div className="mt-9 rounded-3xl border bg-white/70 backdrop-blur-md shadow-lg p-7">
                        <p className="text-gray-700 italic">
                            “Every person deserves a space where they can fall apart safely, be heard fully, and rebuild gently.”
                        </p>

                        <p className="mt-4 text-[#0D3B66] font-bold">
                            — Nisha Shah
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">

                        {/* ✅ FIXED BUTTON */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D3B66] text-white rounded-full text-lg font-semibold shadow-xl hover:bg-[#0a2d52] transition"
                        >
                            <FaWhatsapp />
                            Book a Session
                        </a>

                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold border border-[#0D3B66]/30 text-[#0D3B66] bg-white hover:bg-gray-50 transition"
                        >
                            View Services
                        </Link>

                    </div>

                    <p className="mt-4 text-sm text-gray-500">
                        Confidential • Non-judgemental • Online & Offline Sessions
                    </p>

                </div>
            </div>
        </section>
    );
}


/* COMPONENTS */

function Chip({ icon, text }) {
    return (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm text-sm font-semibold text-gray-700">
            <span className="text-[#0D3B66]">{icon}</span>
            {text}
        </span>
    );
}