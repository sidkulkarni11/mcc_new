import React from "react";

export default function CareerCounselling() {
    return (
        <div className="pt-28 bg-[#F5F8FF]">

            {/* HERO SECTION */}
            <section className="relative px-6 py-28 text-center bg-gradient-to-br from-white via-[#EEF3FF] to-[#E5EEFF] overflow-hidden">

                {/* Glow Elements */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#C6D9FF] opacity-40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFDDEE] opacity-40 rounded-full blur-3xl"></div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66] tracking-tight drop-shadow-md">
                    Career Counselling
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
                    Discover clarity, confidence, and meaningful direction through a deeply
                    personalized, psychology-backed counselling experience.
                </p>

                <button className="mt-10 px-12 py-4 bg-[#0D3B66] text-white rounded-full shadow-xl hover:bg-[#092e4e] transition text-lg">
                    Book a Career Session
                </button>

                {/* Tagline box */}
                <div className="mt-14 mx-auto max-w-xl bg-white/50 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl p-5">
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
                            { icon: "🧭", title: "Career Confusion", desc: "Choosing between multiple streams, degrees, or future directions." },
                            { icon: "📚", title: "Stream Selection", desc: "Helping students choose the right subjects after 10th or 12th." },
                            { icon: "🔄", title: "Career Switch", desc: "Guidance for professionals planning a career shift or new direction." },
                            { icon: "✨", title: "Skill Mapping", desc: "Identifying strengths, personality type, and hidden talents." },
                            { icon: "🎯", title: "Goal Setting", desc: "Clear, realistic career goals backed by psychology & strategy." },
                            { icon: "🛣️", title: "Career Roadmap", desc: "Step-by-step plan: education, skills, internships & growth." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-[#F8FAFF] border rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-[#0D3B66]">{item.title}</h3>
                                <p className="text-gray-600 mt-3 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* WHO IS IT FOR */}
            <section className="px-6 py-24 bg-gradient-to-b from-[#F8FAFF] to-[#EEF3FF]">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D3B66]">
                        Who Is Career Counselling For?
                    </h2>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12">

                        {[
                            { icon: "🎓", title: "Students (8th–12th)", desc: "Stream selection, exam stress, subject confusion & future planning." },
                            { icon: "🧑‍💻", title: "College Students", desc: "Specialization choice, career identity & post-graduation path." },
                            { icon: "💼", title: "Working Professionals", desc: "Career pivoting, upskilling, burnout recovery & new direction." },
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
            <section className="relative px-6 py-28 bg-[#0D3B66] text-center text-white overflow-hidden">

                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#FFFFFF55,#0D3B66)]"></div>

                <div className="relative">
                    <h2 className="text-3xl md:text-4xl font-extrabold">
                        Ready to Begin Your Career Journey?
                    </h2>

                    <p className="mt-4 text-gray-200 text-lg max-w-xl mx-auto leading-relaxed">
                        Get personalized, 1-on-1 guidance to discover your strengths, align your goals,
                        and choose a meaningful, fulfilling professional path.
                    </p>

                    <a
                        href="https://wa.me/916388190328"
                        target="_blank"
                        className="inline-block mt-10 px-12 py-4 bg-white text-[#0D3B66] rounded-full text-lg font-medium shadow-2xl hover:bg-gray-100 transition"
                    >
                        Book a Career Session
                    </a>
                </div>
            </section>
        </div>
    );
}
