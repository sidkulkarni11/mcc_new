import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaStar, FaShieldAlt, FaHeart } from "react-icons/fa";
import therapistImg from "../assets/nishaclinic.png";

export default function About() {
    const whatsappMessage = encodeURIComponent(
        "Hello, I would like to book a therapy session with Ms. Nisha Shah."
    );

    return (
        <section
            id="about"
            className="relative bg-gradient-to-b from-[#F7F9FF] via-[#F2F6FF] to-[#EEF3FF] border-t border-gray-200 overflow-hidden
                 pt-[95px] sm:pt-[110px] pb-20 px-6"
        >
            {/* Soft background accents */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#DCE8FF] blur-3xl opacity-60" />
            <div className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#E9DDFF] blur-3xl opacity-60" />

            {/* IMPORTANT: z-20 ensures buttons/links always clickable */}
            <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* IMAGE */}
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-full max-w-[480px]">
                        {/* Glow */}
                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#0D3B66]/20 via-transparent to-[#8A5BFF]/15 blur-2xl opacity-70" />

                        {/* Frame */}
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
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-gray-100 shadow text-sm font-semibold text-[#0D3B66]">
                  <FaStar className="text-[#0D3B66]" />
                  Founder • Lead Psychologist
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEXT */}
                <div className="relative">
                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D3B66]/10 text-[#0D3B66] font-semibold text-sm">
                        Meet Our Founder & CEO
                    </p>

                    <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0D2440] leading-tight">
                        Nisha Shah
                    </h2>

                    <h3 className="mt-3 text-lg sm:text-xl font-semibold text-gray-700">
                        Lead Psychologist & Mental Wellness Expert
                    </h3>

                    {/* Premium chips */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Chip icon={<FaShieldAlt />} text="Evidence-based therapy" />
                        <Chip icon={<FaHeart />} text="Empathy-first approach" />
                        <Chip icon={<FaStar />} text="12+ years experience" />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="mt-7 space-y-4">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            As the Founder & CEO of{" "}
                            <span className="font-semibold text-gray-900">
                Mindopiia Counselling Centre
              </span>
                            , Nisha Shah has dedicated her life to creating a safe, warm, and deeply
                            human space for emotional healing.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Her approach blends clinical clarity with compassionate listening —
                            helping individuals feel understood, supported, and empowered. Over the
                            years, she has guided people through anxiety, stress, relationship
                            challenges, identity concerns, and emotional burnout toward stability,
                            clarity, and inner strength.
                        </p>
                    </div>

                    {/* Founder note (premium glass card) */}
                    <div className="mt-9 rounded-3xl border border-white/70 bg-white/70 backdrop-blur-md shadow-lg overflow-hidden">
                        <div className="p-7">
                            <p className="text-gray-700 italic leading-relaxed text-[1.05rem]">
                                “Every person deserves a space where they can fall apart safely, be
                                heard fully, and rebuild gently. Mindopiia was created to be that
                                space — a home for emotional clarity, healing, and growth.”
                            </p>

                            <div className="mt-5">
                                <p className="text-[#0D3B66] font-bold text-lg">— Nisha Shah</p>
                                <p className="text-gray-500 text-sm">
                                    Founder & CEO, Mindopiia Counselling Centre
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Area */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href={`https://wa.me/917977s977482411?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D3B66] text-white rounded-full text-lg font-semibold shadow-xl hover:bg-[#0a2d52] transition"
                        >
                            <FaWhatsapp className="text-xl" />
                            Book a Session with Nisha
                        </a>

                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold border border-[#0D3B66]/30 text-[#0D3B66] bg-white/60 backdrop-blur-md hover:bg-white transition"
                        >
                            View Services
                        </Link>
                    </div>

                    {/* Trust note */}
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                        Confidential • Non-judgemental • Online & Offline Sessions Available
                    </p>
                </div>
            </div>
        </section>
    );
}

/* ---------- Small UI Components ---------- */

function Chip({ icon, text }) {
    return (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-gray-100 shadow-sm text-sm font-semibold text-gray-700">
      <span className="text-[#0D3B66]">{icon}</span>
            {text}
    </span>
    );
}
