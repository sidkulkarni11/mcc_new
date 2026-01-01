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
import img6 from "../webphotos/nisha6.jpeg";

export default function Hero() {
    const images = [img1, img2, img3, img4, img6];

    const whatsappMessage = encodeURIComponent(
        "Hello, I would like to book a therapy appointment with Mindopiia."
    );

    return (
        <section className="bg-[#F5F8FF] pt-[85px] sm:pt-[95px]">
            {/* Padding added to fix navbar overlap */}

            {/* ---------- FULL WIDTH CAROUSEL with Fade Mask ---------- */}
            <div className="relative w-full">

                {/* Top Fade Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none"></div>

                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 2500 }}
                    effect="fade"
                    pagination={{ clickable: true }}
                    loop
                    className="
                        w-full rounded-none
                        h-[260px]
                        sm:h-[340px]
                        md:h-[470px]
                        lg:h-[550px]
                        xl:h-[620px]
                    "
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt="Mindopiia"
                                className="
                                    w-full h-full object-cover
                                    brightness-[0.92]
                                    sm:brightness-[0.95]
                                "
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom Fade Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F5F8FF] to-transparent z-10"></div>
            </div>

            {/* ---------- CONTENT SECTION ---------- */}
            <div className="max-w-5xl mx-auto px-6 py-12 sm:py-16 text-center">

                <h1
                    className="
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                        font-extrabold text-[#0D2440]
                        tracking-tight
                    "
                >
                    Heal. Grow. Transform.
                </h1>

                <p
                    className="
                        mt-5 sm:mt-6 text-base sm:text-lg md:text-xl
                        text-gray-700 leading-relaxed max-w-2xl mx-auto
                    "
                >
                    A premium therapeutic experience — where science meets empathy.
                    Step into a space designed for clarity, calm, and emotional freedom.
                </p>

                {/* CTA BUTTONS */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">

                    <a
                        href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            px-10 py-3.5 sm:py-4 bg-[#0D3B66] text-white
                            rounded-full text-lg shadow-lg
                            hover:bg-[#082742] transition-all
                            w-full sm:w-auto
                        "
                    >
                        Book an Appointment
                    </a>

                    <a
                        href="/services"
                        className="
                            px-10 py-3.5 sm:py-4 border border-[#0D3B66]
                            text-[#0D3B66] rounded-full text-lg font-medium
                            hover:bg-[#E5EEFF] transition-all
                            w-full sm:w-auto
                        "
                    >
                        Explore Services
                    </a>

                </div>
            </div>
        </section>
    );
}
