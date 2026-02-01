import React from "react";

/* ---------------- CONFIG ---------------- */

const PLACE = {
    name: "MINDOPIIA",
    rating: 4.8,
    placeId: "ChIJ_40P7jyx5zsR0pXOvYvpTGg",
    readReviewsUrl: "https://share.google/0Dn3tY3siaBiGYuht",
    mapQuery: "MINDOPIIA Dahisar West Mumbai",
};

/* ---------------- LINKS ---------------- */

const writeReviewUrl = `https://search.google.com/local/writereview?placeid=${PLACE.placeId}`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    PLACE.mapQuery
)}&output=embed`;

/* ---------------- COMPONENT ---------------- */

export default function Reviews() {
    return (
        <div style={styles.page}>

            {/* HERO */}
            <section style={styles.hero}>
                <h1 style={styles.heroTitle}>Client Experiences & Reviews</h1>
                <p style={styles.heroSubtitle}>
                    Real stories. Real healing. Genuine feedback shared by people
                    who trusted us with their mental wellbeing.
                </p>
            </section>

            {/* RATING */}
            <section style={styles.ratingCard}>
                <h2 style={styles.rating}>⭐ {PLACE.rating} / 5</h2>
                <p style={styles.ratingText}>
                    Rated on Google by verified clients of {PLACE.name}
                </p>

                <div style={styles.ctaRow}>
                    <ReviewButton
                        href={PLACE.readReviewsUrl}
                        label="⭐ Read Google Reviews"
                        primary
                    />

                    <ReviewButton
                        href={writeReviewUrl}
                        label="✍️ Write a Review"
                    />
                </div>
            </section>

            {/* MAP */}
            <section style={styles.mapSection}>
                <div style={styles.mapText}>
                    <h3>Visit Us</h3>
                    <p>
                        Our counselling space is designed to feel safe, calm,
                        and welcoming. You can also find us on Google Maps
                        and explore authentic reviews shared by our clients.
                    </p>
                </div>

                <div style={styles.mapWrapper}>
                    <iframe
                        title={`${PLACE.name} Location`}
                        src={mapEmbedUrl}
                        width="100%"
                        height="320"
                        style={styles.mapFrame}
                        loading="lazy"
                    />
                </div>
            </section>

            {/* TRUST */}
            <section style={styles.trustNote}>
                <h4>Why Google Reviews?</h4>
                <p>
                    Google reviews are public, unedited, and transparent.
                    They help future clients make informed decisions while
                    allowing us to grow responsibly and ethically.
                </p>
            </section>

        </div>
    );
}

/* ---------------- BUTTON ---------------- */

function ReviewButton({ href, label, primary = false }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={primary ? styles.primaryBtn : styles.secondaryBtn}
        >
            {label}
        </a>
    );
}

/* ---------------- STYLES ---------------- */

const styles = {
    page: {
        fontFamily: "Poppins, sans-serif",
        background: "#fafafa",
        color: "#222",
    },

    hero: {
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #f3e8ff, #ffffff)",
    },

    heroTitle: {
        fontSize: "38px",
        marginBottom: "16px",
    },

    heroSubtitle: {
        maxWidth: "700px",
        margin: "0 auto",
        fontSize: "18px",
        color: "#555",
    },

    ratingCard: {
        maxWidth: "900px",
        margin: "-40px auto 60px",
        background: "#fff",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center",
    },

    rating: {
        fontSize: "42px",
        marginBottom: "10px",
    },

    ratingText: {
        color: "#666",
        marginBottom: "30px",
    },

    ctaRow: {
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
    },

    primaryBtn: {
        padding: "14px 26px",
        background: "#7c3aed",
        color: "#fff",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: "600",
    },

    secondaryBtn: {
        padding: "14px 26px",
        background: "#f5f5f5",
        color: "#222",
        borderRadius: "12px",
        textDecoration: "none",
        fontWeight: "600",
    },

    mapSection: {
        maxWidth: "1000px",
        margin: "0 auto 80px",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
    },

    mapText: {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#444",
    },

    mapWrapper: {
        width: "100%",
    },

    mapFrame: {
        border: 0,
        borderRadius: "14px",
    },

    trustNote: {
        maxWidth: "800px",
        margin: "0 auto 80px",
        padding: "0 20px",
        textAlign: "center",
        color: "#555",
    },
};
