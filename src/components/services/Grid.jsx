import React from "react";

export default function Grid({ items, direction = "fade-up" }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((text, i) => (
                <div
                    key={i}
                    data-aos={direction}
                    className="
                        p-7 bg-[#F8FAFF] rounded-3xl border shadow-sm
                        hover:shadow-lg hover:-translate-y-1
                        transition-all duration-300
                    "
                >
                    <p className="text-gray-700 text-lg">{text}</p>
                </div>
            ))}
        </div>
    );
}
