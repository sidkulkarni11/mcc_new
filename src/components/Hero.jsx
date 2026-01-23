import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

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
        <section className="bg-[#F5F8FF] pt-[85px] sm:pt-[95px] relative overflow-hidden">
            {/* ---------------- HERO CAROUSEL ---------------- */}
            <div className="relative w-full">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    effect="fade"
                    pagination={{ clickable: true }}
                    loop
                    className="
            w-full
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
                                alt={`Mindopiia Slide ${index + 1}`}
                                className="w-full h-full object-cover brightness-[0.92]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Top Fade Overlay (does not block clicks) */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/30 via-black/10 to-transparent" />

                {/* Bottom Fade Overlay (does not block clicks) */}
                <div className="absolute bottom-0 left-0 w-full h-24 z-10 pointer-events-none bg-gradient-to-t from-[#F5F8FF] to-transparent" />

                {/* ---------------- SOCIAL ICONS (TOP RIGHT) ---------------- */}
                <div className="absolute top-4 right-4 z-[999] flex flex-col gap-3 bg-white/40 backdrop-blur-md p-3 rounded-xl shadow-lg">
                    <a
                        href="https://www.instagram.com/mindopiiacounsellingcentre?igsh=MTdxNTB4eWh5ZHp3Mg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E1306C] text-2xl hover:scale-110 transition"
                        aria-label="Instagram - Mindopiia Counselling Centre"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.instagram.com/mindopiia_psychologist?igsh=MWFvazd1NzVnczZ0bg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E1306C] text-2xl hover:scale-110 transition"
                        aria-label="Instagram - Mindopiia Psychologist"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.facebook.com/mindopiiacounsellingcentre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1877F2] text-2xl hover:scale-110 transition"
                        aria-label="Facebook - Mindopiia Counselling Centre"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 text-2xl hover:scale-110 transition"
                        aria-label="WhatsApp - Book Appointment"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            {/* ---------------- HERO CONTENT ---------------- */}
            <div className="max-w-5xl mx-auto px-6 py-14 sm:py-16 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D2440]">
                    Heal. Grow. Transform.
                </h1>

                <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    A premium therapeutic experience — where science meets empathy.
                    Step into a space designed for clarity, calm, and emotional freedom.
                </p>

                {/* ---------------- CTA BUTTONS ---------------- */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <a
                        href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 bg-[#0D3B66] text-white rounded-full font-medium shadow-lg hover:bg-[#082742] transition"
                    >
                        Book an Appointment
                    </a>

                    <Link
                        to="/services"
                        className="px-10 py-4 border border-[#0D3B66] text-[#0D3B66] rounded-full text-lg font-medium hover:bg-[#E5EEFF] transition"
                    >
                        Explore Services
                    </Link>
                </div>

                {/* ---------------- HORIZONTAL SOCIAL SLAB BELOW (WITH WHATSAPP RIGHT) ---------------- */}
                <div className="w-full flex justify-center mt-10">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full shadow-md border border-gray-200">
                        {/* Instagram Page 1 */}
                        <a
                            href="https://www.instagram.com/mindopiiacounsellingcentre?igsh=MTdxNTB4eWh5ZHp3Mg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#E1306C] font-medium hover:opacity-80 transition"
                            aria-label="Instagram Handle - Mindopiia Counselling Centre"
                        >
                            <FaInstagram className="text-xl" />
                            <span className="text-sm sm:text-base">
                @mindopiiacounsellingcentre
              </span>
                        </a>

                        <div className="hidden sm:block h-5 w-[1px] bg-gray-300"></div>

                        {/* Instagram Page 2 */}
                        <a
                            href="https://www.instagram.com/mindopiia_psychologist?igsh=MWFvazd1NzVnczZ0bg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#E1306C] font-medium hover:opacity-80 transition"
                            aria-label="Instagram Handle - Mindopiia Psychologist"
                        >
                            <FaInstagram className="text-xl" />
                            <span className="text-sm sm:text-base">@mindopiia_psychologist</span>
                        </a>

                        <div className="hidden sm:block h-5 w-[1px] bg-gray-300"></div>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/mindopiiacounsellingcentre/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#1877F2] font-medium hover:opacity-80 transition"
                            aria-label="Facebook - Mindopiia Counselling Centre"
                        >
                            <FaFacebookF className="text-xl" />
                            <span className="text-sm sm:text-base">
                /mindopiiacounsellingcentre
              </span>
                        </a>

                        <div className="hidden sm:block h-5 w-[1px] bg-gray-300"></div>

                        {/* WhatsApp (Right) */}
                        <a
                            href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-600 font-medium hover:opacity-80 transition"
                            aria-label="WhatsApp - Book Appointment"
                        >
                            <FaWhatsapp className="text-xl" />
                            <span className="text-sm sm:text-base">WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* ---------------- MOBILE ICONS (OPTIONAL EXTRA) ---------------- */}
                <div className="mt-10 flex justify-center gap-6 text-3xl sm:hidden">
                    <a
                        href="https://www.instagram.com/mindopiiacounsellingcentre?igsh=MTdxNTB4eWh5ZHp3Mg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition text-[#E1306C]"
                        aria-label="Instagram - Mindopiia Counselling Centre"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.instagram.com/mindopiia_psychologist?igsh=MWFvazd1NzVnczZ0bg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition text-[#E1306C]"
                        aria-label="Instagram - Mindopiia Psychologist"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.facebook.com/mindopiiacounsellingcentre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition text-[#1877F2]"
                        aria-label="Facebook - Mindopiia Counselling Centre"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href={`https://wa.me/917977482411?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition text-green-600"
                        aria-label="WhatsApp - Book Appointment"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    );
}
