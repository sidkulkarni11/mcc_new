import React, { useMemo, useState, useEffect } from "react";
import {
    FaWhatsapp,
    FaInstagram,
    FaMapMarkerAlt,
    FaUsers,
    FaChalkboardTeacher,
    FaCalendarAlt,
    FaStar,
    FaCheckCircle,
    FaTimes,
} from "react-icons/fa";

export default function Workshops() {
    const [search, setSearch] = useState("");
    const [audience, setAudience] = useState("All");

    // Modal states
    const [isBookOpen, setIsBookOpen] = useState(false);
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);

    const whatsappNumber = "917977482411";

    const workshops = useMemo(
        () => [
            {
                id: 1,
                title: "Personality Development Workshop",
                subtitle: "Confidence • Communication • Self-image",
                duration: "60–90 mins",
                mode: "Offline / Online",
                for: "Students",
                highlights: [
                    "Confidence building activities",
                    "Communication skills",
                    "Self-awareness & mindset",
                ],
            },
            {
                id: 2,
                title: "Stress Management & Emotional Regulation",
                subtitle: "Practical tools for calm & clarity",
                duration: "60–120 mins",
                mode: "Offline / Online",
                for: "Corporate",
                highlights: [
                    "Stress triggers & patterns",
                    "Grounding techniques",
                    "Healthy coping strategies",
                ],
            },
            {
                id: 3,
                title: "Parenting & Child Behaviour Guidance",
                subtitle: "Supportive parenting, stronger bonding",
                duration: "60–90 mins",
                mode: "Offline / Online",
                for: "Parents",
                highlights: [
                    "Behaviour understanding",
                    "Boundaries with love",
                    "Communication at home",
                ],
            },
            {
                id: 4,
                title: "Mental Health Awareness Session",
                subtitle: "Breaking stigma, building support",
                duration: "45–90 mins",
                mode: "Offline / Online",
                for: "Institutes",
                highlights: [
                    "Signs & symptoms awareness",
                    "How to support someone",
                    "When & where to seek help",
                ],
            },
            {
                id: 5,
                title: "Career Guidance & Goal Setting",
                subtitle: "Direction • Clarity • Motivation",
                duration: "60–120 mins",
                mode: "Offline / Online",
                for: "Students",
                highlights: [
                    "Career mapping",
                    "Goal setting framework",
                    "Decision-making clarity",
                ],
            },
            {
                id: 6,
                title: "Self-Esteem & Self-Worth Workshop",
                subtitle: "Heal inner talk, grow self-respect",
                duration: "60–90 mins",
                mode: "Offline / Online",
                for: "Women",
                highlights: [
                    "Confidence & self-worth",
                    "Boundaries & self-respect",
                    "Emotional resilience",
                ],
            },
        ],
        []
    );

    const filtered = useMemo(() => {
        return workshops.filter((w) => {
            const matchesSearch =
                w.title.toLowerCase().includes(search.toLowerCase()) ||
                w.subtitle.toLowerCase().includes(search.toLowerCase()) ||
                w.highlights.join(" ").toLowerCase().includes(search.toLowerCase());

            const matchesAudience = audience === "All" ? true : w.for === audience;

            return matchesSearch && matchesAudience;
        });
    }, [workshops, search, audience]);

    const openBookModal = (workshop) => {
        setSelectedWorkshop(workshop || null);
        setIsBookOpen(true);
    };

    const closeBookModal = () => {
        setIsBookOpen(false);
        setSelectedWorkshop(null);
    };

    const openWhatsAppEnquiry = (workshop) => {
        const workshopTitle = workshop?.title || "Mindopiia Workshops";
        const workshopMode = workshop?.mode || "Offline / Online";

        const whatsappText = `
Hello Mindopiia 👋

I want to enquire about workshops.

📌 Workshop: ${workshopTitle}
🎥 Mode: ${workshopMode}

Please share details, charges & available slots.
    `.trim();

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappText
        )}`;

        window.open(url, "_blank", "noopener,noreferrer");
    };

    // Close modal on ESC
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape" && isBookOpen) closeBookModal();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isBookOpen]);

    return (
        <section className="bg-[#F5F8FF] pt-[85px] sm:pt-[95px] pb-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* ---------- HERO HEADER ---------- */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-8 sm:p-10 md:p-12 relative">
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#EDE7FF] via-transparent to-[#E6F4FF]" />

                        <div className="relative">
                            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D3B66]/10 text-[#0D3B66] font-semibold text-sm">
                                <FaStar /> Mindopiia Workshops & Sessions
                            </p>

                            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D2440] leading-tight">
                                Workshops that feel human,
                                <span className="block">practical, and powerful.</span>
                            </h1>

                            <p className="mt-5 text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed">
                                Mindopiia conducts workshops for schools, colleges, corporate
                                teams, communities, and parents — focused on emotional wellbeing,
                                confidence, communication, and mental health awareness.
                            </p>

                            {/* CTA Row */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button
                                    type="button"
                                    onClick={() => openWhatsAppEnquiry(null)}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0D3B66] text-white rounded-full font-semibold shadow-lg hover:bg-[#082742] transition"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Enquire on WhatsApp
                                </button>

                                <button
                                    type="button"
                                    onClick={() => openBookModal(null)}
                                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#0D3B66] text-[#0D3B66] rounded-full font-semibold hover:bg-[#E5EEFF] transition"
                                >
                                    <FaCalendarAlt />
                                    Book a Workshop
                                </button>
                            </div>

                            {/* Social slab */}
                            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center">
                                <div className="inline-flex items-center gap-2 text-[#E1306C] font-semibold">
                                    <FaInstagram />
                                    @mindopiiacounsellingcentre
                                </div>

                                <div className="inline-flex items-center gap-2 text-[#E1306C] font-semibold">
                                    <FaInstagram />
                                    @mindopiia_psychologist
                                </div>
                            </div>

                            {/* Mini info row */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <InfoChip
                                    icon={<FaUsers />}
                                    title="Audience"
                                    value="Schools • Colleges • Corporate • Communities"
                                />
                                <InfoChip
                                    icon={<FaChalkboardTeacher />}
                                    title="Format"
                                    value="Interactive • Activity-based • Evidence-informed"
                                />
                                <InfoChip
                                    icon={<FaMapMarkerAlt />}
                                    title="Mumbai + Online"
                                    value="Offline sessions across Mumbai + Online support"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------- FILTER BAR ---------- */}
                <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100 p-5">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Search workshops
                            </label>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by topic, audience, keywords..."
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
                            />
                        </div>

                        <div className="w-full md:w-[260px]">
                            <label className="text-sm font-semibold text-gray-700">
                                Filter by audience
                            </label>
                            <select
                                value={audience}
                                onChange={(e) => setAudience(e.target.value)}
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
                            >
                                <option>All</option>
                                <option>Students</option>
                                <option>Parents</option>
                                <option>Corporate</option>
                                <option>Institutes</option>
                                <option>Women</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* ---------- WORKSHOP CARDS ---------- */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map((w) => (
                        <div
                            key={w.id}
                            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7 hover:shadow-xl transition"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D2440]">
                                        {w.title}
                                    </h3>
                                    <p className="mt-2 text-gray-700">{w.subtitle}</p>
                                </div>

                                <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-[#0D3B66]/10 text-[#0D3B66]">
                  {w.for}
                </span>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <Tag label={`⏳ ${w.duration}`} />
                                <Tag label={`🎥 ${w.mode}`} />
                            </div>

                            <div className="mt-6 space-y-2">
                                {w.highlights.map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-gray-700">
                                        <FaCheckCircle className="mt-1 text-[#0D3B66]" />
                                        <p className="leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <button
                                    type="button"
                                    onClick={() => openWhatsAppEnquiry(w)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0D3B66] text-white font-semibold hover:bg-[#082742] transition"
                                >
                                    <FaWhatsapp />
                                    Enquire
                                </button>

                                <button
                                    type="button"
                                    onClick={() => openBookModal(w)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#0D3B66] text-[#0D3B66] font-semibold hover:bg-[#E5EEFF] transition"
                                >
                                    <FaCalendarAlt />
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ---------- EMPTY STATE ---------- */}
                {filtered.length === 0 && (
                    <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center">
                        <h3 className="text-xl font-bold text-[#0D2440]">No workshops found</h3>
                        <p className="mt-2 text-gray-600">
                            Try changing filters or search with different keywords.
                        </p>
                    </div>
                )}

                {/* ---------- BOTTOM CTA ---------- */}
                <div className="mt-12 bg-[#0D3B66] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold">
                        Want a customised workshop for your institute / organisation?
                    </h2>

                    <p className="mt-3 text-white/90 max-w-3xl">
                        We can design sessions based on your audience, time duration, and
                        requirements — from awareness talks to activity-based workshops.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <button
                            type="button"
                            onClick={() => openWhatsAppEnquiry(null)}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0D3B66] rounded-full font-bold hover:opacity-90 transition"
                        >
                            <FaWhatsapp className="text-xl" />
                            Enquire Now
                        </button>

                        <button
                            type="button"
                            onClick={() => openBookModal(null)}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/60 rounded-full font-bold hover:bg-white/10 transition"
                        >
                            <FaCalendarAlt />
                            Schedule a Workshop
                        </button>
                    </div>
                </div>
            </div>

            {/* ---------------- BOOK NOW MODAL ---------------- */}
            {isBookOpen && (
                <BookNowModal
                    selectedWorkshop={selectedWorkshop}
                    onClose={closeBookModal}
                    whatsappNumber={whatsappNumber}
                />
            )}
        </section>
    );
}

/* ---------- MODAL COMPONENT ---------- */

function BookNowModal({ selectedWorkshop, onClose, whatsappNumber }) {
    const workshopTitle = selectedWorkshop?.title || "Workshop Booking";
    const workshopModeText = selectedWorkshop?.mode || "Offline / Online";

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        mode: workshopModeText.includes("Online") ? "Online" : "Offline",
        message: "",
    });

    const handleChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.phone.trim()) {
            alert("Please enter your Name and Phone number.");
            return;
        }

        const whatsappText = `
