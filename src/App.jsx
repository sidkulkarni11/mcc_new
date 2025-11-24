import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./pages/About.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Footer from "./components/Footer.jsx";
import BecomeCounsellor from "./pages/BecomeCounsellor.jsx";
import CareerCounselling from "./pages/CareerCounselling.jsx";
import Approaches from "./pages/Approaches.jsx"; // FULL PAGE

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                {/* HOME PAGE */}
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


                {/* CAREER PAGE */}
                <Route path="/about" element={<About />} />
                {/* CAREER PAGE */}
                <Route path="/career" element={<CareerCounselling />} />

                {/* THERAPEUTIC APPROACHES PAGE */}
                <Route path="/approaches" element={<Approaches />} />


                <Route path="/careercounsellor" element={<BecomeCounsellor />} />



            </Routes>
        </>
    );
}

export default App;
