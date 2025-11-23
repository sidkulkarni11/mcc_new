export default function WhyUs() {
    return (
        <section className="px-6 py-20 bg-white">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl md:text-5xl font-bold text-[#0D3B66]">
                    Why Choose Mindopiia?
                </h2>

                <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
                    Evidence-based therapy, compassionate care, and judgement-free healing.
                    Designed to help you feel understood, supported, and empowered.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="p-8 rounded-2xl shadow-lg bg-[#F6F9FF]">
                        <h3 className="text-xl font-semibold text-[#0D3B66]">Confidential</h3>
                        <p className="mt-2 text-gray-600">Every session remains private and safe.</p>
                    </div>

                    <div className="p-8 rounded-2xl shadow-lg bg-[#F6F9FF]">
                        <h3 className="text-xl font-semibold text-[#0D3B66]">Evidence-Based</h3>
                        <p className="mt-2 text-gray-600">Approaches rooted in proven psychology.</p>
                    </div>

                    <div className="p-8 rounded-2xl shadow-lg bg-[#F6F9FF]">
                        <h3 className="text-xl font-semibold text-[#0D3B66]">Personalized Care</h3>
                        <p className="mt-2 text-gray-600">Tailored therapeutic journey for your needs.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
