import React from "react";

export default function Hero() {
    // Smooth scroll to “Approaches” section
    const scrollToApproaches = () => {
        const section = document.getElementById("approaches");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Pre-filled WhatsApp message (Category: Therapy Appointment)
    const whatsappMessage = encodeURIComponent(
        "Hello, I would like to book a therapy appointment with Mindopiia."
    );

    return (
        <section className="pt-40 pb-32 px-6 bg-gradient-to-b from-[#F6F9FF] to-[#E8F0FF]">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-[#0D3B66] leading-tight">
                    Heal. Grow. Transform.
                </h1>

                {/* Subtext */}
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    A safe, compassionate and confidential space to find clarity, peace,
                    and emotional well-being — guided by evidence-based psychological support.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex justify-center gap-6">

                    {/* Book Session with WhatsApp message */}
                    <a
                        href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full bg-[#0D3B66] text-white text-lg shadow-lg hover:bg-[#0b3156] transition"
                    >
                        Book an Appointment
                    </a>

                    {/* Explore Approaches */}
                    <button
                        onClick={scrollToApproaches}
                        className="px-8 py-3 rounded-full border border-[#0D3B66] text-[#0D3B66] text-lg hover:bg-[#E4ECFF] transition"
                    >
                        Explore Therapeutic Approaches
                    </button>
                </div>

            </div>
        </section>
    );
}
