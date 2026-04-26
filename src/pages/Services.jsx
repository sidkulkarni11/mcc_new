import { useState } from "react";
import {
    Laptop,
    Baby,
    GraduationCap,
    User,
    ClipboardList
} from "lucide-react";

export default function Services() {

    const [active, setActive] = useState("online");

    // ✅ Correct WhatsApp link
    const whatsappLink =
        "https://wa.me/917977482411?text=Hello%20I%20want%20to%20book%20a%20counselling%20session";

    const services = {
        online: {
            icon: <Laptop size={28} />,
            title: "Online Counselling",
            desc: "Secure and private therapy sessions from the comfort of your home.",
            points: [
                "Video or audio counselling",
                "Flexible scheduling",
                "Ideal for working professionals",
                "Confidential sessions"
            ]
        },

        child: {
            icon: <Baby size={28} />,
            title: "Child Counselling",
            desc: "Helping children express emotions and build healthy behaviour.",
            points: [
                "Behaviour issues",
                "Speech delay",
                "Social interaction",
                "Study challenges"
            ]
        },

        education: {
            icon: <GraduationCap size={28} />,
            title: "Educational Counselling",
            desc: "Guidance for students facing academic or learning difficulties.",
            points: [
                "Focus issues",
                "Reading difficulties",
                "Subject weakness",
                "Learning challenges"
            ]
        },

        adult: {
            icon: <User size={28} />,
            title: "Adult Counselling",
            desc: "Support for emotional stress, life transitions and personal growth.",
            points: [
                "Stress & burnout",
                "Emotional regulation",
                "Work pressure",
                "Relationship concerns"
            ]
        },

        testing: {
            icon: <ClipboardList size={28} />,
            title: "Psychological Testing",
            desc: "Professional psychological and aptitude assessments.",
            points: [
                "IQ Testing",
                "Personality assessment",
                "Aptitude testing",
                "Learning disability assessment"
            ]
        }
    };

    return (
        <div className="pt-24 bg-[#F7FAFF] min-h-screen">

            {/* HERO */}
            <section className="text-center px-6 py-16">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0D3B66]">
                    Our Services
                </h1>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Compassionate counselling for children, students and adults.
                    Online and offline therapy available across Mumbai.
                </p>
            </section>

            {/* SERVICE TABS */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <Tab label="Online" id="online" active={active} setActive={setActive} />
                    <Tab label="Child" id="child" active={active} setActive={setActive} />
                    <Tab label="Education" id="education" active={active} setActive={setActive} />
                    <Tab label="Adult" id="adult" active={active} setActive={setActive} />
                    <Tab label="Testing" id="testing" active={active} setActive={setActive} />
                </div>
            </div>

            {/* ACTIVE SERVICE CONTENT */}
            <div className="max-w-4xl mx-auto px-5">
                <div className="bg-white rounded-2xl shadow-md p-8 border">

                    <div className="flex items-center gap-3">
                        {services[active].icon}
                        <h2 className="text-2xl font-bold text-[#0D3B66]">
                            {services[active].title}
                        </h2>
                    </div>

                    <p className="mt-4 text-gray-600">
                        {services[active].desc}
                    </p>

                    <ul className="mt-6 space-y-3 text-gray-700">
                        {services[active].points.map((p, i) => (
                            <li key={i}>✔ {p}</li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#0D3B66] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0b2f52] transition"
                        >
                            Book Counselling
                        </a>
                    </div>

                </div>
            </div>

            {/* WHY CHOOSE US */}
            <section className="mt-20 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

                    <Feature
                        title="Confidential"
                        desc="Your privacy and trust are always protected."
                    />

                    <Feature
                        title="Evidence Based"
                        desc="Professional therapy using proven psychological methods."
                    />

                    <Feature
                        title="Online & Offline"
                        desc="Flexible counselling options based on your comfort."
                    />

                </div>
            </section>

            {/* BOOK CTA */}
            <section className="text-center mt-20 pb-20">

                <h2 className="text-3xl font-bold text-[#0D3B66]">
                    Begin Your Healing Journey
                </h2>

                <p className="mt-3 text-gray-600">
                    Support is one message away.
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-green-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                    Book a Session on WhatsApp
                </a>

            </section>

        </div>
    );
}


/* TAB COMPONENT */
function Tab({ label, id, active, setActive }) {
    return (
        <button
            onClick={() => setActive(id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition
      ${active === id
                ? "bg-[#0D3B66] text-white"
                : "bg-white border text-gray-700 hover:bg-gray-100"}
      `}
        >
            {label}
        </button>
    );
}


/* FEATURE COMPONENT */
function Feature({ title, desc }) {
    return (
        <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
            <h3 className="font-bold text-lg text-[#0D3B66]">
                {title}
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
                {desc}
            </p>
        </div>
    );
}