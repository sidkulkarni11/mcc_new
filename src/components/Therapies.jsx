import React from "react";
import { FaBrain, FaHeart, FaUserFriends, FaStar } from "react-icons/fa";

export default function Therapies() {
    return (
        <section id="therapies" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* HEADER */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B66]">
                    Therapies Offered
                </h2>
                <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
                    Evidence-based approaches designed to support emotional, mental, and relational well-being.
                </p>

                {/* GRID */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <div className="p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition hover:-translate-y-1 bg-[#F8FAFF]">
                        <FaBrain className="text-5xl text-[#0D3B66] mx-auto" />
                        <h3 className="mt-5 text-xl font-semibold text-[#0D3B66]">
                            Individual Therapy
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                            For anxiety, stress, emotional regulation, healing, overthinking, and personal growth.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition hover:-translate-y-1 bg-[#F8FAFF]">
                        <FaUserFriends className="text-5xl text-[#0D3B66] mx-auto" />
                        <h3 className="mt-5 text-xl font-semibold text-[#0D3B66]">
                            Relationship Counselling
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                            For couples & families — improve communication, trust, and emotional connection.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition hover:-translate-y-1 bg-[#F8FAFF]">
                        <FaHeart className="text-5xl text-[#0D3B66] mx-auto" />
                        <h3 className="mt-5 text-xl font-semibold text-[#0D3B66]">
                            Trauma-Focused Support
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                            Healing from past emotional wounds, childhood trauma, and inner child pain.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition hover:-translate-y-1 bg-[#F8FAFF]">
                        <FaStar className="text-5xl text-[#0D3B66] mx-auto" />
                        <h3 className="mt-5 text-xl font-semibold text-[#0D3B66]">
                            Self-Esteem & Identity
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                            Work around confidence, boundaries, self-worth, and rediscovering identity.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition hover:-translate-y-1 bg-[#F8FAFF]">
                        <FaBrain className="text-5xl text-[#0D3B66] mx-auto" />
                        <h3 className="mt-5 text-xl font-semibold text-[#0D3B66]">
                            Cognitive-Behavioural Therapy (CBT)
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                            Helps reshape thoughts, emotional patterns, and behavioural responses.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition hover:-translate-y-1 bg-[#F8FAFF]">
                        <FaUserFriends className="text-5xl text-[#0D3B66] mx-auto" />
                        <h3 className="mt-5 text-xl font-semibold text-[#0D3B66]">
                            Teen & Young Adult Support
                        </h3>
                        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                            For students facing academic stress, confusion, or emotional overwhelm.
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <button className="mt-16 px-10 py-4 bg-[#0D3B66] text-white rounded-full text-lg shadow-md hover:bg-[#0b3156] transition">
                    Book Your Therapy Session
                </button>

            </div>
        </section>
    );
}
