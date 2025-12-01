import React from "react";

export default function Volunteer() {
    const whatsappMessage = encodeURIComponent(
        `I want to volunteer with Mindopiia 💙
I’m passionate about mental-health awareness and would love to be part of your school drives, community outreach programs, rural support and wellness campaigns.

Please guide me with the process and upcoming opportunities.`
    );

    const whatsappLink = `https://wa.me/917977482411?text=${whatsappMessage}`;

    return (
        <div className="pt-28 bg-[#F5F9FF]">

            {/* HERO SECTION */}
            <section className="px-6 py-24 bg-gradient-to-b from-white to-[#E8F2FF] text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66] tracking-tight">
                    Become a Mindopiia Volunteer 💙
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-700 leading-relaxed">
                    Join our mission to spread mental-health awareness through school drives,
                    community outreach programs, rural initiatives and psychological wellness campaigns.
                </p>

                {/* CTA BUTTON */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-block px-12 py-4 bg-[#0D3B66] text-white rounded-full shadow-lg hover:bg-[#09345a] transition text-lg font-semibold"
                >
                    Become a Volunteer 💙
                </a>

                <p className="mt-6 text-[#0D3B66] font-medium">
                    ✨ Certifications available for active volunteers.
                </p>
            </section>

            {/* WHY VOLUNTEER */}
            <section className="px-6 py-24 bg-[#F5F9FF]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D3B66]">
                        Why Volunteer With Mindopiia?
                    </h2>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                emoji: "💙",
                                title: "Impact Lives",
                                desc: "Support children, families and communities through emotional-wellness initiatives."
                            },
                            {
                                emoji: "📘",
                                title: "Learn Psychology",
                                desc: "Gain hands-on experience in emotional wellness, community support & behavioural awareness."
                            },
                            {
                                emoji: "🏅",
                                title: "Earn Certification",
                                desc: "Receive an official Mindopiia Volunteer Certificate after active participation."
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-3xl border border-[#dbe3ea] p-10 shadow-md hover:shadow-xl transition"
                            >
                                <div className="text-5xl">{item.emoji}</div>
                                <h3 className="mt-4 text-xl font-semibold text-[#0D3B66]">
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

            {/* MESSAGE TEMPLATE */}
            <section className="px-6 py-24 bg-gradient-to-b from-[#EFF6FF] to-[#E3EEFF]">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                        Send Your Volunteering Message 💬
                    </h2>

                    <p className="mt-4 text-gray-700 text-lg">
                        Copy the message below or tap the button to send it directly on WhatsApp.
                    </p>

                    <div className="mt-10 bg-white shadow-xl border border-[#d3e0ea] rounded-2xl p-6 text-left">
                        <p className="text-[#0D3B66] font-medium leading-relaxed whitespace-pre-line">
                            {`✨ Certifications available for active volunteers.

I want to volunteer with Mindopiia 💙
I’m passionate about mental-health awareness and would love to be part of 
your school drives, community outreach programs, rural support and wellness campaigns.

Please guide me with the process and upcoming opportunities.`}
                        </p>
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-10 px-14 py-4 bg-[#0D3B66] text-white rounded-full text-lg font-semibold shadow-lg hover:bg-[#09345a] transition"
                    >
                        Send Message on WhatsApp 💬
                    </a>

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-6 py-20 bg-[#E6F0FF] text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3B66]">
                    Ready to Join the Movement?
                </h2>

                <p className="mt-4 text-gray-700 text-lg max-w-xl mx-auto">
                    Be part of a purpose-driven community making a real emotional impact.
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-10 px-14 py-4 bg-[#0D3B66] text-white rounded-full text-lg font-bold shadow-lg hover:bg-[#09345a] transition"
                >
                    Become a Volunteer 💙
                </a>
            </section>

        </div>
    );
}
