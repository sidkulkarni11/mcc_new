import React, { useState, useEffect } from "react";

/* --------------------------------------------
   ASSESSMENT DEFINITIONS
--------------------------------------------- */
const ASSESSMENTS = [
    { id: "DEP", icon: "🌧️", title: "Depression Assessment", desc: "A gentle self-check for your emotional well-being." },
    { id: "ANX", icon: "😟", title: "Anxiety Assessment", desc: "Understand physical & emotional symptoms of anxiety." },
    { id: "CGC", icon: "🎯", title: "Career Goal Clarity", desc: "Measure how aligned & motivated you feel about your career path." },
    { id: "REL", icon: "💞", title: "Relationship Health Check", desc: "Understand connection, trust & emotional balance." },
    { id: "SEX", icon: "🔥", title: "Sexual Well-Being Check", desc: "Explore comfort, consent, expression & satisfaction." },
    { id: "NEW", icon: "🌱", title: "Ready for a New Relationship?", desc: "Are you prepared emotionally for a new beginning?" },
];

const QUESTIONS = {
    DEP: [
        "Little interest or pleasure in doing things",
        "Feeling down, depressed or hopeless",
        "Changes in sleep (too much or too little)",
        "Feeling tired or low energy",
        "Appetite changes",
        "Feeling bad about yourself",
        "Trouble concentrating",
        "Feeling restless or very slowed down",
        "Thoughts of self-harm",
        "Feeling emotionally numb",
        "Loss of motivation for daily tasks",
        "Feeling disconnected from others",
        "Crying more than usual",
        "Feeling like a burden",
        "Difficulty making decisions",
        "Feeling hopeless about the future",
        "Lack of interest in hobbies",
        "Feeling overwhelmed easily",
        "Low self-worth or confidence",
        "Difficulty getting out of bed",
        "Withdrawing from social interactions",
        "Feeling empty inside",
        "Difficulty maintaining hygiene or routines",
        "Feeling mentally exhausted",
        "Feeling that nothing brings joy anymore"
    ],

    ANX: [
        "Feeling nervous or anxious",
        "Difficulty controlling worry",
        "Worrying about many things",
        "Trouble relaxing",
        "Irritability",
        "Feeling restless",
        "Fear that something bad will happen",
        "Increased heart rate during stress",
        "Difficulty breathing during anxiety",
        "Stomach discomfort when stressed",
        "Feeling overwhelmed easily",
        "Avoiding situations due to fear",
        "Difficulty sleeping due to racing thoughts",
        "Overthinking worst-case scenarios",
        "Need for reassurance from others",
        "Feeling tense in shoulders or body",
        "Difficulty staying present",
        "Fear of losing control",
        "Feeling shaky or dizzy",
        "Sudden episodes of panic",
        "Difficulty making decisions due to fear",
        "Feeling mentally overloaded",
        "Being overly alert or cautious",
        "Fear of embarrassment or judgment",
        "Feeling unsafe without reason"
    ],

    CGC: [
        "I have clarity about my long-term goals",
        "I understand my strengths & weaknesses",
        "I know which roles suit me best",
        "I feel confident about my decisions",
        "I know which skills I need to grow",
        "I can explain my career goals clearly",
        "I take steps toward my goals",
        "I feel motivated & aligned with purpose",
        "I know what kind of work energizes me",
        "I understand what drains my motivation",
        "I know my ideal work environment",
        "I am aware of my top values",
        "I feel confident in interviews",
        "I have explored career options properly",
        "I know the type of people I work best with",
        "I am building relevant skills",
        "I stay consistent with my goals",
        "I use my strengths intentionally",
        "I seek feedback to grow",
        "I feel aligned with my future direction",
        "I understand the career path needed",
        "I feel ready for career advancement",
        "I make decisions confidently",
        "I feel in control of my career journey",
        "I feel hopeful about career growth"
    ],

    REL: [
        "We communicate openly",
        "We respect boundaries",
        "I feel emotionally supported",
        "We handle conflicts maturely",
        "I feel valued",
        "We trust each other deeply",
        "I feel secure in this relationship",
        "We enjoy time together",
        "We share responsibilities fairly",
        "We listen to each other well",
        "We show affection regularly",
        "Arguments do not get out of control",
        "We apologize and repair quickly",
        "We understand each other's needs",
        "We maintain healthy independence",
        "We express appreciation often",
        "We make decisions together",
        "We support each other's goals",
        "We forgive mistakes with maturity",
        "We resolve misunderstandings quickly",
        "We manage jealousy healthily",
        "We maintain emotional intimacy",
        "We feel like a team",
        "We grow together consistently",
        "We check in emotionally often"
    ],

    SEX: [
        "I feel comfortable expressing intimacy needs",
        "I feel safe during intimate moments",
        "Intimacy feels consensual and healthy",
        "I feel satisfied with sexual well-being",
        "I can express concerns openly",
        "I feel emotionally connected during intimacy",
        "I feel respected during intimacy",
        "I do not feel pressured sexually",
        "My boundaries are heard and honored",
        "I understand my body well",
        "I feel confident sexually",
        "I feel safe initiating intimacy",
        "My partner and I communicate desires well",
        "I feel relaxed, not anxious, during intimacy",
        "I feel understood sexually",
        "Intimacy feels natural, not forced",
        "I feel physically comfortable",
        "I trust my partner deeply",
        "Intimacy feels emotionally supportive",
        "I can say no without guilt",
        "I feel satisfied after intimacy",
        "I feel free from shame or discomfort",
        "Intimacy helps me feel closer",
        "I feel secure during intimacy",
        "I enjoy exploring intimacy healthily"
    ],

    NEW: [
        "I have healed from past wounds",
        "I understand my emotional needs",
        "I feel secure being alone",
        "I am not seeking someone to fill a void",
        "I can set healthy boundaries",
        "I feel optimistic about intimacy again",
        "I can be emotionally vulnerable",
        "I am not comparing new people to my past",
        "I feel emotionally stable",
        "I do not feel desperate for connection",
        "I feel excited about a new relationship, not anxious",
        "I can manage expectations realistically",
        "I feel ready to trust again",
        "I have clarity on what I want in a partner",
        "I feel confident communicating needs",
        "I can walk away from unhealthy dynamics",
        "I am not repeating past patterns",
        "I feel open, not closed off",
        "I feel hopeful about love",
        "I understand relationship red flags",
        "I respect my own boundaries",
        "I have grown since my last relationship",
        "I make decisions calmly, not emotionally",
        "I can handle emotional vulnerability",
        "I feel genuinely ready for new connection"
    ]
};


