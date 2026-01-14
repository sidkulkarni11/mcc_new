import React from "react";

export default function Section({ title, emoji, children }) {
    return (
        <section className="px-6 py-24 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2
                    data-aos="fade-up"
                    className="text-3xl md:text-5xl font-bold text-[#0D3B66]"
                >
                    {emoji} {title}
                </h2>

                <div className="mt-12">{children}</div>
            </div>
        </section>
    );
}
