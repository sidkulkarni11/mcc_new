import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Footer from "./components/Footer.jsx";

// PAGES
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";   // ⭐ NEW COMBINED PAGE
import Volunteer from "./pages/Volunteer.jsx";
import FAQ from "./pages/FAQ.jsx";
import Competitions from "./pages/Competitions.jsx";
import Admin from "./pages/Admin.jsx";  // Will enable after login setup

function App() {
    return (
        <>
            <Navbar />

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
                {/* MAIN STATIC PAGES */}
                {/* -------------------------- */}
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/events" element={<Competitions />} />
                <Route path="/admin" element={<Admin />} />

            </Routes>
        </>
    );
}

export default App;
