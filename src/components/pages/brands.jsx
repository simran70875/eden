import React from "react";
import images from "../theme/imagesPath";
import Btn from "../other/btn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brands = ({ btn, style }) => {
  const brands = [
    images.brand1,
    images.brand2,
    images.brand3,
    images.brand4,
    images.brand1,
    images.brand2,
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#brands",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#brands .child-brand-title > span", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

    // Optional: Animate logos afterwards
    tl.from(
      "#brands .brand-logo",
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    ); // start overlapping with previous
  }, []);

  return (
    <section id="brands" style={style}>
      <h1 className="title">
        {["BRANDS ", "WHO ", "TRUST ", "EDEN"].map((word, i) => (
          <span className="parent" key={i}>
            <span
              className={`child-brand-title ${
                word === "EDEN" ? "eden-highlight" : ""
              }`}
            >
              <span>{word}{" "}</span>
            </span>
          </span>
        ))}
      </h1>

      <div className="brands-track">
        <div className="brands-slide">
          {brands.concat(brands).map((logo, index) => (
            <img
              src={logo}
              alt={`Brand ${index}`}
              key={index}
              className="brand-logo"
            />
          ))}
        </div>
      </div>
      {btn && <Btn rightIcon>See how eden Works</Btn>}
    </section>
  );
};

export default Brands;
