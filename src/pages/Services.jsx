import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// IMPORT EXTERNAL COMPONENTS
import CTAButton from "../components/services/CTAButton.jsx";
import Section from "../components/services/Section.jsx";
import Grid from "../components/services/Grid.jsx";

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <div className="pt-28 bg-[#F7FAFF]">
            {/* HERO */}
            <section
                className="px-6 py-24 text-center bg-gradient-to-br from-white via-[#F3F7FF] to-[#EAF0FF]"
                data-aos="fade-down"
            >
                <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D3B66]/10 text-[#0D3B66] font-semibold text-sm">
                    Mindopiia Counselling Centre
                </p>

                <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-[#0D3B66] leading-tight">
                    Our Services
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                    Compassionate, ethical, and evidence-informed counselling for children,
                    students, adults & families — with both <span className="font-semibold text-gray-800">Online</span>{" "}
                    and <span className="font-semibold text-gray-800">Offline</span> support available.
                </p>

                {/* Chips */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm">
            Online Counselling Available
          </span>
                    <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm">
            Offline Sessions Across Mumbai
          </span>
                    <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm">
            Confidential & Non-judgemental
          </span>
                </div>
            </section>

            {/* ONLINE COUNSELLING */}
            <Section title="Online Counselling" emoji="💻">
                <p className="text-gray-600 max-w-4xl mx-auto text-center mb-8 leading-relaxed">
                    Prefer therapy from the comfort of your home? We offer secure online sessions
                    that are structured, private, and supportive — ideal for busy schedules,
                    long-distance clients, or those who feel more comfortable starting online.
                </p>

                <Grid
                    direction="zoom-in"
                    items={[
                        "Video / audio sessions from home",
                        "Comfortable for first-time clients",
                        "Ideal for working professionals",
                        "Flexible scheduling support",
                        "Safe, private & guided sessions",
                        "Same care, same confidentiality",
                    ]}
                />

                <CTAButton text="Book Online Counselling" message="I want to book Online Counselling" />
            </Section>

            {/* CHILD */}
            <Section title="Child Counselling" emoji="👶">
                <Grid
                    direction="fade-right"
                    items={[
                        "Difficulty expressing emotions",
                        "Study or concentration issues",
                        "Irritability / behaviour concerns",
                        "Eating non-food items",
                        "Nail biting, thumb sucking, hair pulling",
                        "Speech delay / stammering",
                        "Difficulty mixing socially",
                    ]}
                />
                <CTAButton text="Book Child Counselling" message="I want Child Counselling" />
            </Section>

            {/* EDUCATIONAL */}
            <Section title="Educational Counselling" emoji="🎓">
                <Grid
                    direction="fade-left"
                    items={[
                        "Difficulty keeping up academically",
                        "Trouble reading / writing",
                        "Weak in specific subjects",
                        "Lack of focus",
                        "Classroom behaviour issues",
                    ]}
                />
                <CTAButton text="Book Educational Counselling" message="I want Educational Counselling" />
            </Section>

            {/* ADULT */}
            <Section title="Adult Counselling" emoji="🧑‍⚕️">
                <Grid
                    direction="fade-right"
                    items={[
                        "Emotional stress / sadness",
                        "Avoidance / wanting to run away",
                        "Difficulty expressing feelings",
                        "Poor work performance",
                        "Mood swings",
                        "Feeling stuck",
                    ]}
                />
                <CTAButton text="Book Adult Counselling" message="I want Adult Counselling" />
            </Section>

            {/* TESTING */}
            <Section title="Testing Services" emoji="📝">
                <Grid
                    direction="zoom-in"
                    items={[
                        "IQ Testing",
                        "Developmental Testing",
                        "Psychological Evaluation",
                        "Personality Assessment",
                        "LD Assessment",
                        "Aptitude Testing",
                        "Interest Inventory",
                        "More...",
                    ]}
                />
                <CTAButton text="Book Testing" message="I want to book testing" />
            </Section>

            {/* FINAL CTA */}
            <section
                className="px-6 py-20 text-center bg-gradient-to-b from-[#F7FAFF] to-[#EEF3FF]"
                data-aos="fade-up"
            >
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#0D3B66]">
                    Begin Your Healing Journey
                </h2>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                    You don’t have to carry everything alone. Support is one message away.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <CTAButton text="Book an Appointment" message="I want to book a session" />
                    <CTAButton text="Book Online Session" message="I want to book an online session" />
                </div>
            </section>
        </div>
    );
}
