import React from "react";

export default function Services() {
    return (
        <div className="pt-28 bg-[#F7FAFF]">

            {/* HERO */}
            <section className="px-6 py-20 text-center bg-gradient-to-br from-white to-[#EAF0FF]">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66]">
                    Our Services
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    A comprehensive suite of emotional wellness, therapeutic care,
                    and career guidance — designed to help you heal, grow and thrive.
                </p>
            </section>

            {/* SECTION 1 – THERAPEUTIC APPROACHES */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center">
                        Therapeutic Approaches
                    </h2>

                    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
                        Compassionate, evidence-based therapy for emotional clarity and long-term healing.
                    </p>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[
                            { icon: "👶", title: "Child & Adolescent Therapy" },
                            { icon: "💞", title: "Couple & Relationship Therapy" },
                            { icon: "❤️‍🩹", title: "Trauma-Informed Counselling" },
                            { icon: "😟", title: "Anxiety Management" },
                            { icon: "🌧️", title: "Depression Support" },
                            { icon: "🔥", title: "Stress & Burnout Therapy" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-[#F8FAFF] border rounded-3xl shadow hover:shadow-md transition"
                            >
                                <div className="text-4xl">{item.icon}</div>
                                <h3 className="mt-4 text-xl font-semibold text-[#0D3B66]">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2 – CAREER COUNSELLING */}
            <section className="px-6 py-20 bg-gradient-to-b from-[#F7FAFF] to-[#EAF0FF]">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                        Career Counselling
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Personalised guidance for students, graduates, and professionals.
                    </p>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[
                            "Career Confusion & Clarity",
                            "Stream Selection (10th & 12th)",
                            "Career Switch Guidance",
                            "Skill Mapping & Aptitude",
                            "Goal Setting & Roadmaps",
                            "Professional Growth Planning",
                        ].map((title, i) => (
                            <div
                                key={i}
                                className="p-8 bg-white border rounded-3xl shadow hover:shadow-md transition"
                            >
                                <h3 className="text-lg font-semibold text-[#0D3B66]">{title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="https://wa.me/917977482411?text=I%20want%20to%20book%20a%20career%20counselling%20session"
                        target="_blank"
                        className="mt-10 inline-block px-10 py-4 bg-[#0D3B66] text-white rounded-full shadow-lg hover:bg-[#0a2d52] transition"
                    >
                        Book a Career Session
                    </a>
                </div>
            </section>

            {/* SECTION 3 – BECOME A CAREER COUNSELLOR */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                        Become a Career Counsellor
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Professional training with certification, assessment and mentorship.
                    </p>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {[
                            { icon: "🏅", title: "Certification Training" },
                            { icon: "🧠", title: "Psychology + Career Tools" },
                            { icon: "🤝", title: "Live Practice Sessions" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-[#F7FAFF] border rounded-3xl shadow hover:shadow-md transition"
                            >
                                <div className="text-5xl">{item.icon}</div>
                                <h3 className="mt-4 text-xl font-semibold text-[#0D3B66]">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="https://wa.me/917977482411?text=I%20want%20to%20enquire%20about%20becoming%20a%20career%20counsellor"
                        target="_blank"
                        className="mt-10 inline-block px-10 py-4 bg-[#0D3B66] text-white rounded-full shadow-lg hover:bg-[#0a2d52] transition"
                    >
                        Enquire About Training
                    </a>
                </div>
            </section>
        </div>
    );
}
