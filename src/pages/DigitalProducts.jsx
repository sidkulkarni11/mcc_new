import React from "react";
import {
    FaFilePdf,
    FaShieldAlt,
    FaWhatsapp,
    FaStar,
    FaTruck,
    FaBolt,
} from "react-icons/fa";

// ASSETS
import riseCover from "../assets/products/covers/rise.jpg";
import childCover from "../assets/products/covers/child-emotions.png";

export default function DigitalProducts() {
    const WHATSAPP = "917977482411";

    const products = [
        {
            id: 1,
            title: "Rise and Thrive",
            cover: riseCover,
            description:
                "A guided self-help workbook designed to help you gain emotional clarity, inner strength, and healthier coping patterns.",
            pages: 22,
            format: "PDF Workbook",
            price: 350,
            originalPrice: 450,
            tag: "Best Seller",
        },
        {
            id: 2,
            title: "Child Emotions Workbook",
            cover: childCover,
            description:
                "A child-friendly workbook to help kids understand feelings, express emotions safely, and build emotional strength.",
            pages: 20,
            format: "PDF Workbook",
            price: 370,
            originalPrice: 450,
            tag: "New Launch",
        },
    ];

    const buildWhatsappText = (product, deliveryMode) => {
        if (deliveryMode === "online") {
            return `
Hello Mindopiia 👋

I want to purchase the workbook: ${product.title}

📌 Delivery Mode: Online (PDF on WhatsApp after payment)
💰 Price: ₹${product.price}

Please share payment details.
      `.trim();
        }

        return `
Hello Mindopiia 👋

I want to purchase the workbook: ${product.title}

📌 Delivery Mode: Offline (Physical delivery)
💰 Price: ₹${product.price}
🚚 Note: Delivery charges applicable

Please share delivery charges + payment details.
    `.trim();
    };

    return (
        <section className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-[#F8FAFF] via-[#F2F6FF] to-[#EEF3FF]">
            <div className="max-w-6xl mx-auto px-6">
                {/* ---------- HERO ---------- */}
                <div className="text-center">
                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D3B66]/10 text-[#0D3B66] font-semibold text-sm">
                        <FaStar />
                        Mindopiia Digital Store
                    </p>

                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0D2440]">
                        Digital Products
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Premium workbooks crafted with emotional depth — practical, human, and healing.
                    </p>
                </div>

                {/* ---------- PRODUCTS GRID ---------- */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/70 overflow-hidden hover:shadow-[0_25px_60px_-25px_rgba(13,59,102,0.45)] transition"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#EAF0FF] via-transparent to-[#F3E9FF]" />

                            {/* Badge */}
                            {product.tag && (
                                <div className="absolute top-5 left-5 z-10">
                  <span className="px-4 py-2 rounded-full text-xs font-bold bg-white/90 border border-gray-100 shadow text-[#0D3B66]">
                    {product.tag}
                  </span>
                                </div>
                            )}

                            {/* Discount */}
                            <div className="absolute top-5 right-5 z-10">
                <span className="px-4 py-2 rounded-full text-xs font-bold bg-green-50 border border-green-200 text-green-700 shadow-sm">
                  Save ₹{product.originalPrice - product.price}
                </span>
                            </div>

                            <div className="relative p-7">
                                {/* Cover */}
                                <div className="bg-[#FAFBFF] rounded-2xl border border-gray-100 shadow-md p-4 flex items-center justify-center">
                                    <img
                                        src={product.cover}
                                        alt={product.title}
                                        className="w-full h-72 object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#0D3B66]">
                                    {product.title}
                                </h2>

                                {/* Desc */}
                                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Meta */}
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <MiniChip icon={<FaFilePdf />} text={`${product.pages} pages`} />
                                    <MiniChip icon={<FaShieldAlt />} text={product.format} />
                                    <MiniChip icon={<FaBolt />} text="Online PDF available" />
                                    <MiniChip icon={<FaTruck />} text="Offline delivery available" />
                                </div>

                                {/* Price */}
                                <div className="mt-7 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Price</p>
                                        <p className="text-2xl font-extrabold text-[#0D2440]">
                                            ₹{product.price}{" "}
                                            <span className="text-gray-400 text-sm line-through font-semibold ml-2">
                        ₹{product.originalPrice}
                      </span>
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">Delivery</p>
                                        <p className="text-sm font-semibold text-[#0D3B66]">
                                            Online / Offline
                                        </p>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* ONLINE */}
                                    <a
                                        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                                            buildWhatsappText(product, "online")
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center py-3 rounded-full bg-[#0D3B66] text-white font-semibold shadow-lg hover:bg-[#082742] transition"
                                    >
                                        Buy Online (PDF on WhatsApp)
                                    </a>

                                    {/* OFFLINE */}
                                    <a
                                        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                                            buildWhatsappText(product, "offline")
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center py-3 rounded-full border border-[#0D3B66] text-[#0D3B66] font-semibold hover:bg-[#E5EEFF] transition"
                                    >
                                        Buy Offline (Delivery)
                                    </a>
                                </div>

                                {/* Note */}
                                <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                                    Online: PDF will be shared on WhatsApp after payment confirmation. <br />
                                    Offline: Delivery charges may apply based on location.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ---------- BOTTOM TRUST CTA ---------- */}
                <div className="mt-14 bg-[#0D3B66] rounded-3xl p-8 sm:p-10 text-white shadow-2xl">
                    <h3 className="text-2xl sm:text-3xl font-extrabold">
                        Want a customised workbook for your audience?
                    </h3>
                    <p className="mt-3 text-white/90 max-w-3xl">
                        We can create emotional wellness workbooks for schools, institutes, teens,
                        women’s groups, and corporate wellness programs.
                    </p>

                    <div className="mt-6">
                        <a
                            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                                "Hello Mindopiia, I want a customised workbook for my audience."
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0D3B66] rounded-full font-bold hover:opacity-90 transition"
                        >
                            <FaWhatsapp className="text-xl" />
                            Enquire on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- UI Helpers ---------- */
function MiniChip({ icon, text }) {
    return (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-gray-100 shadow-sm text-xs font-semibold text-gray-700">
      <span className="text-[#0D3B66]">{icon}</span>
            {text}
    </span>
    );
}
