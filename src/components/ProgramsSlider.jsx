import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import p1 from "../webphotos/nisha1.jpeg";
import p2 from "../webphotos/nisha2.jpeg";
import p3 from "../webphotos/nisha3.jpeg";
import p4 from "../webphotos/nisha4.jpeg";
import p5 from "../webphotos/nisha6.jpeg";

export default function ProgramsSlider() {
    const programs = [
        {
            id: 1,
            image: p1,
            title: "Teen Emotional Wellness",
            subtitle: "Confidence, emotions & self-expression",
            badge: "Popular",
            link: "/services",
        },
        {
            id: 2,
            image: p2,
            title: "Child Behaviour Support",
            subtitle: "Gentle guidance for growth",
            badge: "Recommended",
            link: "/services",
        },
        {
            id: 3,
            image: p3,
            title: "Career Clarity Program",
            subtitle: "For students seeking direction",
            badge: "Student",
            link: "/services",
        },
        {
            id: 4,
            image: p4,
            title: "Adult Emotional Therapy",
            subtitle: "Support for stress and transitions",
            badge: "Trending",
            link: "/services",
        },
        {
            id: 5,
            image: p5,
            title: "Relationship Counselling",
            subtitle: "Heal communication and connection",
            badge: "New",
            link: "/services",
        },
    ];

    return (
        <section className="py-16 sm:py-20 bg-[#F6F8FF]">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#5C75C7]">
                            Featured Programs
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0D2440]">
                            Offers, Courses & Therapy Programs
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-2xl text-sm sm:text-base">
                            Explore premium programs designed for children, students, adults,
                            and families — beautifully presented with minimal scrolling.
                        </p>
                    </div>

                    <Link
                        to="/services"
                        className="hidden md:inline-flex items-center gap-2 text-[#0D3B66] font-semibold hover:gap-3 transition-all"
                    >
                        View all
                        <FaChevronRight className="text-sm" />
                    </Link>
                </div>

                <div className="relative">
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
                        {programs.map((program) => (
                            <Link
                                key={program.id}
                                to={program.link}
                                className="group relative min-w-[82%] sm:min-w-[48%] lg:min-w-[31%] xl:min-w-[24%] rounded-[28px] overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 snap-start"
                            >
                                <div className="relative h-[360px] sm:h-[400px] overflow-hidden">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#081A2B]/90 via-[#081A2B]/25 to-transparent" />

                                    <div className="absolute top-4 left-4">
                    <span className="inline-flex px-3 py-1 rounded-full bg-white/90 text-[#0D2440] text-xs font-semibold shadow">
                      {program.badge}
                    </span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-white/80 text-xs sm:text-sm">
                                            Mindopiia Program
                                        </p>
                                        <h3 className="mt-1 text-white text-xl sm:text-2xl font-bold leading-tight">
                                            {program.title}
                                        </h3>
                                        <p className="mt-2 text-white/85 text-sm leading-relaxed">
                                            {program.subtitle}
                                        </p>

                                        <div className="mt-4 inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                                            Explore Program
                                            <FaChevronRight className="text-xs" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-6 md:hidden">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-[#0D3B66] font-semibold hover:gap-3 transition-all"
                    >
                        View all services
                        <FaChevronRight className="text-sm" />
                    </Link>
                </div>
            </div>
        </section>
    );
}