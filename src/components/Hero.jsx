import React from "react";

export default function Hero() {
    return (
        <section className="pt-40 pb-32 px-6 bg-gradient-to-b from-[#F6F9FF] to-[#E8F0FF]">
            <div className="max-w-6xl mx-auto text-center">

                <h1 className="text-4xl md:text-6xl font-bold text-[#0D3B66] leading-tight">
                    Heal. Grow. Transform.
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    A safe, compassionate and confidential space to find clarity, peace and emotional well-being —
                    guided by evidence-based psychological support.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex justify-center gap-6">
                    <button className="px-8 py-3 rounded-full bg-[#0D3B66] text-white text-lg shadow-lg hover:bg-[#0b3156] transition">
                        Book a Session
                    </button>

                    <button className="px-8 py-3 rounded-full border border-[#0D3B66] text-[#0D3B66] text-lg hover:bg-[#E4ECFF] transition">
                        View Services
                    </button>
                </div>

            </div>
        </section>
    );
}
