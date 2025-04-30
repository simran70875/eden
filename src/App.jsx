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
import useLenisScrollLock from "./hooks/useLenisScrollLock";
import About from "./screens/about";

const ScrollManager = ({ children, lenisRef }) => {
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
const ContactModalWrapper = ({ lenisRef }) => {
  const { closeContactModal, isContactModalOpen } = useModal();

  // Scroll lock hook
  useLenisScrollLock(isContactModalOpen, lenisRef.current);

  return <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />;
};



const App = () => {
  const lenisRef = useRef(null);
  return (
    <ModalProvider>
      <Router>
        <ScrollManager lenisRef={lenisRef}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ScrollManager>
      </Router>

      {/* Render once globally */}
      <ContactModalWrapper lenisRef={lenisRef} />
    </ModalProvider>
  );
};

export default App;
