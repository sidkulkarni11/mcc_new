import React from "react";

export default function ApproachesPage() {

    const waMsg = encodeURIComponent(
        "Hello, I want to book an appointment regarding therapy/counselling. Please guide me."
    );
    const waLink = `https://wa.me/917977482411?text=${waMsg}`;

    return (
        <div className="pt-28">

            {/* HERO */}
            <section className="px-6 py-20 bg-gradient-to-b from-[#F6F9FF] to-[#E8F0FF] text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-[#0D3B66]">
                    Therapeutic Approaches
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    Evidence-based, compassionate, and personalised therapy methods designed
                    to support emotional healing, mental clarity, and long-term emotional well-being.
                </p>
            </section>

            {/* GRID */}
            <section className="px-6 py-24 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {/* CHILD THERAPY */}
                        <div className="p-8 bg-gradient-to-b from-[#F8FAFF] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">👶</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Child & Adolescent Therapy
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Emotional & behavioural support to help children and teens develop
                                confidence, emotional regulation & academic well-being.
                            </p>
                        </div>

                        {/* COUPLE THERAPY */}
                        <div className="p-8 bg-gradient-to-b from-[#FFF5FA] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">💞</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Couple & Relationship Therapy
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                A safe space for couples to rebuild trust, communicate better,
                                resolve conflicts & deepen emotional connection.
                            </p>
                        </div>

                        {/* TRAUMA */}
                        <div className="p-8 bg-gradient-to-b from-[#F7F9FF] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">❤️‍🩹</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Trauma-Informed Counselling
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Gentle, paced, trauma-sensitive therapy for emotional wounds,
                                childhood experiences & difficult memories.
                            </p>
                        </div>

                        {/* ANXIETY */}
                        <div className="p-8 bg-gradient-to-b from-[#F8FAFF] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">😟</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Anxiety Management
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Practical strategies to manage worry, panic, overthinking &
                                constant fear — regain calm, clarity & control.
                            </p>
                        </div>

                        {/* DEPRESSION */}
                        <div className="p-8 bg-gradient-to-b from-[#FFF5FA] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">🌧️</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Depression Support
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Compassionate emotional support to navigate sadness, emptiness &
                                hopelessness while rebuilding motivation & meaning.
                            </p>
                        </div>

                        {/* STRESS */}
                        <div className="p-8 bg-gradient-to-b from-[#F7F9FF] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">🔥</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Stress & Burnout Therapy
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Learn tools for emotional exhaustion, overload & work stress —
                                restore balance & psychological wellness.
                            </p>
                        </div>

                        {/* SELF ESTEEM */}
                        <div className="p-8 bg-gradient-to-b from-[#FFF5FA] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">🌱</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Self-Esteem & Confidence Building
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Heal self-doubt, build self-worth & recognise your strengths
                                with guided psychological support.
                            </p>
                        </div>

                        {/* OVERTHINKING */}
                        <div className="p-8 bg-gradient-to-b from-[#F8FAFF] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">🧠</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Overthinking & Emotional Regulation
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Break intrusive thought loops & learn techniques for emotional
                                stability and clearer decision-making.
                            </p>
                        </div>

                        {/* GRIEF */}
                        <div className="p-8 bg-gradient-to-b from-[#F7F9FF] to-white border rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                            <span className="text-4xl">🕊️</span>
                            <h3 className="text-xl font-semibold text-[#0D3B66] mt-3">
                                Grief & Loss Counselling
                            </h3>
                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                Support through the pain of loss — process, heal & rebuild gently
                                at your own pace.
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
                    Every journey is unique. Speak with us to discover which approach best
                    supports your emotional and mental well-being.
                </p>

                <a
                    href={waLink}
                    target="_blank"
                    className="inline-block mt-10 px-10 py-4 bg-white text-[#0D3B66] rounded-full text-lg font-medium shadow-lg hover:bg-gray-100 transition"
                >
                    Book a Session
                </a>
            </section>
        </div>
    );
}
