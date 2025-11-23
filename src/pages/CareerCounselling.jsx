import React from "react";

export default function CareerCounselling() {
    return (
        <div className="pt-28 bg-[#F6F9FF]">

            {/* HERO */}
            <section className="px-6 py-24 bg-gradient-to-b from-white to-[#E9F0FF] text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66] tracking-tight">
                    Career Counselling
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed">
                    A personalized and evidence-based journey designed to help students, young adults,
                    and working professionals discover clarity, confidence, and meaningful direction.
                </p>

                <button className="mt-10 px-10 py-4 bg-[#0D3B66] text-white rounded-full shadow-xl hover:bg-[#092e4e] transition text-lg">
                    Book a Career Session
                </button>
            </section>

            {/* WHAT IT HELPS WITH */}
            <section className="px-6 py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center">
                        What Career Counselling Helps With
                    </h2>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Career Confusion",
                                desc: "Choosing between multiple streams, degree options, or future paths."
                            },
                            {
                                title: "Stream Selection",
                                desc: "Helping students select the right subjects after 10th or 12th."
                            },
                            {
                                title: "Career Switch",
                                desc: "Guidance for professionals planning a career shift or new direction."
                            },
                            {
                                title: "Skill Mapping",
                                desc: "Identifying strengths, personality traits, and hidden potential."
                            },
                            {
                                title: "Goal Setting",
                                desc: "Setting realistic career goals with a guided action plan."
                            },
                            {
                                title: "Career Roadmap",
                                desc: "A step-by-step plan for education, skills, internships & growth."
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-[#F8FAFF] border rounded-3xl shadow-md hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold text-[#0D3B66]">{item.title}</h3>
                                <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO IS IT FOR */}
            <section className="px-6 py-24 bg-[#F7F9FC]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center">
                        Who Is Career Counselling For?
                    </h2>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Students (8th–12th)",
                                desc: "Stream selection, subject confusion, and personalized guidance."
                            },
                            {
                                title: "College Students",
                                desc: "Specialization selection, confidence-building, and future decisions."
                            },
                            {
                                title: "Working Professionals",
                                desc: "Career change, upskilling, job dissatisfaction & new direction."
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-8 bg-white border rounded-3xl shadow-md hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold text-[#0D3B66]">{item.title}</h3>
                                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-24 bg-[#0D3B66] text-center text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold">
                    Ready to Begin Your Career Journey?
                </h2>

                <p className="mt-4 text-gray-200 text-lg max-w-xl mx-auto leading-relaxed">
                    Discover your strengths, gain clarity, and choose the right direction with
                    personalized, 1-on-1 guidance.
                </p>

                <a
                    href="https://wa.me/916388190328"
                    target="_blank"
                    className="inline-block mt-10 px-12 py-4 bg-white text-[#0D3B66] rounded-full text-lg font-medium shadow-xl hover:bg-gray-100 transition"
                >
                    Book a Career Session
                </a>
            </section>
        </div>
    );
}
