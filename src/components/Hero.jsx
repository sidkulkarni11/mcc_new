import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../webphotos/nisha1.jpeg";
import img2 from "../webphotos/nisha2.jpeg";
import img3 from "../webphotos/nisha3.jpeg";
import img4 from "../webphotos/nisha4.jpeg";
import img5 from "../webphotos/nisha5.jpeg";
import img6 from "../webphotos/nisha6.jpeg";

export default function Hero() {
    const images = [img1, img2, img3, img4, img6];

    const whatsappMessage = encodeURIComponent(
        "Hello, I would like to book a therapy appointment with Mindopiia."
    );

    return (
        <section className="relative bg-[#F5F8FF] pb-32">

            {/* ---------- FULL EDGE-TO-EDGE CAROUSEL ---------- */}
            <div className="relative w-full mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 2500 }}
                    effect="fade"
                    pagination={{ clickable: true }}
                    loop
                    className="w-full h-[550px] md:h-[620px] lg:h-[680px]"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt="Mindopiia"
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* ---------- PREMIUM GLASSMORPHIC OVERLAY BOX ---------- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                            w-[90%] md:w-[70%] lg:w-[55%]
                            bg-white/30 backdrop-blur-xl border border-white/40
                            shadow-2xl rounded-3xl p-10 text-center">

                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D2440] tracking-tight">
                    Heal. Grow. Transform.
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl mx-auto">
                    A premium therapeutic experience — where science meets empathy.
                    Step into a space designed for clarity, calm, and emotional freedom.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">

                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 rounded-full bg-[#0D3B66] text-white text-lg
                                   shadow-xl hover:bg-[#082742] transition-all"
                    >
                        Book an Appointment
                    </a>

                    {/* Services Button */}
                    <a
                        href="/services"
                        className="px-10 py-4 rounded-full border border-[#0D3B66] text-[#0D3B66]
                                   text-lg font-medium hover:bg-[#E5EEFF] transition-all"
                    >
                        Explore Services
                    </a>
                </div>
            </div>

        </section>
    );
}
