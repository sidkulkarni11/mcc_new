import React from "react";

export default function BecomeCounsellor() {

    // Pre-filled WhatsApp message
    const waMsg = encodeURIComponent(
        "Hello, I want to enquire about becoming a Career Counsellor at Mindopiia."
    );
    const waLink = `https://wa.me/917977482411?text=${waMsg}`;

    return (
        <div className="pt-28">

            {/* HERO — Premium gradient + glow */}
            <section className="relative px-6 py-24 bg-gradient-to-br from-[#FDFBFF] via-[#EEF3FF] to-[#EBF1FF] text-center overflow-hidden">

                {/* Soft Glow Circles */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#CFE2FF] opacity-30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFDDEE] opacity-40 rounded-full blur-3xl"></div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66] tracking-tight drop-shadow-sm">
                    Become a Career Counsellor
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
                    Shape futures. Empower young minds. Build a meaningful career guiding
                    students, graduates, and professionals toward clarity & success with
                    Mindopiia’s elite professional counsellor training program.
                </p>

                <a
                    href={waLink}
                    target="_blank"
                    className="inline-block mt-10 px-10 py-4 bg-[#0D3B66] text-white rounded-full
                               text-lg font-medium shadow-xl hover:bg-[#082f52] transition
                               backdrop-blur-md"
                >
                    Enquire for Training
                </a>

                {/* Glass Panel */}
                <div className="mt-16 mx-auto max-w-4xl bg-white/50 backdrop-blur-xl shadow-xl border border-white/30 rounded-2xl p-6">
                    <p className="text-[#0D3B66] text-lg font-medium">
                        💫 Certification • Live Practice • Real Assessments • Elite Mentorship
                    </p>
                </div>
            </section>

            {/* WHY BECOME A COUNSELLOR */}
            <section className="px-6 py-24 bg-[#FAFBFF]">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D3B66]">
                    Why Choose Career Counselling as a Profession?
                </h2>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        {
                            icon: "✨",
                            title: "High Growth Field",
                            desc: "Schools, colleges & corporates actively seek trained counselling professionals."
                        },
                        {
                            icon: "💛",
                            title: "Deeply Rewarding",
                            desc: "Guide people into careers aligned with their strengths & emotional well-being."
                        },
                        {
                            icon: "🌟",
                            title: "Independent Practice",
                            desc: "Earn through private sessions, workshops, school tie-ups & corporate programs."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-2xl p-8 border border-[#E6ECFF]
                                       hover:shadow-2xl hover:-translate-y-1 transition transform"
                        >
                            <div className="text-5xl">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mt-2 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CURRICULUM SECTION */}
            <section className="px-6 py-24 bg-gradient-to-b from-white to-[#F1F5FF]">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D3B66]">
                    What You Will Learn
                </h2>

                <div className="mt-16 max-w-4xl mx-auto space-y-8">
                    {[
                        "Career assessment tools & interpretation",
                        "Stream selection & career path mapping",
                        "Understanding personality, strengths & aptitude",
                        "Career counselling conversation frameworks",
                        "Parent–student counselling techniques",
                        "Modern careers, specializations & industry insights",
                        "Building roadmaps & actionable plans",
                        "How to start your counselling practice"
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 bg-white shadow-lg p-6 rounded-2xl border border-[#E4EAFB] hover:shadow-xl transition"
                        >
                            <div className="text-2xl text-[#0D3B66]">📘</div>
                            <p className="text-gray-700 text-lg">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY MINDOPIIA */}
            <section className="px-6 py-24 bg-[#0D3B66] text-white relative overflow-hidden">

                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#FFFFFF55,#0D3B66)]"></div>

                <div className="relative max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Why Train with Mindopiia?
                    </h2>

                    <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-lg">
                        Led by <strong>Nisha Shah</strong>, Founder & CEO — this program blends
                        psychological depth with practical industry-ready training to help
                        you become a confident and respected counsellor.
                    </p>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: "🏅",
                                title: "Certification",
                                desc: "Get professionally evaluated & certified after training."
                            },
                            {
                                icon: "🧠",
                                title: "Psychology + Practicality",
                                desc: "Emotional understanding + career frameworks = holistic learning."
                            },
                            {
                                icon: "🤝",
                                title: "Live Practice Sessions",
                                desc: "Mock sessions, worksheets, roleplays & supervised counselling practice."
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-xl p-8 rounded-xl border border-white/20 shadow-lg"
                            >
                                <div className="text-5xl">{item.icon}</div>
                                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                                <p className="text-gray-200 mt-2 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                    Ready to Start Your Journey?
                </h2>

                <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
                    Join Mindopiia’s elite counsellor training program and begin a purposeful,
                    respected and impactful counselling career.
                </p>

                <a
                    href={waLink}
                    target="_blank"
                    className="inline-block mt-10 px-10 py-4 bg-[#0D3B66] text-white rounded-full text-lg shadow-xl hover:bg-[#082f52] transition"
                >
                    Talk to Us on WhatsApp
                </a>
            </section>
        </div>
    );
}
