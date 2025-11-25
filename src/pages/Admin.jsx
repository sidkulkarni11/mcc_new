import React from "react";

export default function Admin() {
    return (
        <div className="pt-28 bg-[#F5F8FF] min-h-screen">

            <section className="px-6 py-20 text-center bg-gradient-to-br from-white via-[#EEF3FF] to-[#E8EEFF] shadow-sm">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66]">
                    Control Center
                </h1>
                <p className="mt-5 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
                    Manage events, view volunteer requests, approve counsellor trainees,
                    and control Mindopiia’s internal operations.
                </p>
            </section>

            <section className="px-6 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { icon: "📥", title: "Event Submissions", desc: "View & manage entries from Growth & Expression events." },
                    { icon: "🧑‍🤝‍🧑", title: "Volunteer Applications", desc: "Review, accept or track volunteer participation." },
                    { icon: "🎓", title: "Counsellor Trainees", desc: "Monitor and manage career counsellor students." },
                    { icon: "📢", title: "Announcements", desc: "Post updates, event alerts & new opportunities." },
                    { icon: "📊", title: "Analytics Dashboard", desc: "Track engagement, participation and performance insights." },
                    { icon: "⚙️", title: "Settings", desc: "Admin-level control for platform customization." },
                ].map((box, i) => (
                    <div
                        key={i}
                        className="p-8 bg-white border rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
                    >
                        <div className="text-5xl mb-4">{box.icon}</div>
                        <h3 className="text-xl font-semibold text-[#0D3B66]">{box.title}</h3>
                        <p className="text-gray-600 mt-3 text-sm leading-relaxed">{box.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
