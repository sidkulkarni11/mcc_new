import React, { useMemo, useState } from "react";
import {
    FaWhatsapp,
    FaStar,
    FaBriefcase,
    FaMapMarkerAlt,
    FaClock,
    FaCheckCircle,
    FaSearch,
} from "react-icons/fa";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// CERTIFICATES
import rashida from "../assets/certificates/rashida.png";
import neha from "../assets/certificates/neha.png";
import pooja from "../assets/certificates/pooja.png";
import vibhuti from "../assets/certificates/vibhuti.png";
import riya from "../assets/certificates/riya.png";

export default function Careers() {
    const WHATSAPP = "917977482411";

    const certificates = [rashida, neha, pooja, vibhuti, riya];

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
                    "Observation-based learning",
                    "Workshop support",
                    "Client communication basics",
                    "Certificate + mentorship",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Psychology Internship.",
            },
            {
                id: "smm",
                title: "Social Media Internship",
                subtitle: "Instagram • Reels • Content",
                type: "Internship",
                mode: "Remote / Hybrid",
                location: "Remote",
                duration: "4–8 weeks",
                highlights: [
                    "Content planning",
                    "Reel ideas",
                    "Canva creatives",
                    "Engagement handling",
                    "Portfolio work",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Social Media Internship.",
            },
            {
                id: "mkt",
                title: "Marketing Internship",
                subtitle: "Growth • Outreach",
                type: "Internship",
                mode: "Hybrid",
                location: "Mumbai",
                duration: "4–10 weeks",
                highlights: [
                    "College outreach",
                    "Partnerships",
                    "Local campaigns",
                    "Brand exposure",
                    "Recognition",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Marketing Internship.",
            },
            {
                id: "gd",
                title: "Graphic Design Internship",
                subtitle: "Canva • Posters",
                type: "Internship",
                mode: "Remote",
                location: "Remote",
                duration: "4–8 weeks",
                highlights: [
                    "Instagram designs",
                    "Workshop creatives",
                    "Brand layouts",
                    "Portfolio work",
                    "Creative freedom",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Graphic Design Internship.",
            },
            {
                id: "photo",
                title: "Photography Internship",
                subtitle: "Events • Shoots",
                type: "Internship",
                mode: "Offline",
                location: "Mumbai",
                duration: "4–6 weeks",
                highlights: [
                    "Event shoots",
                    "Brand photography",
                    "Editing basics",
                    "Exposure",
                    "Certificate",
                ],
                whatsappText:
                    "Hello Mindopiia, I want to apply for the Photography Internship.",
            },
        ],
        []
    );

    const [search, setSearch] = useState("");

    const filteredRoles = useMemo(() => {
        return roles.filter((r) =>
            `${r.title} ${r.subtitle} ${r.location}`
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [roles, search]);

    return (
        <section className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-[#F8FAFF] via-[#F2F6FF] to-[#EEF3FF]">
            <div className="max-w-6xl mx-auto px-6">

                {/* ✅ CERTIFICATE CAROUSEL */}
                <div className="mb-12">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop
                        className="rounded-3xl overflow-hidden shadow-xl"
                    >
                        {certificates.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-[220px] md:h-[300px] lg:h-[360px] bg-white flex items-center justify-center">
                                    <img
                                        src={img}
                                        alt="certificate"
                                        className="max-h-full max-w-full object-contain p-4 drop-shadow-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* HERO */}
                <div className="text-center">
                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D3B66]/10 text-[#0D3B66] text-sm font-semibold">
                        <FaStar /> Careers at Mindopiia
                    </p>

                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0D2440]">
                        Internships & Growth Opportunities
                    </h1>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Learn, grow, and gain real-world experience with Mindopiia.
                    </p>
                </div>

                {/* SEARCH */}
                <div className="mt-10 bg-white rounded-3xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                        <FaSearch className="text-gray-500" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search internships..."
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                {/* ROLES */}
                <div className="mt-10 grid md:grid-cols-2 gap-8">
                    {filteredRoles.map((role) => (
                        <div
                            key={role.id}
                            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition"
                        >
                            <p className="text-xs font-bold text-[#0D3B66] flex gap-2">
                                <FaBriefcase /> {role.type}
                            </p>

                            <h2 className="mt-3 text-xl font-bold text-[#0D3B66]">
                                {role.title}
                            </h2>

                            <p className="text-gray-600">{role.subtitle}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <MetaChip icon={<FaClock />} text={role.duration} />
                                <MetaChip icon={<FaMapMarkerAlt />} text={role.location} />
                            </div>

                            <div className="mt-4 space-y-2">
                                {role.highlights.map((p, i) => (
                                    <div key={i} className="flex gap-2 text-sm text-gray-700">
                                        <FaCheckCircle className="text-[#0D3B66]" />
                                        {p}
                                    </div>
                                ))}
                            </div>

                            <a
                                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                                    role.whatsappText
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 flex justify-center items-center gap-2 bg-[#0D3B66] text-white py-3 rounded-full font-semibold hover:bg-[#082742] transition"
                            >
                                <FaWhatsapp /> Apply on WhatsApp
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* CHIP */
function MetaChip({ icon, text }) {
    return (
        <span className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs">
      {icon} {text}
    </span>
    );
}