const OPTIONS = ["Not at all", "Sometimes", "Often", "Very Often"];

/* --------------------------------------------
   ENCRYPTION (for code generation)
--------------------------------------------- */
const encode = (text) => btoa(text).replace(/=/g, "").slice(0, 5);
const generateEncryptedCode = (testId, score) => {
    const t = encode(testId);
    const s = encode(score.toString());
    return `${t}-${s}-${Math.random().toString(36).substring(2, 5).toUpperCase()}`;
};

/* --------------------------------------------
   CARD COMPONENT
--------------------------------------------- */
function AssessmentCard({ data, onStart }) {
    return (
        <div
            className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer animate-fadeIn"
            onClick={() => onStart(data)}
        >
            <div className="text-5xl mb-4">{data.icon}</div>
            <h2 className="text-2xl font-bold text-[#0D3B66]">{data.title}</h2>
            <p className="text-gray-600 mt-2">{data.desc}</p>
        </div>
    );
}

/* --------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export default function Assessment() {
    const [activeTest, setActiveTest] = useState(null);
    const [answers, setAnswers] = useState({});
    const [progress, setProgress] = useState(0);
    const [code, setCode] = useState("");

    const WHATSAPP = "917977482411";

    useEffect(() => {
        if (!activeTest) return;
        const total = QUESTIONS[activeTest.id].length;
        const answered = Object.keys(answers).length;
        setProgress((answered / total) * 100);
    }, [answers, activeTest]);

    const handleAnswer = (index, value) => {
        setAnswers({ ...answers, [index]: value });
    };

    const submitTest = () => {
        const score = Object.values(answers).reduce((a, b) => a + Number(b), 0);
        const encrypted = generateEncryptedCode(activeTest.id, score);
        setCode(encrypted);
        navigator.clipboard.writeText(encrypted);
    };

    return (
        <div className="pt-32 px-6 bg-[#F6F8FF] min-h-screen">

            {/* TITLE */}
            <h1 className="text-5xl font-extrabold text-center text-[#0D3B66] mb-4 animate-fadeIn">
                Self-Assessment Hub
            </h1>
            <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto animate-fadeIn delay-150">
                Explore professional, psychology-informed assessments to understand your emotional, mental, and relational well-being.
            </p>

            {/* ASSESSMENT LIST */}
            {!activeTest && !code && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-16">
                    {ASSESSMENTS.map((item) => (
                        <AssessmentCard key={item.id} data={item} onStart={setActiveTest} />
                    ))}
                </div>
            )}

            {/* QUESTIONS SECTION */}
            {activeTest && !code && (
                <div className="max-w-3xl mx-auto mt-12 bg-white rounded-3xl shadow-xl p-10 border border-gray-200 animate-slideUp">

                    {/* PROGRESS BAR */}
                    <div className="w-full bg-gray-200 h-3 rounded-full mb-8 overflow-hidden">
                        <div
                            className="bg-[#0D3B66] h-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <h2 className="text-3xl font-bold text-[#0D3B66] text-center mb-8 flex items-center justify-center gap-3">
                        <span className="text-4xl">{activeTest.icon}</span>
                        {activeTest.title}
                    </h2>

                    {QUESTIONS[activeTest.id].map((q, i) => (
                        <div key={i} className="mb-8 animate-fadeIn">
                            <p className="font-semibold text-gray-700 mb-3">{i + 1}. {q}</p>

                            <div className="flex gap-4 flex-wrap">
                                {OPTIONS.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(i, idx)}
                                        className={`px-4 py-2 rounded-full border transition-all 
                                            ${answers[i] === idx
                                            ? "bg-[#0D3B66] text-white shadow-md scale-105"
                                            : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"}`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={submitTest}
                        className="w-full mt-6 bg-[#0D3B66] text-white py-3 rounded-full text-lg font-bold hover:bg-[#093056] transition-all"
                    >
                        Submit & Generate Your Code
                    </button>

                    <button
                        onClick={() => { setActiveTest(null); setAnswers({}); }}
                        className="w-full mt-3 bg-gray-200 py-2 rounded-full text-gray-700 hover:bg-gray-300"
                    >
                        Back to Assessments
                    </button>
                </div>
            )}

            {/* RESULT SECTION */}
            {code && (
                <div className="max-w-2xl mx-auto mt-16 bg-white border border-gray-200 shadow-xl rounded-3xl p-10 text-center animate-fadeIn">

                    <h2 className="text-3xl font-bold text-[#0D3B66] mb-4">Your Assessment Code</h2>

                    <p className="text-4xl font-mono tracking-widest text-[#0D3B66] mt-6">{code}</p>

                    <p className="text-gray-600 mt-2">Copied to clipboard automatically</p>

                    <a
                        href={`https://wa.me/${WHATSAPP}?text=My assessment code is: ${code}`}
                        target="_blank"
                        className="block mt-8 px-8 py-4 bg-[#0D3B66] rounded-full text-white text-lg font-semibold hover:bg-[#082c52] transition"
                    >
                        Send Code on WhatsApp
                    </a>

                    <button
                        onClick={() => { setActiveTest(null); setAnswers({}); setCode(""); }}
                        className="w-full mt-5 bg-gray-200 py-2 rounded-full text-gray-700 hover:bg-gray-300"
                    >
                        Take Another Assessment
                    </button>
                </div>
            )}
        </div>
    );
}
