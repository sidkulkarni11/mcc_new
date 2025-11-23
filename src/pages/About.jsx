import React from "react";
import therapistImg from "../assets/nishaclinic.jpeg";

export default function About() {
    return (
        <section
            id="about"
            className="py-32 px-6 bg-gradient-to-b from-[#F6F8FF] to-[#EEF3FF] border-t border-gray-200"
        >
            <div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center
                animate-fadeIn"
            >
                {/* IMAGE */}
                <div className="flex justify-center">
                    <div className="w-[430px] h-[580px] overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
                        <img
                            src={therapistImg}
                            alt="Founder & CEO - Mindopiia Counselling Center"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

                {/* TEXT */}
                <div className="pr-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B66] leading-snug">
                        Meet Our Founder & CEO
                    </h2>

                    <h3 className="mt-3 text-2xl font-semibold text-gray-800">
                        <span className="text-[#0D3B66]">Nisha Shah</span>
                        <br />
                        Lead Psychologist & Mental Wellness Expert
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                        As the Founder & CEO of Mindopiia Counselling Center,{" "}
                        <span className="font-semibold text-gray-800">Nisha Shah</span> has
                        dedicated her life to creating a safe, warm, and deeply human space
                        for emotional healing. Her approach blends evidence-based therapy
                        with compassionate listening, helping individuals feel understood,
                        supported, and empowered.
                    </p>

                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        With extensive experience in emotional wellness, identity work,
                        trauma understanding, and relationship guidance, Nisha has helped
                        countless individuals move from anxiety and overwhelm to clarity,
                        balance, and inner strength.
                    </p>

                    {/* FOUNDER NOTE BOX */}
                    <div className="mt-8 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                        <p className="text-gray-700 italic leading-relaxed">
                            “Every person deserves a space where they can fall apart safely,
                            be heard fully, and rebuild gently. Mindopiia was created to be
                            that space — a home for emotional clarity, healing, and growth.”
                        </p>

                        {/* SIGNATURE */}
                        <p className="mt-4 text-[#0D3B66] font-semibold text-xl">
                            — Nisha Shah
                        </p>
                        <p className="text-gray-500 text-sm">Founder & CEO, Mindopiia</p>
                    </div>

                    {/* CTA BUTTON */}
                    <button className="mt-10 px-8 py-4 bg-[#0D3B66] text-white rounded-full text-lg shadow-lg hover:bg-[#0a2d52] transition">
                        Book a Session with Nisha
                    </button>
                </div>
            </div>
        </section>
    );
}
