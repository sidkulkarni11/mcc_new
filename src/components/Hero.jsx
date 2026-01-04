import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";   // ⭐ ADD THIS

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

            {/* ... your carousel ... */}

            <div className="max-w-5xl mx-auto px-6 py-16 text-center">

                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">

                    <a
                        href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 bg-[#0D3B66] text-white rounded-full"
                    >
                        Book an Appointment
                    </a>

                    <Link
                        to="/services"   // ⭐ FIXED
                        className="
                            px-10 py-4 border border-[#0D3B66] text-[#0D3B66]
                            rounded-full text-lg font-medium hover:bg-[#E5EEFF]
                        "
                    >
                        Explore Services
                    </Link>

                </div>
            </div>
        </section>
    );
}
