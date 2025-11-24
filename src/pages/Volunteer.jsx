import React from "react";

export default function Volunteer() {
    // WhatsApp Message (encoded automatically)
    const whatsappMessage = encodeURIComponent(
        `I want to volunteer with Mindopiia 💜
I’m passionate about mental-health awareness and would love to be part of your school drives, community outreach programs and wellness campaigns.

Please guide me with the process and upcoming opportunities.`
    );

    const whatsappLink = `https://wa.me/917977482411?text=${whatsappMessage}`;

    return (
        <div className="pt-28 bg-[#F6F9FF]">

            {/* HERO SECTION */}
            <section className="px-6 py-24 bg-gradient-to-b from-white to-[#E8F0FF] text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#5A2E98] tracking-tight">
                    Become a Mindopiia Volunteer 💜
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed">
                    Join our mission to spread mental-health awareness through school drives,
                    community outreach programs, rural activities, and psychological wellness campaigns.
                </p>

                {/* WhatsApp CTA */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-block px-10 py-4 bg-[#5A2E98] text-white rounded-full shadow-xl hover:bg-[#48257A] transition text-lg"
                >
                    Become a Volunteer 💜
                </a>

                <div className="mt-10 text-[#5A2E98] text-sm font-medium">
                    ⭐ Certifications available for active volunteers.
                </div>
            </section>

            {/* WHY VOLUNTEER */}
            <section className="px-6 py-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5A2E98] text-center">
                        Why Volunteer With Mindopiia?
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                emoji: "💜",
                                title: "Impact Lives",
                                desc: "Support children, women, students and communities through mental-health initiatives."
                            },
                            {
                                emoji: "📘",
                                title: "Learn Psychology",
                                desc: "Gain real-world experience in mental-health drives and emotional wellness activities."
                            },
                            {
                                emoji: "🏅",
                                title: "Earn Certification",
                                desc: "Get official Mindopiia certification for your contribution as an active volunteer."
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#F7F2FF] border border-[#E5D8FF] rounded-3xl p-10 shadow-sm hover:shadow-md transition"
                            >
                                <div className="text-5xl">{item.emoji}</div>
                                <h3 className="mt-4 text-xl font-semibold text-[#5A2E98]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALWAYS VISIBLE — VOLUNTEER MESSAGE */}
            <section className="px-6 py-24 bg-[#F8F4FF]">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#5A2E98]">
                        Send Your Volunteering Message 💜
                    </h2>

                    <p className="mt-4 text-gray-600 text-lg">
                        Copy this message & send it to us on WhatsApp.
                    </p>

                    <div className="mt-10 bg-white shadow-xl border border-[#E5D8FF] rounded-2xl p-6 text-left">
                        <p className="text-[#5A2E98] font-medium leading-relaxed whitespace-pre-line">
                            {`✨ Certifications available for active volunteers.

I want to volunteer with Mindopiia 💜
I’m passionate about mental-health awareness and would love to be part of 
your school drives, community outreach programs and wellness campaigns.

Please guide me with the process and upcoming opportunities.`}
                        </p>
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-10 px-12 py-4 bg-[#5A2E98] text-white rounded-full text-lg font-semibold shadow-xl hover:bg-[#48257A] transition"
                    >
                        Send Message on WhatsApp 💬
                    </a>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-6 py-20 bg-[#5A2E98] text-center text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold">
                    Ready to Join the Movement?
                </h2>

                <p className="mt-4 text-gray-200 text-lg max-w-xl mx-auto">
                    Help us bring psychological awareness to communities and create real impact.
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-10 px-12 py-4 bg-white text-[#5A2E98] rounded-full text-lg font-semibold shadow-xl hover:bg-gray-100 transition"
                >
                    Become a Volunteer 💜
                </a>
            </section>

        </div>
    );
}
