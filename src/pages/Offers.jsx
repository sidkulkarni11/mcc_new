import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import offer1 from "../assets/webphotos/offer1.png";
import offer2 from "../assets/webphotos/offer2.png";

export default function OffersPage() {
    const phoneNumber = "917977482411";

    const offers = [
        {
            id: 1,
            image: offer1,
            title: "Career Testing & Counselling",
            description:
                "Discover suitable career options through professional career testing and counselling.",
            whatsappMessage:
                "Hello, I would like to know more about the Career Testing and Counselling offer."
        },
        {
            id: 2,
            image: offer2,
            title: "Counselling Special Offer",
            description:
                "Take the first step towards emotional wellness with professional counselling support.",
            whatsappMessage:
                "Hello, I would like to know more about the current counselling offer."
        }
    ];

    const getWhatsAppLink = (message) =>
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <main className="bg-[#F5F8FF] min-h-screen pt-[110px] pb-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                {/* PAGE HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block px-5 py-2 bg-blue-100 text-[#0D3B66] rounded-full text-sm font-semibold">
                        Mindopiia Special Offers
                    </span>

                    <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-[#0D2440]">
                        Explore Our Latest Offers
                    </h1>

                    <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                        Choose from our latest counselling, therapy and career
                        guidance offers designed to support your personal growth.
                    </p>
                </div>

                {/* OFFER GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <article
                            key={offer.id}
                            className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >
                            <div className="relative bg-gray-100">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full aspect-[2/3] object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-[#0D2440]">
                                    {offer.title}
                                </h2>

                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    {offer.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                                    <a
                                        href={getWhatsAppLink(
                                            offer.whatsappMessage
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0D3B66] text-white rounded-xl font-semibold hover:bg-[#082742] transition"
                                    >
                                        <FaWhatsapp />
                                        Book Now
                                    </a>

                                    <a
                                        href="tel:+917977482411"
                                        className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#0D3B66] text-[#0D3B66] rounded-xl font-semibold hover:bg-blue-50 transition"
                                    >
                                        <FaPhoneAlt className="text-sm" />
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CONTACT STRIP */}
                <div className="mt-16 bg-[#0D3B66] rounded-3xl px-6 py-10 md:px-12 text-center text-white shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Need Help Choosing the Right Service?
                    </h2>

                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Connect with Mindopiia Counselling Centre and speak with
                        our team regarding the most suitable counselling service.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href={getWhatsAppLink(
                                "Hello, I would like help choosing the right counselling service."
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-7 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition"
                        >
                            <FaWhatsapp />
                            WhatsApp Us
                        </a>

                        <a
                            href="tel:+917977482411"
                            className="flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0D3B66] rounded-full font-semibold hover:bg-blue-50 transition"
                        >
                            <FaPhoneAlt />
                            7977482411
                        </a>
                    </div>
                </div>

            </div>
        </main>
    );
}