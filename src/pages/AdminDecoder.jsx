import React, { useState } from "react";

/* --------------------------------------------
   Test Labels + Total Score per Assessment
--------------------------------------------- */
const TEST_META = {
    DEP: { label: "Depression Assessment", total: 25 },
    ANX: { label: "Anxiety Assessment", total: 25 },
    CGC: { label: "Career Goal Clarity", total: 25 },
    REL: { label: "Relationship Health Check", total: 25 },
    SEX: { label: "Sexual Well-Being Check", total: 25 },
    NEW: { label: "New Relationship Readiness", total: 25 },
};

/* --------------------------------------------
   Decoding Engine (Safe)
--------------------------------------------- */
const decodeBlock = (segment) => {
    try {
        if (typeof window === "undefined") return null;
        let padded = segment;
        while (padded.length % 4 !== 0) padded += "=";
        return window.atob(padded);
    } catch {
        return null;
    }
};

/* --------------------------------------------
   Severity Logic (Universal)
--------------------------------------------- */
const getSeverity = (score, total) => {
    const pct = (score / total) * 100;

    if (pct <= 30) return { label: "Low", color: "green" };
    if (pct <= 65) return { label: "Moderate", color: "yellow" };
    return { label: "High", color: "red" };
};

/* --------------------------------------------
   Feedback Generator (Professional + Polished)
--------------------------------------------- */
const generateFeedback = (testId, score) => {
    const { label, total } = TEST_META[testId] || {};
    const severity = getSeverity(score, total);

    const s = severity.label;

    let text = "";

    switch (testId) {
        case "DEP":
            text = s === "Low"
                ? "Your responses indicate minimal depressive symptoms."
                : s === "Moderate"
                    ? "Your responses indicate mild to moderate depressive indicators. Reflection and guidance may support you."
                    : "Your responses suggest significant depressive symptoms. Professional counselling is recommended.";
            break;

        case "ANX":
            text = s === "Low"
                ? "You exhibit low anxiety symptoms and good emotional balance."
                : s === "Moderate"
                    ? "Moderate anxiety symptoms detected. Stress-management strategies may support you."
                    : "High anxiety symptoms detected. Therapeutic support may be helpful.";
            break;

        case "CGC":
            text = s === "Low"
                ? "Your career clarity appears low — exploring strengths & values can help."
                : s === "Moderate"
                    ? "You have partial clarity. Structured goal-setting may be helpful."
                    : "You show strong clarity and direction in your career path.";
            break;

        case "REL":
            text = s === "Low"
                ? "Your responses indicate emotional gaps or concerns in the relationship."
                : s === "Moderate"
                    ? "Your relationship has both strengths and areas to reflect on."
                    : "Your relationship appears emotionally healthy and balanced.";
            break;

        case "SEX":
            text = s === "Low"
                ? "There may be concerns around intimacy, communication, or comfort."
                : s === "Moderate"
                    ? "Your sexual well-being is moderately stable with areas to strengthen."
                    : "You show healthy emotional & physical intimacy patterns.";
            break;

        case "NEW":
            text = s === "Low"
                ? "You may not yet be emotionally ready for a new relationship."
                : s === "Moderate"
                    ? "Partially ready — some emotional areas may need attention."
                    : "You appear emotionally ready for a new relationship.";
            break;

        default:
            text = "Unable to interpret this code.";
    }

    return { label, text, severity };
};

/* --------------------------------------------
   Main Component
--------------------------------------------- */
export default function AdminDecoder() {
    const [input, setInput] = useState("");
    const [notes, setNotes] = useState("");
    const [result, setResult] = useState(null);
    const [copyText, setCopyText] = useState("");

    const decodeNow = () => {
        try {
            const parts = input.trim().split("-");
            if (parts.length < 2) throw new Error();

            const testId = decodeBlock(parts[0]);
            const score = Number(decodeBlock(parts[1]));

            if (!testId || isNaN(score)) throw new Error();

            const meta = TEST_META[testId];
            if (!meta) throw new Error();

            const feedback = generateFeedback(testId, score);

            const pct = Math.round((score / meta.total) * 100);

            const formatted = `
${meta.label}
Score: ${score}/${meta.total} (${pct}%)
Severity Level: ${feedback.severity.label}

Summary:
${feedback.text}

${notes ? "Additional Notes:\n" + notes : ""}
            `.trim();

            setResult({
                testId,
                score,
                total: meta.total,
                pct,
                ...feedback,
                formatted,
            });

            setCopyText(formatted);

        } catch {
            setResult({
                error: true,
                formatted: "❌ Invalid code. Please recheck and try again."
            });

            setCopyText("Invalid code.");
        }
    };

    return (
        <div className="pt-32 px-6 min-h-screen bg-[#F4F7FF]">
            <div className="max-w-3xl mx-auto bg-white shadow-xl p-10 rounded-3xl border border-gray-200 animate-fadeIn">

                {/* Title */}
                <h1 className="text-4xl font-extrabold text-center text-[#0D3B66] mb-4">
                    Admin Assessment Decoder
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Decode any client’s encrypted assessment code instantly.
                </p>

                {/* Input */}
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Paste encrypted code (ex: REFT-MTA-9AB)"
                    className="w-full p-4 border rounded-xl shadow-sm mb-4 text-gray-700"
                />

                {/* Admin Notes */}
                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional: Add admin notes (included in final response)"
                    className="w-full p-4 border rounded-xl shadow-sm mb-4 text-gray-700"
                />

                {/* Decode Button */}
                <button
                    onClick={decodeNow}
                    className="w-full py-3 bg-[#0D3B66] text-white rounded-full font-semibold hover:bg-[#082c52]"
                >
                    Decode
                </button>

                {/* Results */}
                {result && (
                    <div className="mt-8 bg-[#F7F9FF] p-6 rounded-2xl border shadow-inner animate-slideUp">

                        {!result.error && (
                            <>
                                <p className="text-xl font-bold text-[#0D3B66]">
                                    {result.label}
                                </p>

                                <p className="mt-2 text-gray-700">
                                    <b>Score:</b> {result.score}/{result.total}
                                    <span className="ml-2">({result.pct}%)</span>
                                </p>

                                {/* Severity Badge */}
                                <span
                                    className={`mt-3 inline-block px-4 py-1 rounded-full text-sm font-semibold text-white ${
                                        result.severity.color === "green"
                                            ? "bg-green-600"
                                            : result.severity.color === "yellow"
                                                ? "bg-yellow-500"
                                                : "bg-red-600"
                                    }`}
                                >
                                    {result.severity.label} Severity
                                </span>

                                <pre className="mt-6 whitespace-pre-line text-gray-700">
                                    {result.formatted}
                                </pre>
                            </>
                        )}

                        {result.error && (
                            <p className="text-red-600 font-semibold text-center">
                                {result.formatted}
                            </p>
                        )}

                        {/* Copy Button */}
                        <button
                            onClick={() => navigator.clipboard.writeText(copyText)}
                            className="mt-6 w-full bg-[#0D3B66] text-white py-2 rounded-full hover:bg-[#082c52]"
                        >
                            Copy Full Response
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
