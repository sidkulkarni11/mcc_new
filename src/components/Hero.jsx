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
        <section className="bg-[#F5F8FF]">

            {/* ---------- FULL WIDTH CAROUSEL ---------- */}
            <div className="w-full">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 2500 }}
                    effect="fade"
                    pagination={{ clickable: true }}
                    loop
                    className="
                        w-full
                        h-[300px]
                        sm:h-[380px]
                        md:h-[500px]
                        lg:h-[580px]
                        xl:h-[650px]
                    "
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

            {/* ---------- CONTENT SECTION BELOW ---------- */}
            <div className="max-w-5xl mx-auto px-6 py-16 text-center">

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
                        mt-6 text-base sm:text-lg md:text-xl
                        text-gray-700 leading-relaxed max-w-2xl mx-auto
                    "
                >
                    A premium therapeutic experience — where science meets empathy.
                    Step into a space designed for clarity, calm, and emotional freedom.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">

                    <a
                        href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            px-10 py-4 bg-[#0D3B66] text-white
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
                            px-10 py-4 border border-[#0D3B66] text-[#0D3B66]
                            rounded-full text-lg font-medium
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
