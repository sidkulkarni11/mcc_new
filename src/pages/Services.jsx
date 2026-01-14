import React from "react";

export default function Services() {
    return (
        <div className="pt-28 bg-[#F7FAFF]">

            {/* ---------- HERO ---------- */}
            <section className="px-6 py-20 text-center bg-gradient-to-br from-white to-[#EAF0FF]">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66]">
                    Services Offered
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    Each service is offered with one purpose — to help you heal, grow and live
                    a calmer, healthier and more fulfilling life.
                </p>
            </section>


            {/* ========================================================== */}
            {/* 1️⃣ PSYCHOLOGICAL COUNSELLING CENTER (MAIN HEADER) */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                        Psychological Counselling Center
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Every person has the potential to thrive.
                        Our counselling services are designed to guide children, teens and adults towards clarity and emotional well-being.
                    </p>
                </div>
            </section>


            {/* ========================================================== */}
            {/* 2️⃣ CHILD COUNSELLING */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-gradient-to-b from-[#F7FAFF] to-[#EAF0FF]">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center">
                        Child Counselling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {[
                            "Is your child unable to express emotions?",
                            "Poor academic habits / struggling with studies",
                            "Behavioural concerns or irritability",
                            "Does your child eat things that aren’t food?",
                            "Nail biting, hair pulling, thumb sucking",
                            "Speech delay or stammering",
                            "Difficulty mixing with others",
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl shadow border">
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

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center">
                        Educational Counselling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {[
                            "Does your child struggle with studies?",
                            "Difficulty in reading and writing",
                            "Weak in a specific subject",
                            "Trouble concentrating in class",
                            "Disturbs others in class or gets distracted easily",
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-[#F9FBFF] rounded-2xl shadow border">
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

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center">
                        Career Counselling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {[
                            "Unsure about which career to choose?",
                            "Parents confused about child's future?",
                            "Decided the career but don't know next steps?",
                            "Child not performing well in studies?",
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl shadow border">
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/917977482411?text=I%20want%20Career%20Counselling"
                        target="_blank"
                        className="mt-12 block text-center px-10 py-4 bg-[#0D3B66] text-white rounded-full w-fit mx-auto shadow hover:bg-[#082c52]"
                    >
                        Book A Career Session
                    </a>
                </div>
            </section>


            {/* ========================================================== */}
            {/* 5️⃣ ADULT / PERSONAL COUNSELLING */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-center">
                        Adult & Personal Counselling
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {[
                            "Feeling sad, hopeless or helpless?",
                            "Thoughts of running away or avoiding family?",
                            "Difficulty expressing thoughts or feelings?",
                            "Performing poorly at work?",
                            "Frequent mood swings?",
                            "Feeling lost or emotionally overwhelmed?",
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-[#F7FAFF] rounded-2xl shadow border">
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ========================================================== */}
            {/* 6️⃣ TESTING SERVICES  (from photo 2) */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-gradient-to-b from-[#F7FAFF] to-[#EAF0FF]">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                        Testing Services
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Professional psychological assessments for clarity, diagnosis and growth.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        {[
                            "IQ Testing",
                            "Developmental Testing",
                            "Psychological Evaluation",
                            "Personality Assessment",
                            "Learning Disabilities Assessment",
                            "Aptitude Assessment",
                            "Interest Inventory",
                            "And many more",
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-3xl shadow border text-center">
                                <h3 className="font-semibold text-[#0D3B66]">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ========================================================== */}
            {/* 7️⃣ COUNSELLING SERVICES (from photo 2) */}
            {/* ========================================================== */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                        Counselling Services
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        {[
                            "Behavioural Counselling",
                            "Career Counselling",
                            "Child Counselling",
                            "Adult Counselling",
                            "Individual Counselling",
                            "Educational Counselling",
                            "Stress Management",
                            "Anger Management",
                            "And many more",
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-[#F7FAFF] rounded-3xl shadow border text-center">
                                <h3 className="font-semibold text-[#0D3B66]">{item}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* FINAL CTA */}
            <section className="px-6 py-20 text-center bg-[#F5F8FF]">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                    Begin Your Healing Journey
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Reach out today — you don’t have to do this alone.
                    Support is just one message away.
                </p>

                <a
                    href="https://wa.me/917977482411?text=I%20want%20to%20book%20a%20session"
                    target="_blank"
                    className="mt-8 inline-block px-12 py-4 bg-[#0D3B66] text-white rounded-full shadow-lg hover:bg-[#082742]"
                >
                    Book an Appointment
                </a>
            </section>

        </div>
    );
}
