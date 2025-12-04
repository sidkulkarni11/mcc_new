import React from "react";

// ASSETS
import riseCover from "../assets/products/covers/rise.jpg";
import riseSample from "../assets/products/risesample.pdf";   // ✅ Correct import

export default function DigitalProducts() {
    const WHATSAPP = "917977482411";

    const product = {
        id: 1,
        title: "Rise and Thrive",
        cover: riseCover,
        description: "A guided self-help workbook for emotional clarity and inner strength.",
        pages: 22,
        format: "PDF (Digital Download)",
        price: 350,
        originalPrice: 450,
        sampleFile: riseSample,     // ✅ correct usage
    };

    return (
        <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-[#F9FAFF] to-[#EEF2FF] min-h-screen">

            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#0D3B66]">
                Digital Products
            </h1>

            <p className="text-center text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
                Premium self-help digital workbook crafted for emotional transformation.
            </p>

            <div className="mt-16 max-w-xl mx-auto">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border p-6">

                    <img
                        src={product.cover}
                        alt={product.title}
                        className="w-full h-64 object-contain bg-[#FAFBFF] rounded-xl shadow-md"
                    />

                    <h2 className="text-3xl font-bold text-[#0D3B66] mt-5">
                        {product.title}
                    </h2>

                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                        {product.description}
                    </p>

                    <p className="text-gray-500 text-xs mt-2">
                        {product.pages} pages • {product.format}
                    </p>

                    {/* PRICE */}
                    <div className="mt-5">
                        <p className="text-xl font-bold text-[#0D3B66] flex items-center gap-3">
                            ₹{product.price}
                            <span className="text-gray-400 text-sm line-through">
                                ₹{product.originalPrice}
                            </span>
                            <span className="text-green-600 text-sm font-semibold">
                                (Save ₹{product.originalPrice - product.price})
                            </span>
                        </p>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col gap-4 mt-8">

                        {/* DOWNLOAD SAMPLE */}
                        <a
                            href={product.sampleFile}
                            download="RiseSample.pdf"    // file name user gets
                            className="w-full text-center py-3 border border-[#0D3B66] text-[#0D3B66] rounded-full hover:bg-[#E1E9FF] transition"
                        >
                            Download Sample Page
                        </a>

                        {/* BUY NOW */}
                        <a
                            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                                `Hello, I want to purchase the digital workbook: ${product.title}`
                            )}`}
                            target="_blank"
                            className="w-full text-center py-3 bg-[#0D3B66] text-white rounded-full hover:bg-[#092E4E] transition"
                        >
                            Buy Now for ₹{product.price}
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
