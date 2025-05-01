import React, { useEffect, useRef } from "react";
import "./App.css";
import Lenis from "lenis";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LandingPage from "./screens/landing";
import Insights from "./screens/insights";
import { ModalProvider, useModal } from "./components/pages/ModalContext";
import ContactModal from "./screens/ContactModal";
import About from "./screens/about";

const ScrollManager = ({ children }) => {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      direction: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // After route change, scroll to top
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [location.pathname]);

  return <>{children}</>;
};

// Separate wrapper to access context inside modal
const ContactModalWrapper = () => {
  const { closeContactModal, isContactModalOpen } = useModal();
  return <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />;
};


const App = () => {
  return (
    <ModalProvider>
      <Router>
        <ScrollManager>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ScrollManager>
      </Router>

      {/* Render once globally */}
      <ContactModalWrapper />
    </ModalProvider>
  );
};

export default App;
