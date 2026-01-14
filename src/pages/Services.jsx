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
                className="px-6 py-24 text-center bg-gradient-to-br from-white to-[#EAF0FF]"
                data-aos="fade-down"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0D3B66]">
                    🌿 Our Services
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
                    Compassionate, ethical therapy for children, students, adults & families.
                </p>
            </section>

            {/* CHILD */}
            <Section title="Child Counselling" emoji="👶">
                <Grid
                    direction="fade-right"
                    items={[
                        "🗣️ Difficulty expressing emotions",
                        "📚 Study or concentration issues",
                        "😣 Irritability / behaviour concerns",
                        "🍽️ Eating non-food items",
                        "🫣 Nail biting, thumb sucking, hair pulling",
                        "⏳ Speech delay / stammering",
                        "🤝 Difficulty mixing socially",
                    ]}
                />
                <CTAButton
                    text="👶 Book Child Counselling"
                    message="I want Child Counselling"
                />
            </Section>

            {/* EDUCATIONAL */}
            <Section title="Educational Counselling" emoji="🎓">
                <Grid
                    direction="fade-left"
                    items={[
                        "📘 Difficulty keeping up academically",
                        "✏️ Trouble reading / writing",
                        "📉 Weak in specific subjects",
                        "🧠 Lack of focus",
                        "🎒 Classroom behaviour issues",
                    ]}
                />
                <CTAButton
                    text="🎓 Book Educational Counselling"
                    message="I want Educational Counselling"
                />
            </Section>

            {/* ADULT */}
            <Section title="Adult Counselling" emoji="🧑‍⚕️">
                <Grid
                    direction="fade-right"
                    items={[
                        "💔 Emotional stress / sadness",
                        "🚶‍♂️ Avoidance / wanting to run away",
                        "🗣️ Difficulty expressing feelings",
                        "📉 Poor work performance",
                        "🌪️ Mood swings",
                        "🔄 Feeling stuck",
                    ]}
                />
                <CTAButton
                    text="🧑‍⚕️ Book Adult Counselling"
                    message="I want Adult Counselling"
                />
            </Section>

            {/* TESTING */}
            <Section title="Testing Services" emoji="📝">
                <Grid
                    direction="zoom-in"
                    items={[
                        "🧠 IQ Testing",
                        "📊 Developmental Testing",
                        "🧩 Psychological Evaluation",
                        "🌈 Personality Assessment",
                        "📘 LD Assessment",
                        "📐 Aptitude",
                        "🗂️ Interest Inventory",
                        "✨ More...",
                    ]}
                />
                <CTAButton
                    text="📝 Book Testing"
                    message="I want to book testing"
                />
            </Section>

            {/* FINAL CTA */}
            <section className="px-6 py-20 text-center bg-[#F5F8FF]" data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-bold text-[#0D3B66]">
                    🌟 Begin Your Healing Journey
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Support is one message away.
                </p>

                <CTAButton
                    text="💬 Book an Appointment"
                    message="I want to book a session"
                />
            </section>

        </div>
    );
}
