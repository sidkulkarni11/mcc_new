import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaPhoneAlt
} from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

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

    // Centralized links
    const whatsappMessage = encodeURIComponent(
        "Hello, I would like to book a therapy appointment with Mindopiia."
    );

    const links = {
        whatsapp: `https://wa.me/917977482411?text=${whatsappMessage}`,
        call: "tel:7977482411",
        google: "https://g.page/r/CdKVzr2L6UxoEBM/review",
        instagram1: "https://www.instagram.com/mindopiiacounsellingcentre",
        instagram2: "https://www.instagram.com/mindopiia_psychologist",
        facebook: "https://www.facebook.com/mindopiiacounsellingcentre/"
    };

    const socialIcons = [
        { icon: <SiGoogle />, link: links.google, color: "#4285F4" },
        { icon: <FaInstagram />, link: links.instagram1, color: "#E1306C" },
        { icon: <FaInstagram />, link: links.instagram2, color: "#E1306C" },
        { icon: <FaFacebookF />, link: links.facebook, color: "#1877F2" },
        { icon: <FaWhatsapp />, link: links.whatsapp, color: "green" }
    ];

    return (
        <section className="bg-[#F5F8FF] pt-[85px] sm:pt-[95px] relative overflow-hidden">

            {/* HERO CAROUSEL */}
            <div className="relative w-full">
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    effect="fade"
                    pagination={{ clickable: true }}
                    loop
                    className="w-full h-[260px] sm:h-[340px] md:h-[470px] lg:h-[550px] xl:h-[620px]"
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={img}
                                alt={`Mindopiia Slide ${i + 1}`}
                                className="w-full h-full object-cover brightness-[0.92]"
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 to-transparent" />

                {/* SOCIAL ICONS */}
                <div className="absolute top-4 right-4 z-50 flex flex-col gap-3 bg-white/40 backdrop-blur-md p-3 rounded-xl shadow-lg">
                    {socialIcons.map((item, i) => (
                        <SocialIcon key={i} {...item} />
                    ))}
                </div>
            </div>

            {/* HERO CONTENT */}
            <div className="max-w-5xl mx-auto px-6 py-14 text-center">

                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D2440]">
                    Heal. Grow. Transform.
                </h1>

                <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    A premium therapeutic experience — where science meets empathy.
                </p>

                {/* CTA BUTTONS */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                    {/* WhatsApp */}
                    <a
                        href={links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0D3B66] text-white rounded-full shadow-lg hover:bg-[#082742] transition"
                    >
                        <FaWhatsapp />
                        Book Appointment
                    </a>

                    {/* Services */}
                    <Link
                        to="/services"
                        className="flex items-center justify-center px-8 py-4 border border-[#0D3B66] text-[#0D3B66] rounded-full hover:bg-[#E5EEFF] transition"
                    >
                        Explore Services
                    </Link>

                    {/* Call */}
                    <a
                        href={links.call}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
                    >
                        <FaPhoneAlt className="text-sm" />
                        Call Now
                    </a>

                </div>

                {/* SOCIAL BAR */}
                <div className="flex flex-wrap justify-center gap-4 mt-10 bg-white/70 backdrop-blur-md px-6 py-4 rounded-full shadow border">

                    <SocialText link={links.google} icon={<SiGoogle />} label="Google Reviews" color="#4285F4" />
                    <SocialText link={links.instagram1} icon={<FaInstagram />} label="@mindopiiacounsellingcentre" color="#E1306C" />
                    <SocialText link={links.instagram2} icon={<FaInstagram />} label="@mindopiia_psychologist" color="#E1306C" />
                    <SocialText link={links.facebook} icon={<FaFacebookF />} label="/mindopiiacounsellingcentre" color="#1877F2" />
                    <SocialText link={links.whatsapp} icon={<FaWhatsapp />} label="WhatsApp" color="green" />

                </div>

            </div>
        </section>
    );
}


/* ICON COMPONENT */
function SocialIcon({ link, icon, color }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-110 transition"
            style={{ color }}
        >
            {icon}
        </a>
    );
}


/* TEXT ICON COMPONENT */
function SocialText({ link, icon, label, color }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80"
            style={{ color }}
        >
            {icon}
            {label}
        </a>
    );
}