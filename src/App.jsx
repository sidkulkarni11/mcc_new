import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Footer from "./components/Footer.jsx";

// PAGES
import About from "./pages/About.jsx";
import Approaches from "./pages/Approaches.jsx";
import CareerCounselling from "./pages/CareerCounselling.jsx";
import BecomeCounsellor from "./pages/BecomeCounsellor.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import FAQ from "./pages/FAQ.jsx";
import Competitions from "./pages/Competitions.jsx";
import Admin from "./pages/Admin.jsx";

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
                            <Approaches />
                            <WhyUs />
                            <Footer />
                        </>
                    }
                />

                {/* -------------------------- */}
                {/* STATIC PAGES */}
                {/* -------------------------- */}
                <Route path="/about" element={<About />} />
                <Route path="/approaches" element={<Approaches />} />
                <Route path="/career" element={<CareerCounselling />} />
               <Route path="/careercounsellor" element={<BecomeCounsellor />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/events" element={<Competitions />} />
                {/*<Route path="/admin" element={<Admin />} />*/}

            </Routes>
        </>
    );
}

export default App;
