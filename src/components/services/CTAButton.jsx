import React from "react";

export default function CTAButton({ text, message }) {
    return (
        <div data-aos="fade-up" className="text-center mt-14">
            <a
                href={`https://wa.me/917977482411?text=${encodeURIComponent(
                    message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-block px-12 py-4 rounded-full
                    bg-[#0D3B66] text-white text-lg shadow-xl
                    hover:bg-[#082c52] hover:scale-105
                    transition-all duration-300
                "
            >
                {text}
            </a>
        </div>
    );
}
