import React from "react";

export default function ApproachesPage() {
    return (
        <div className="pt-28">

            {/* HERO */}
            <section className="px-6 py-20 bg-gradient-to-b from-[#F6F9FF] to-[#E8F0FF] text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-[#0D3B66]">
                    Therapeutic Approaches
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    Evidence-based, compassionate and personalised therapy methods designed to support
                    emotional healing, mental clarity and long-term psychological well-being.
                </p>
            </section>

            {/* GRID */}
            <section className="px-6 py-24 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {/* CHILD THERAPY */}
                        <div className="p-8 bg-[#F8FAFF] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">👶</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Child & Adolescent Therapy
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Emotional and behavioural support for children & teens to build confidence,
                                emotional regulation, social skills and academic well-being.
                            </p>
                        </div>

                        {/* COUPLE THERAPY */}
                        <div className="p-8 bg-[#FFF7FA] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">💞</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Couple & Relationship Therapy
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                A safe, neutral space for couples to rebuild trust, improve communication,
                                resolve conflict and strengthen emotional intimacy.
                            </p>
                        </div>

                        {/* TRAUMA COUNSELLING */}
                        <div className="p-8 bg-[#F7F9FF] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">❤️‍🩹</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Trauma-Informed Counselling
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Gentle, paced healing for childhood trauma, emotional wounds, and distressing
                                experiences — helping you regain emotional safety and resilience.
                            </p>
                        </div>

                        {/* ANXIETY */}
                        <div className="p-8 bg-[#F8FAFF] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">😟</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Anxiety Management
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Tools and strategies to manage worry, panic, overthinking, and persistent
                                fear — helping you regain calm & control.
                            </p>
                        </div>

                        {/* DEPRESSION */}
                        <div className="p-8 bg-[#FFF7FA] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">🌧️</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Depression Support
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Emotional support to navigate sadness, emptiness, and hopelessness —
                                while rebuilding motivation, joy, and meaning.
                            </p>
                        </div>

                        {/* STRESS */}
                        <div className="p-8 bg-[#F7F9FF] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">🔥</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Stress & Burnout Therapy
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Practical tools to manage emotional exhaustion, work pressure, and
                                chronic stress — restoring balance & clarity.
                            </p>
                        </div>

                        {/* SELF ESTEEM */}
                        <div className="p-8 bg-[#FFF7FA] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">🌱</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Self-Esteem & Confidence Building
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Support to help you recognise your strengths, overcome self-doubt,
                                and rebuild inner confidence.
                            </p>
                        </div>

                        {/* OVERTHINKING */}
                        <div className="p-8 bg-[#F8FAFF] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">🧠</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Overthinking & Emotional Regulation
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Learn how to break unhelpful thought loops, manage emotional overwhelm,
                                and build mental clarity.
                            </p>
                        </div>

                        {/* GRIEF */}
                        <div className="p-8 bg-[#F7F9FF] border rounded-3xl shadow-sm hover:shadow-md transition">
                            <span className="text-4xl">🕊️</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Grief & Loss Counselling
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Compassionate support through the pain of loss — helping you process,
                                heal, and move forward gently.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 py-20 bg-[#0D3B66] text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Need Guidance Choosing the Right Therapy?
                </h2>
                <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto">
                    Every journey is unique. Book a session to understand which approach best
                    supports your emotional and mental well-being.
                </p>

                <a
                    href="https://wa.me/916388190328"
                    target="_blank"
                    className="inline-block mt-10 px-10 py-4 bg-white text-[#0D3B66] rounded-full text-lg font-medium shadow-lg hover:bg-gray-100 transition"
                >
                    Book a Session
                </a>
            </section>
        </div>
    );
}
