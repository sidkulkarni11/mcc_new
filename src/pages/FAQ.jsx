import React, { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "What happens in the first counselling session?",
            a: "Your first session is focused on understanding your concerns, history, emotional patterns, and goals. It’s a safe, non-judgmental conversation to help you feel comfortable and supported."
        },
        {
            q: "How do I know which therapy approach is right for me?",
            a: "Your psychologist will guide you based on your concerns—whether it’s anxiety, overthinking, trauma, self-esteem, or relationship issues—using evidence-based methods tailored for you."
        },
        {
            q: "Do you provide online sessions?",
            a: "Yes! Mindopiia offers online sessions across India and internationally through secure video platforms for your convenience."
        },
        {
            q: "Is counselling confidential?",
            a: "Absolutely. Everything you share is confidential and protected ethically and legally. Your privacy is our top priority."
        },
        {
            q: "How long does each session last?",
            a: "Each session is approximately 50–60 minutes, depending on the individual need and therapeutic process."
        },
        {
            q: "How many sessions will I need?",
            a: "This varies per person. Some feel better in 3–5 sessions, while deeper healing work may require more time."
        },
        {
            q: "Do you offer child and adolescent therapy?",
            a: "Yes. We provide specialized therapy for children and teens including emotional regulation, behaviour support, confidence building, and school-related concerns."
        },
        {
            q: "How can I book a session?",
            a: "All sessions are booked through WhatsApp. You can message us directly, and we will guide you through timing and availability."
        }
    ];

    return (
        <div className="pt-28 bg-gradient-to-b from-[#F6F9FF] via-[#EEF3FF] to-white min-h-screen px-6 pb-20">

            {/* HERO */}
            <div className="text-center max-w-3xl mx-auto pt-10">
                <h1 className="text-4xl md:text-6xl font-bold text-[#0D3B66] drop-shadow-sm">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Clear, compassionate answers to help you understand your therapy journey better.
                </p>
            </div>

            {/* FAQ BOX */}
            <div className="max-w-4xl mx-auto mt-16 space-y-6">

                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 cursor-pointer hover:shadow-xl transition"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-[#0D3B66]">{item.q}</h3>

                            <span className="text-3xl text-[#0D3B66]">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </div>

                        {openIndex === index && (
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {item.a}
                            </p>
                        )}
                    </div>
                ))}

            </div>

            {/* CTA */}
            <div className="text-center mt-20">
                <a
                    href="https://wa.me/917977482411?text=Hi%2C%20I%20want%20to%20book%20a%20counselling%20session."
                    target="_blank"
                    className="inline-block px-10 py-4 bg-[#0D3B66] text-white text-lg rounded-full shadow-lg hover:bg-[#082f52] transition"
                >
                    Still Have Questions? Chat With Us
                </a>
            </div>

        </div>
    );
}
