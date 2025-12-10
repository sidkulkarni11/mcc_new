import React, { useState } from "react";

const TEST_LABELS = {
    DEP: "Depression Assessment",
    ANX: "Anxiety Assessment",
    CGC: "Career Goal Clarity",
    REL: "Relationship Health Check",
    SEX: "Sexual Well-Being Check",
    NEW: "New Relationship Readiness",
};

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

const generateFeedback = (testId, score) => {
    const t = TEST_LABELS[testId] || "Unknown Test";

    const low = score <= 12;
    const medium = score <= 20;
    const high = score > 20;

    let interpretation = "";

    switch (testId) {
        case "DEP":
            interpretation = low
                ? "Your responses suggest minimal depressive symptoms."
                : medium
                    ? "Mild to moderate depressive indicators detected."
                    : "High depressive symptoms — professional support is recommended.";
            break;

        case "ANX":
            interpretation = low
                ? "Anxiety indicators appear low."
                : medium
                    ? "Moderate anxiety indicators present."
                    : "High anxiety indicators detected — counselling may help.";
            break;

        case "CGC":
            interpretation = low
                ? "Career clarity seems low — exploration needed."
                : medium
                    ? "Moderate clarity — some direction is forming."
                    : "Strong clarity about career goals.";
            break;

        case "REL":
            interpretation = low
                ? "Relationship may have emotional gaps."
                : medium
                    ? "Balanced but with areas to improve."
                    : "Relationship appears emotionally healthy.";
            break;

        case "SEX":
            interpretation = low
                ? "Concerns around intimacy/comfort may be present."
                : medium
                    ? "Moderate stability with room for improvement."
                    : "Healthy sexual and emotional connection.";
            break;

        case "NEW":
            interpretation = low
                ? "You may not yet be ready for a new relationship."
                : medium
                    ? "Partially ready — some emotional areas need space."
                    : "You appear ready for a new beginning.";
            break;

        default:
            interpretation = "Unable to interpret this code.";
    }

    return `
Assessment: ${t}
Score: ${score}

Summary:
${interpretation}

If you'd like, I can guide you with next steps.`;
};

export default function AdminDecoder() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");

    const decode = () => {
        try {
            const parts = input.trim().split("-");
            if (parts.length < 3) throw new Error();

            const testId = decodeBlock(parts[0]);
            const rawScore = decodeBlock(parts[1]);

            if (!testId || !rawScore || isNaN(rawScore)) throw new Error();

            const feedback = generateFeedback(testId, Number(rawScore));
            setResponse(feedback);
        } catch {
            setResponse("❌ Invalid code. Please check and try again.");
        }
    };

    return (
        <div className="pt-32 px-6 min-h-screen bg-[#F6F9FF]">
            <div className="max-w-3xl mx-auto bg-white shadow-xl p-10 rounded-3xl border border-gray-200">
                <h1 className="text-4xl font-extrabold text-center text-[#0D3B66] mb-6">
                    Admin Assessment Decoder
                </h1>

                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter assessment code here"
                    className="w-full p-4 border rounded-xl text-gray-700 shadow-sm mb-4"
                    rows={2}
                />

                <button
                    onClick={decode}
                    className="w-full py-3 bg-[#0D3B66] text-white rounded-full font-semibold hover:bg-[#093055]"
                >
                    Decode
                </button>

                {response && (
                    <div className="mt-8 bg-[#F7F9FF] p-6 rounded-2xl shadow-inner border border-gray-200">
                        <h2 className="text-2xl font-bold text-[#0D3B66] mb-3">Result</h2>

                        <pre className="whitespace-pre-line text-gray-700 text-md">{response}</pre>

                        <button
                            onClick={() => navigator.clipboard.writeText(response)}
                            className="mt-4 w-full bg-[#0D3B66] text-white py-2 rounded-full hover:bg-[#082c52]"
                        >
                            Copy Response
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
