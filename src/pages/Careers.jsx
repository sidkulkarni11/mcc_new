import React, { useMemo, useState } from "react";
import { FaWhatsapp, FaStar, FaBriefcase, FaMapMarkerAlt, FaClock, FaCheckCircle, FaSearch } from "react-icons/fa";

export default function Careers() {
    const WHATSAPP = "917977482411";

    const roles = useMemo(
        () => [
            {
                id: "psy",
                title: "Psychology Internship",
                subtitle: "For Psychology Students (BA / MA / MSc)",
                type: "Internship",
                mode: "Offline / Online",
                location: "Mumbai + Remote",
                duration: "4–12 weeks",
                highlights: [
                    "Exposure to counselling centre operations",
                    "Observation-based learning & documentation",
                    "Workshop support & activity planning",
                    "Client communication basics (ethical & supervised)",
                    "Certificate + mentorship guidance",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Psychology Internship. Please share the next steps.",
            },
            {
                id: "smm",
                title: "Social Media Internship",
                subtitle: "Instagram • Reels • Content Planning",
                type: "Internship",
                mode: "Remote / Hybrid",
                location: "Remote",
                duration: "4–8 weeks",
                highlights: [
                    "Content calendar planning",
                    "Reel ideas + captions (Mindopiia tone)",
                    "Basic Canva creatives & posting support",
                    "Community engagement & DM handling (guided)",
                    "Portfolio-worthy work",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Social Media Internship. Please share the next steps.",
            },
            {
                id: "mkt",
                title: "Marketing Internship",
                subtitle: "Growth • Partnerships • Outreach",
                type: "Internship",
                mode: "Hybrid",
                location: "Mumbai",
                duration: "4–10 weeks",
                highlights: [
                    "College / institute outreach",
                    "Workshop tie-ups & collaboration pitching",
                    "Local marketing execution support",
                    "Brand visibility + growth strategy exposure",
                    "Performance-based recognition",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Marketing Internship. Please share the next steps.",
            },
            {
                id: "gd",
                title: "Graphic Design Internship",
                subtitle: "Canva / Posters / Carousels",
                type: "Internship",
                mode: "Remote / Hybrid",
                location: "Remote",
                duration: "4–8 weeks",
                highlights: [
                    "Instagram post + story designs",
                    "Workshop creatives & certificates",
                    "Brand-consistent layouts (premium feel)",
                    "Portfolio-ready projects",
                    "Creative freedom + feedback",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Graphic Design Internship. Please share the next steps.",
            },
            {
                id: "photo",
                title: "Photography Internship",
                subtitle: "Events • Sessions • Brand Shoots",
                type: "Internship",
                mode: "Offline",
                location: "Mumbai",
                duration: "Project-based / 4–6 weeks",
                highlights: [
                    "Event coverage & candid shots",
                    "Brand photos for website + social media",
                    "Basic editing & delivery workflow",
                    "Professional exposure & credits",
                    "Certificate of contribution",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Photography Internship. Please share the next steps.",
            },
        ],
        []
    );

    const [search, setSearch] = useState("");

    const filteredRoles = useMemo(() => {
        return roles.filter((r) => {
            const text = `${r.title} ${r.subtitle} ${r.type} ${r.mode} ${r.location} ${r.highlights.join(" ")}`.toLowerCase();
            return text.includes(search.toLowerCase());
        });
    }, [roles, search]);

    return (
        <section className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-[#F8FAFF] via-[#F2F6FF] to-[#EEF3FF]">
            <div className="max-w-6xl mx-auto px-6">
                {/* HERO */}
                <div className="text-center">
                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D3B66]/10 text-[#0D3B66] font-semibold text-sm">
                        <FaStar />
                        Careers at Mindopiia
                    </p>

                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0D2440]">
                        Internships & Growth Opportunities
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        We welcome passionate interns who want to learn, contribute, and grow with a mental health brand that values
                        empathy, creativity, and real-world impact.
                    </p>
                </div>

                {/* SEARCH BAR */}
                <div className="mt-10 bg-white/80 backdrop-blur-xl border border-white/70 shadow-xl rounded-3xl p-5">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-[#0D3B66]/10 text-[#0D3B66]">
                            <FaSearch />
                        </div>

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search internships (psychology, social media, design, marketing...)"
                            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-base"
                        />
                    </div>
                </div>

                {/* ROLES GRID */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredRoles.map((role) => (
                        <div
                            key={role.id}
                            className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/70 overflow-hidden hover:shadow-[0_25px_60px_-25px_rgba(13,59,102,0.45)] transition"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#EAF0FF] via-transparent to-[#F3E9FF]" />

                            <div className="relative p-7">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0D3B66]/10 text-[#0D3B66]">
                                            <FaBriefcase />
                                            {role.type}
                                        </p>

                                        <h2 className="mt-4 text-2xl font-extrabold text-[#0D3B66]">{role.title}</h2>
                                        <p className="mt-2 text-gray-600">{role.subtitle}</p>
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <MetaChip icon={<FaClock />} text={role.duration} />
                                    <MetaChip icon={<FaMapMarkerAlt />} text={role.location} />
                                    <MetaChip icon={<FaStar />} text={role.mode} />
                                </div>

                                {/* Highlights */}
                                <div className="mt-6 space-y-2">
                                    {role.highlights.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-gray-700">
                                            <FaCheckCircle className="mt-1 text-[#0D3B66]" />
                                            <p className="leading-relaxed">{point}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-7">
                                    <a
                                        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(role.whatsappText)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D3B66] text-white rounded-full font-semibold shadow-xl hover:bg-[#082742] transition"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        Apply on WhatsApp
                                    </a>

                                    <p className="mt-3 text-xs text-gray-500 text-center">
                                        You’ll be redirected to WhatsApp with a pre-filled application message.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EMPTY STATE */}
                {filteredRoles.length === 0 && (
                    <div className="mt-10 bg-white rounded-3xl border border-gray-100 shadow-md p-10 text-center">
                        <h3 className="text-xl font-bold text-[#0D2440]">No results found</h3>
                        <p className="mt-2 text-gray-600">Try searching with a different keyword.</p>
                    </div>
                )}

                {/* BOTTOM CTA */}
                <div className="mt-14 bg-[#0D3B66] rounded-3xl p-8 sm:p-10 text-white shadow-2xl">
                    <h3 className="text-2xl sm:text-3xl font-extrabold">Want to collaborate with Mindopiia?</h3>
                    <p className="mt-3 text-white/90 max-w-3xl">
                        If you’re a student, creator, or professional and want to contribute to mental health awareness and premium
                        wellbeing content — we’d love to hear from you.
                    </p>

                    <div className="mt-6">
                        <a
                            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                                "Hello Mindopiia, I want to collaborate / apply for an internship. Please share details."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0D3B66] rounded-full font-bold hover:opacity-90 transition"
                        >
                            <FaWhatsapp className="text-xl" />
                            Message on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- UI HELPERS ---------- */

function MetaChip({ icon, text }) {
    return (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-gray-100 shadow-sm text-xs font-semibold text-gray-700">
      <span className="text-[#0D3B66]">{icon}</span>
            {text}
    </span>
    );
}
