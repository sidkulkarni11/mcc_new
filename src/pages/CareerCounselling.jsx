import React from "react";

export default function CareerCounselling() {

    // WhatsApp message for all CTAs
    const waMsg = encodeURIComponent(
        "Hello, I would like to book a Career Counselling session."
    );
    const waLink = `https://wa.me/917977482411?text=${waMsg}`;

    return (
        <div className="pt-28 bg-[#F5F8FF]">

            {/* HERO SECTION */}
            <section className="relative px-6 py-28 text-center bg-gradient-to-br from-white via-[#EEF3FF] to-[#E3EBFF] overflow-hidden">

                {/* Soft Glow */}
                <div className="absolute top-16 left-10 w-72 h-72 bg-[#BFD4FF] opacity-40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD9F0] opacity-40 rounded-full blur-3xl"></div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66] tracking-tight drop-shadow-md">
                    Career Counselling
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
                    Build clarity, confidence, and meaningful direction through a
                    deeply personalized, psychology-backed career counselling experience.
                </p>

                {/* Book Button */}
                <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-block px-12 py-4 bg-[#0D3B66] text-white rounded-full text-lg shadow-xl hover:bg-[#092e4e] transition"
                >
                    Book a Career Session
                </a>

                {/* Tagline */}
                <div className="mt-12 mx-auto max-w-xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-5">
                    <p className="text-[#0D3B66] font-medium">
                        🧠 Evidence-based guidance for students, graduates & professionals
                    </p>
                </div>
            </section>


            {/* WHAT IT HELPS WITH */}
            <section className="px-6 py-24 bg-white">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D3B66]">
                        What Career Counselling Helps With
                    </h2>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                        {[
                            { icon: "🧭", title: "Career Confusion", desc: "Choosing between multiple streams, degrees, and future options." },
                            { icon: "📘", title: "Stream Selection", desc: "Deciding the right subjects after 10th or 12th based on aptitude." },
                            { icon: "🔄", title: "Career Switch", desc: "For professionals planning a fresh direction or industry shift." },
                            { icon: "✨", title: "Skill Mapping", desc: "Identify strengths, personality patterns and hidden potential." },
                            { icon: "🎯", title: "Goal Setting", desc: "Achievable short-term and long-term goals for focused growth." },
                            { icon: "🛤️", title: "Career Roadmap", desc: "Step-by-step guidance for education, skills, internships, and job success." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-[#F8FAFF] border rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-[#0D3B66]">{item.title}</h3>
                                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* WHO IS IT FOR */}
            <section className="px-6 py-24 bg-gradient-to-b from-[#F7FAFF] to-[#EBF1FF]">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D3B66]">
                        Who Is Career Counselling For?
                    </h2>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12">

                        {[
                            { icon: "🎓", title: "Students (8th–12th)", desc: "Stream selection, confusion management, exam clarity & future planning." },
                            { icon: "🧑‍💻", title: "College Students", desc: "Specialization clarity, portfolio building & professional identity." },
                            { icon: "💼", title: "Working Professionals", desc: "Upskilling, career transitions, burnout recovery & growth strategy." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-white border rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition transform"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-[#0D3B66]">{item.title}</h3>
                                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* PREMIUM CTA */}
            <section className="relative px-6 py-28 bg-[#0D3B66] text-center text-white">

                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#FFFFFF55,#0D3B66)]"></div>

                <div className="relative">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Ready to Begin Your Career Journey?
                    </h2>

                    <p className="mt-4 text-gray-200 text-lg max-w-xl mx-auto leading-relaxed">
                        Unlock clarity, build confidence, and choose a meaningful direction with personalized, 1-on-1 career guidance.
                    </p>

                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-10 px-12 py-4 bg-white text-[#0D3B66] rounded-full text-lg font-medium shadow-2xl hover:bg-gray-100 transition"
                    >
                        Book a Career Session
                    </a>
                </div>

            </section>

        </div>
    );
}
