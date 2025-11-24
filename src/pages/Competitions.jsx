import React from "react";

export default function Competitions() {
    return (
        <div className="pt-28 bg-[#F6F9FF]">

            {/* HERO */}
            <section className="px-6 py-24 text-center bg-gradient-to-br from-white via-[#EEF3FF] to-[#EAF1FF] relative overflow-hidden">

                <div className="absolute top-10 left-16 w-64 h-64 bg-[#C6D9FF] opacity-40 blur-3xl rounded-full"></div>
                <div className="absolute bottom-10 right-16 w-72 h-72 bg-[#FFDDEE] opacity-40 blur-3xl rounded-full"></div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66] drop-shadow">
                    Growth & Expression Events
                </h1>

                <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                    A creative emotional space where individuals express, explore, and grow through
                    poetry, art, writing, reflection challenges and mindful competitions.
                </p>
            </section>

            {/* EVENT CARDS */}
            <section className="px-6 py-24 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

                    {[
                        {
                            emoji: "🎨",
                            title: "Art for Healing Challenge",
                            desc: "Express emotions through colours, shapes and imagery that speak your inner truth."
                        },
                        {
                            emoji: "📝",
                            title: "Reflective Writing Contest",
                            desc: "Write your story, your journey, your breakthrough — a safe space for emotional expression."
                        },
                        {
                            emoji: "🎤",
                            title: "Poetry & Spoken Word Showcase",
                            desc: "Share poems that carry emotion, resilience and hope — your voice matters."
                        },
                        {
                            emoji: "📸",
                            title: "Mindful Photography Challenge",
                            desc: "Capture calmness, gratitude or emotional depth in moments around you."
                        },
                        {
                            emoji: "🎭",
                            title: "Roleplay & Expression Event",
                            desc: "Explore identity, empathy, and emotional storytelling through guided drama."
                        },
                        {
                            emoji: "🧠",
                            title: "Awareness Quiz Challenge",
                            desc: "Engage in mental-health quizzes promoting awareness, clarity and reflection."
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-8 bg-[#F8FAFF] border rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                        >
                            <div className="text-5xl">{item.emoji}</div>
                            <h3 className="mt-4 text-xl font-semibold text-[#0D3B66]">{item.title}</h3>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20 bg-[#0D3B66] text-white text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold">Want to Participate?</h2>
                <p className="mt-4 text-gray-200 max-w-xl mx-auto text-lg">
                    Join our upcoming emotional-wellness competitions & creative expression events.
                </p>

                <a
                    href="https://wa.me/917977482411?text=I%20want%20to%20participate%20in%20Growth%20%26%20Expression%20Events%20at%20Mindopiia"
                    className="inline-block mt-10 px-10 py-4 bg-white text-[#0D3B66] rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition"
                >
                    Join via WhatsApp
                </a>
            </section>
        </div>
    );
}
