import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Services() {

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <div className="pt-28 bg-[#F7FAFF]">

            {/* ---------- HERO ---------- */}
            <section
                className="px-6 py-20 text-center bg-gradient-to-br from-white to-[#EAF0FF]"
                data-aos="fade-down"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66]">
                    🌿 Our Services
                </h1>

                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    Each service is designed with one purpose — to help you heal, grow, and live a happier, fulfilling life.
                </p>
            </section>


            {/* ========================================================== */}
            {/* 1️⃣ PSYCHOLOGICAL COUNSELLING CENTER */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                        🧠 Psychological Counselling Center
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Every person has the potential to thrive — therapy helps you reach it.
                    </p>
                </div>
            </section>


            {/* ========================================================== */}
            {/* 2️⃣ CHILD COUNSELLING */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-gradient-to-b from-[#F7FAFF] to-[#EAF0FF]">
                <div className="max-w-6xl mx-auto">

                    <h2
                        className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center"
                        data-aos="fade-up"
                    >
                        👶 Child Counselling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {[
                            "🗣️ Difficulty expressing emotions",
                            "📚 Struggling with studies or concentration",
                            "😣 Irritability / behavioural concerns",
                            "🍽️ Eating non-food items",
                            "🫣 Nail biting, thumb sucking, hair pulling",
                            "⏳ Speech delay or stammering",
                            "🤝 Difficulty mixing with others",
                        ].map((item, i) => (
                            <div
                                key={i}
                                data-aos="fade-right"
                                className="p-6 bg-white rounded-2xl shadow border hover:shadow-md transition-transform hover:-translate-y-1"
                            >
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* ========================================================== */}
            {/* 3️⃣ EDUCATIONAL COUNSELLING */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-6xl mx-auto">

                    <h2
                        data-aos="fade-up"
                        className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center"
                    >
                        🎓 Educational Counselling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {[
                            "📘 Difficulty keeping up academically",
                            "✏️ Trouble reading or writing",
                            "📉 Weak in specific subjects",
                            "🧠 Lack of focus & concentration",
                            "🎒 Classroom behavioural concerns",
                        ].map((item, i) => (
                            <div
                                key={i}
                                data-aos="fade-left"
                                className="p-6 bg-[#F9FBFF] rounded-2xl shadow border hover:shadow-md transition-transform hover:-translate-y-1"
                            >
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* ========================================================== */}
            {/* 4️⃣ CAREER COUNSELLING */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-gradient-to-b from-[#EAF0FF] to-white">
                <div className="max-w-6xl mx-auto">

                    <h2
                        data-aos="fade-up"
                        className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center"
                    >
                        🎯 Career Counselling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

                        {[
                            "🧩 Confusion about choosing a career",
                            "👨‍👩‍👧 Parents unsure about child’s direction",
                            "🚀 Have a goal but unsure of next steps",
                            "📉 Poor academic performance affecting choices",
                        ].map((item, i) => (
                            <div
                                key={i}
                                data-aos="zoom-in"
                                className="p-6 bg-white rounded-2xl shadow border hover:shadow-md transition-transform hover:-translate-y-1"
                            >
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}

                    </div>

                    <a
                        href="https://wa.me/917977482411?text=I%20want%20Career%20Counselling"
                        target="_blank"
                        className="mt-12 block text-center px-10 py-4 bg-[#0D3B66] text-white rounded-full w-fit mx-auto shadow-lg hover:bg-[#082c52] transition-all"
                        data-aos="fade-up"
                    >
                        📩 Book A Career Session
                    </a>

                </div>
            </section>


            {/* ========================================================== */}
            {/* 5️⃣ ADULT COUNSELLING */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-6xl mx-auto">

                    <h2
                        data-aos="fade-up"
                        className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center"
                    >
                        🧑‍⚕️ Adult & Personal Counselling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {[
                            "💔 Feeling sad, hopeless or overwhelmed",
                            "🚶‍♂️ Thoughts of running away / avoidance",
                            "🗣️ Difficulty expressing emotions",
                            "📉 Poor work performance",
                            "🌪️ Frequent mood swings",
                            "🔄 Feeling directionless / emotionally stuck",
                        ].map((item, i) => (
                            <div
                                key={i}
                                data-aos="fade-right"
                                className="p-6 bg-[#F7FAFF] rounded-2xl shadow border hover:shadow-md transition-transform hover:-translate-y-1"
                            >
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* ========================================================== */}
            {/* 6️⃣ TESTING SERVICES */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-gradient-to-b from-[#F7FAFF] to-[#EAF0FF]">
                <div className="max-w-6xl mx-auto text-center">

                    <h2
                        data-aos="fade-up"
                        className="text-3xl md:text-4xl font-bold text-[#0D3B66]"
                    >
                        📝 Testing Services
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        {[
                            "🧠 IQ Testing",
                            "📊 Developmental Testing",
                            "🧩 Psychological Evaluation",
                            "🌈 Personality Assessment",
                            "📘 Learning Disabilities Assessment",
                            "📐 Aptitude Assessment",
                            "🗂️ Interest Inventory",
                            "✨ And many more",
                        ].map((item, i) => (
                            <div
                                key={i}
                                data-aos="zoom-in"
                                className="p-6 bg-white rounded-3xl shadow border hover:shadow-md transition-transform hover:-translate-y-1"
                            >
                                <h3 className="font-semibold text-[#0D3B66]">{item}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* ========================================================== */}
            {/* 7️⃣ ADDITIONAL COUNSELLING SERVICES */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-6xl mx-auto text-center">

                    <h2
                        data-aos="fade-up"
                        className="text-3xl md:text-4xl font-bold text-[#0D3B66]"
                    >
                        💬 Counselling Services
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        {[
                            "🧭 Behavioural Counselling",
                            "🎯 Career Counselling",
                            "👶 Child Counselling",
                            "🧑 Adult Counselling",
                            "🧍‍♂️ Individual Counselling",
                            "🎓 Educational Counselling",
                            "🔥 Stress Management",
                            "⚡ Anger Management",
                            "✨ And many more",
                        ].map((item, i) => (
                            <div
                                key={i}
                                data-aos="fade-left"
                                className="p-6 bg-[#F7FAFF] rounded-3xl shadow border hover:shadow-md transition-transform hover:-translate-y-1"
                            >
                                <h3 className="font-semibold text-[#0D3B66]">{item}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* ========================================================== */}
            {/* FINAL CTA */}
            {/* ========================================================== */}
            <section
                className="px-6 py-20 text-center bg-[#F5F8FF]"
                data-aos="fade-up"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                    🌟 Begin Your Healing Journey
                </h2>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    You don’t have to go through this alone — support is one message away.
                </p>

                <a
                    href="https://wa.me/917977482411?text=I%20want%20to%20book%20a%20session"
                    target="_blank"
                    className="mt-8 inline-block px-12 py-4 bg-[#0D3B66] text-white rounded-full shadow-lg hover:bg-[#082742] transition-transform hover:scale-105"
                >
                    💬 Book an Appointment
                </a>
            </section>

        </div>
    );
}