Hello Mindopiia 👋

I want to book a workshop.

📌 Workshop: ${workshopTitle}
🎥 Mode: ${form.mode}

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email || "N/A"}
📅 Preferred Date: ${form.date || "Not decided"}
📝 Message: ${form.message || "N/A"}

Please share available slots & charges.
    `.trim();

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappText
        )}`;

        onClose();
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="p-6 sm:p-7 border-b border-gray-100 flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D2440]">
                            Book Now
                        </h3>
                        <p className="mt-1 text-gray-600 text-sm sm:text-base">
                            {workshopTitle}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 rounded-xl hover:bg-gray-100 transition"
                        aria-label="Close Modal"
                    >
                        <FaTimes className="text-gray-600" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                Full Name *
                            </label>
                            <input
                                value={form.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="Enter your name"
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                Phone Number *
                            </label>
                            <input
                                value={form.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                placeholder="Enter your phone number"
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                Email (Optional)
                            </label>
                            <input
                                value={form.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                placeholder="Enter your email"
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
                            />
                        </div>

                        {/* Preferred Date + Mode */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-700">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    value={form.date}
                                    onChange={(e) => handleChange("date", e.target.value)}
                                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700">Mode</label>
                                <select
                                    value={form.mode}
                                    onChange={(e) => handleChange("mode", e.target.value)}
                                    className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20"
                                >
                                    <option>Offline</option>
                                    <option>Online</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">
                                Message (Optional)
                            </label>
                            <textarea
                                rows={4}
                                value={form.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                placeholder="Any additional details you want to share..."
                                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3B66]/20 resize-none"
                            />
                        </div>

                        {/* Actions */}
                        <div className="pt-2 flex flex-col sm:flex-row gap-3">
                            <button
                                type="submit"
                                className="flex-1 px-8 py-3 rounded-full bg-[#0D3B66] text-white font-semibold hover:bg-[#082742] transition"
                            >
                                Submit & Open WhatsApp
                            </button>

                            <button
                                type="button"
                                onClick={onClose}
                                className="flex-1 px-8 py-3 rounded-full border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 pt-1">
                            After submitting, WhatsApp will open with your booking message.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

/* ---------- Small UI Components ---------- */

function InfoChip({ icon, title, value }) {
    return (
        <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3 text-[#0D3B66] font-bold">
                <span className="text-lg">{icon}</span>
                <span className="text-sm">{title}</span>
            </div>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">{value}</p>
        </div>
    );
}

function Tag({ label }) {
    return (
        <span className="px-4 py-2 rounded-full bg-[#F5F8FF] border border-gray-200 text-gray-700 text-sm font-semibold">
      {label}
    </span>
    );
}
