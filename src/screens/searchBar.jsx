import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SearchBar = () => {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const ghostRef = useRef(null);

  const [inputText, setInputText] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [showDots, setShowDots] = useState(false);
  const [dotLeftOffset, setDotLeftOffset] = useState(0);

  const placeholderRef = useRef(""); // to hold the growing placeholder text
  const intervalRef = useRef(null); // to store the interval id
  const hasAnimated = useRef(false);

  const [searchCompleted, setSearchCompleted] = useState(false);

  const searchAnimation = () => {
    gsap.to(containerRef.current, {
      scale: 1,
      delay: 0.5,
      duration: 1,
      ease: "power3.easeout",
      onComplete: () => {
        setExpanded(true);

        const placeholder = "The Best Utility Experts Near Me";
        let index = 0;
        placeholderRef.current = "";
        if (inputRef.current) inputRef.current.placeholder = "";

        intervalRef.current = setInterval(() => {
          if (index < placeholder.length) {
            placeholderRef.current += placeholder[index];
            if (inputRef.current) {
              inputRef.current.placeholder = placeholderRef.current;
            }
            if (ghostRef.current) {
              ghostRef.current.textContent = placeholderRef.current;
            }
            index++;
          } else {
            clearInterval(intervalRef.current);
            setShowDots(true);

            if (ghostRef.current) {
              setDotLeftOffset(ghostRef.current.offsetWidth);
            }

            gsap.to(".dot", {
              y: -10,
              stagger: 0.15,
              ease: "power3.inOut",
              duration: 1,
              onComplete: () => {
                setSearchCompleted(true); // ✅ Mark search animation as complete
              },
            });
          }
        }, 40);
      },
    });
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#search",
      start: "top 100%",
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        searchAnimation();
      },
    });

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useGSAP(() => {
    if (showDots) {
      requestAnimationFrame(() => {
        const dots = document.querySelectorAll(".dot");
        const tl = gsap.timeline();

        tl.to(dots, {
          keyframes: [
            { y: 0, duration: 0.5 },
            { y: -10, duration: 0.5 },
            { y: 0, duration: 0.5 },
          ],
          ease: "sine.inOut",
          stagger: {
            each: 0.2,
            from: "start",
          },
        });
      });
    }
  }, [showDots]);

  const edenTextRef = useRef(null);
  const circleRefs = useRef([]);
  circleRefs.current = [];
  const addCircleRef = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };


  // Animation for the Eden text
  useGSAP(() => {
    if (!searchCompleted) return; // ❌ Don't run unless search is done

    const title = edenTextRef.current.querySelector(".edenText-title");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#edenText",
        start: "top 80%",
        once: true,
      },
    });


    tl.fromTo(
      title,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "circ.out",
        onComplete: () => {
          // Once animation is done, change overflow to visible
          const edenTextWrapper = document.querySelector(".edenText-wrapper");
          if (edenTextWrapper) {
            edenTextWrapper.style.overflow = "visible";
          }
        },
      }
    );
    tl.from(
      circleRefs.current,
      {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.3,
      },
      "-=0.5"
    );
  }, [searchCompleted]); // ✅ Re-run hook when search completes

  const handleClear = () => {
    setInputText("");
    if (inputRef.current) inputRef.current.placeholder = "";
    placeholderRef.current = "";
    setShowDots(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (ghostRef.current) {
        setDotLeftOffset(ghostRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section id="search">
        <div
          ref={containerRef}
          className={`search-container ${expanded ? "expanded" : ""}`}
          style={{ position: "relative" }}
        >
          <div className="icon-wrapper">
            <FaSearch size={16} color="#000" />
          </div>

          <input
            ref={inputRef}
            type="text"
            className="search-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          {/* Ghost placeholder for measuring width */}
          <span ref={ghostRef} className="ghost-text"></span>

          {/* Bouncing dots */}
          {showDots && (
            <div
              className="bouncing-dots"
              style={{
                left: `calc(60px + ${dotLeftOffset}px)`,
              }}
            >
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </div>
          )}

          {inputText && (
            <FaTimes className="clear-icon" size={16} onClick={handleClear} />
          )}
        </div>
      </section>
      <section id="edenText" ref={edenTextRef}>
        <div className="edenText-wrapper">
          <h1 className="edenText-title">
            <span className="w-wrapper">
              <span className="w-letter">W</span>e{" "}
              <span className="a-wrapper">
                <span className="a-letter" ref={addCircleRef}>
                  a
                </span>
                re
              </span>{" "}
              <span className="eden-highlight">
                <span className="d-wrapper">
                  E
                  <span className="d-letter" ref={addCircleRef}>
                    d
                  </span>
                  en.
                </span>
              </span>
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
