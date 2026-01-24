import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// PAGES
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import FAQ from "./pages/FAQ.jsx";
import Competitions from "./pages/Competitions.jsx";
import DigitalProducts from "./pages/DigitalProducts.jsx";
import Blogs from "./pages/Blogs.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Assessment from "./pages/Assessment.jsx";
import AdminDecoder from "./pages/AdminDecoder.jsx";
import Workshops from "./pages/Workshops.jsx";
import Careers from "./pages/Careers.jsx"; // ✅ ADDED

export default function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />

            <Routes>
                {/* -------------------------- */}
                {/* HOME PAGE */}
                {/* -------------------------- */}
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <About />
                            <WhyUs />
                            <Footer />
                        </>
                    }
                />

                {/* -------------------------- */}
                {/* STATIC PAGES */}
                {/* -------------------------- */}
                <Route
                    path="/about"
                    element={
                        <>
                            <About />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/services"
                    element={
                        <>
                            <Services />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/digital-products"
                    element={
                        <>
                            <DigitalProducts />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/volunteer"
                    element={
                        <>
                            <Volunteer />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/faq"
                    element={
                        <>
                            <FAQ />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/workshops"
                    element={
                        <>
                            <Workshops />
                            <Footer />
                        </>
                    }
                />

                {/* ✅ CAREERS PAGE ADDED */}
                <Route
                    path="/careers"
                    element={
                        <>
                            <Careers />
                            <Footer />
                        </>
                    }
                />

                {/* -------------------------- */}
                {/* BLOG SYSTEM */}
                {/* -------------------------- */}
                <Route
                    path="/blogs"
                    element={
                        <>
                            <Blogs />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/blogs/:slug"
                    element={
                        <>
                            <BlogDetails />
                            <Footer />
                        </>
                    }
                />

                {/* -------------------------- */}
                {/* EXTRA PAGES */}
                {/* -------------------------- */}
                <Route
                    path="/assessment"
                    element={
                        <>
                            <Assessment />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/events"
                    element={
                        <>
                            <Competitions />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/admindecoder"
                    element={
                        <>
                            <AdminDecoder />
                            <Footer />
                        </>
                    }
                />

                {/* -------------------------- */}
                {/* FALLBACK */}
                {/* -------------------------- */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}
