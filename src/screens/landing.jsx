import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Btn from "../components/other/btn";
import Header from "../components/other/header";
import images from "../components/theme/imagesPath";
import Footer from "../components/other/footer";
import Features from "../components/pages/features";
import Brands from "../components/pages/brands";
import "../responsive.css";
import { useModal } from "../components/pages/ModalContext";
import { FaSearch, FaTimes } from "react-icons/fa";
import SearchBar from "./searchBar";

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);
  const lineRef = useRef(null);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  const infinityLogoRef = useRef(null);
  const infinityAboutLogoRef = useRef(null);

  const topTitleRef = useRef(null);
  const longContentRef = useRef(null);
  const flowersRef = useRef(null);

  const data = [
    {
      title: "Eden Infinity",
      content:
        "The world is changing — fast. Businesses and consumers are more aware than ever of the need for genuine sustainability. Expectations are rising, and responsibility is no longer optional. Many organisations are making changes — Eden Infinity helps take it further.",
    },
    {
      title: "Eden Strategy",
      content:
        "With UK and global energy markets remaining volatile and unpredictable, effective energy management is more important than ever. At Eden, we work closely with you to.",
    },
    {
      title: "Eden Auditing",
      content:
        "Utility bills are often affected by complex tariffs and ever-changing regulations — and errors can easily go unnoticed. At Eden, we carry out independent audits to uncover undue charges and recover any credit owed.",
    },
    {
      title: "Eden Procedurement",
      content:
        "Energy suppliers across the UK offer a range of purchasing options — each with different terms, restrictions, and levels of flexibility. Navigating them isn’t always straightforward.",
    },
    {
      title: "Eden Analytics",
      content:
        "Clear, accurate reporting is key to understanding and managing your energy costs effectively. At Eden, we tailor reporting to suit your needs — from high-level insights to detailed data.",
    },
    {
      title: "Eden Optimisation",
      content:
        "Our team helps ensure you're not overpaying for your energy. We optimise your current tariffs and charges while factoring in future consumption, protecting you from exceeding thresholds as your business grows.",
    },
  ];

  const component = useRef();
  const slider = useRef();

  //hero section animation
  useGSAP(() => {
    // Animate all .slide-up-text elements with stagger (once)
    const slideUpElements = gsap.utils.toArray(".slide-up-text");

    // Create the GSAP timeline
    const tl = gsap.timeline({
      delay: 4, // Start the entire timeline after 3 seconds
    });

    // Slide-up animation with stagger
    tl.fromTo(
      slideUpElements,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
    // Rotation animation for infinity logo on scroll
    gsap.to(infinityLogoRef.current, {
      rotation: 360,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom", // The trigger will start when the section is in view
        end: "bottom top",
        scrub: true, // Makes the animation scrub with the scroll
      },
    });
  }, []);

  //about section animation
  useGSAP(
    () => {
      if (!infinityAboutLogoRef.current || !aboutRef.current) return;

      // Animate all .slide-up-text elements with stagger (once)
      const slideUpElements = gsap.utils.toArray(".slide-up-text");

      gsap.fromTo(
        slideUpElements,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          // stagger: 0.4, // ⏱️ delay between each element
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 100%",
          
          },
        }
      );

      // Logo rotation (can keep scrub or make once)
      gsap.to(infinityAboutLogoRef.current, {
        rotation: 360,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // once: true, // optional: use only if you want one-time spin
        },
      });
    },
    { dependencies: [infinityAboutLogoRef, aboutRef] }
  );

  //line animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Line animation
    tl.fromTo(lineRef.current, { height: 0 }, { height: "100%", ease: "none" });
  }, []);

  // sevices section animation
  useGSAP(() => {
    let screenWidth = window.innerWidth;
    let scrollStartValue = "top center";

    if (screenWidth >= 1921) {
      scrollStartValue = "top center-=100";
    }

    if (screenWidth >= 1441 && screenWidth < 1921) {
      scrollStartValue = "top center-=50";
    }

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".expandable-box");

      if (screenWidth >= 769) {
        // Desktop Animation (your current pinned scroll animation)
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: slider.current,
            start: scrollStartValue,
            end: "+=" + panels.length * 800, // Customize scroll length
            scrub: 1,
            pin: true,
            endTrigger: "#contact",
            onLeave: () => {
              document
                .getElementById("services-header")
                ?.classList.add("scroll-ended");
            },
            onEnterBack: () => {
              document
                .getElementById("services-header")
                ?.classList.remove("scroll-ended");
            },
          },
        });

        panels.forEach((panel, i) => {
          const tl = gsap.timeline();
          const title = panel.querySelector(".box-title");
          const content = panel.querySelector(".box-content");

          tl.to(panel, {
            width: "14vw",
            duration: 1,
            ease: "none",
          });

          // Hide content
          tl.to(
            content,
            {
              opacity: 0,
              overflow: "hidden",
              duration: 0.5,
              // delay:1,
              // width:"100%",
              ease: "power2.inOut",
            },
            "<"
          );

          timeline.add(tl, i);
        });
      } else {
        // Mobile & Tablet Animation (different simple scroll animation)
        // panels.forEach((panel) => {
        //   gsap.from(panel, {
        //     opacity: 0,
        //     y: 50,
        //     duration: 0.8,
        //     ease: "power3.out",
        //     scrollTrigger: {
        //       trigger: panel,
        //       start: "top 85%",
        //       end: "bottom 60%",
        //       toggleActions: "play none none reverse",
        //     },
        //   });
        // });
      }
    }, slider);

    return () => ctx.revert();
  }, []);

  const ExpandableServicesBox = ({ index, onClick, title, content }) => {
    const boxRef = useRef();
    const contentRef = useRef();
    const titleRef = useRef();
    const boxBgColors = ["#fafafa", "#8DC74B", "#2F98D0"];
    const isBoxLight = boxBgColors[index % boxBgColors.length] === "#fafafa";

    return (
      <div
        ref={boxRef}
        className="expandable-box"
        style={{
          backgroundColor: boxBgColors[index % boxBgColors.length],
          color:
            boxBgColors[index % boxBgColors.length] === "#fafafa"
              ? "#000"
              : "#fff",
          flexShrink: 0,
        }}
        onClick={onClick}
      >
        <div className="title-row">
          <h3 ref={titleRef} className={"box-title"}>
            {title}
          </h3>

          <div
            className="index-badge"
            style={{
              backgroundColor:
                boxBgColors[index % boxBgColors.length] === "#fafafa"
                  ? "#2F98D0"
                  : "#fff",
              color:
                boxBgColors[index % boxBgColors.length] === "#fafafa"
                  ? "#fff"
                  : "#000",
            }}
          >
            {index < 10 ? `0${index + 1}` : index + 1}
          </div>
        </div>

        <div ref={contentRef} className="box-content">
          <p
            className="long-content"
            style={{
              color:
                boxBgColors[index % boxBgColors.length] === "#fafafa"
                  ? "#828282"
                  : "#fff",
            }}
          >
            {content}
          </p>
          <div className="box-btn">
            {/* <Btn iconbackground={boxBgColors[index % boxBgColors.length] === "#8DC74B" ? '#8DC74B' : boxBgColors[index % boxBgColors.length] === "#2F98D0" ? '#2F98D0' : '#fff'} color={boxBgColors[index % boxBgColors.length] === "#8DC74B" ? '#8DC74B' : boxBgColors[index % boxBgColors.length] === "#2F98D0" ? '#2F98D0' : '#fff'} background={boxBgColors[index % boxBgColors.length] === "#fafafa" ? "linear-gradient(86.2deg, #2F98D0 8.59%, #47ADE3 89.8%)" : "linear-gradient(86.2deg,#ffffff 8.59%, #ffffff 89.8%)"} rightIcon>Learn More</Btn> */}

            <Btn rightIcon>Learn More</Btn>
          </div>
        </div>

        <img src={images.pattern} alt="pattern" id="pattern" />
      </div>
    );
  };

  //leaf animation
  const leafRef = useRef(null);
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!leafRef.current || !circleRef.current) return;

    const leaf = leafRef.current;
    const circle = circleRef.current;

    const { left, top, width, height } = leaf.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    // Move glowing circle to cursor position
    circle.style.left = `${mouseX}px`;
    circle.style.top = `${mouseY}px`;
    circle.style.opacity = 1;

    // Calculate fast rotation
    const rotateX = (mouseY / height - 0.5) * 60;
    const rotateY = (mouseX / width - 0.5) * -60;

    // Animate with GSAP
    gsap.to(leaf, {
      rotateX,
      rotateY,
      duration: 0.2,
      ease: "power3.out",
      transformPerspective: 800,
      transformOrigin: "center center",
    });
  };

  const handleMouseLeave = () => {
    if (!leafRef.current || !circleRef.current) return;

    // Reset rotation and hide circle
    gsap.to(leafRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    circleRef.current.style.opacity = 0;
  };

  useEffect(() => {
    const leaf = leafRef.current;
    if (!leaf) return;

    leaf.addEventListener("mousemove", handleMouseMove);
    leaf.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      leaf.removeEventListener("mousemove", handleMouseMove);
      leaf.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const { openContactModal } = useModal();
  return (
    <>
      <div id="header-outer">
        <Header />
      </div>

      <section id="hero" ref={heroRef}>
        <img
          src={images.infinity_logo_transparent}
          alt="infinity_logo_transparent"
          id="infinity-logo-transparent"
          ref={infinityLogoRef}
        />

        <div id="contentSection">
          <div className="slide-up">
            <img src={images.logo} alt="logo" className="logo slide-up-text" />
          </div>
          <div className="slide-up">
            <h1 className="top-title slide-up-text" ref={topTitleRef}>
              Your sustainable <span>utility partner</span>
            </h1>
          </div>

          <div className="slide-up">
            <p className="long-content slide-up-text" ref={longContentRef}>
              Driving smarter, greener utility strategies through expert
              procurement, data-led insight, and flexible support tailored to
              your operational and sustainability goals.
            </p>
          </div>

          <div className="slide-up slide-up-text">
            <Btn className="webBtn" onClick={openContactModal} rightIcon>
              Talk to an Expert
            </Btn>
          </div>
          <img className="flowers" src={images.flowers} ref={flowersRef} />
        </div>
      </section>

      <SearchBar />

      <div className="leaf" ref={leafRef}>
        <img alt="leaf" src={images.leaf} />
        <div className="glowing-circle" ref={circleRef}></div>{" "}
        {/* Glowing circle element */}
      </div>

      <section id="about" ref={aboutRef}>
        <div id="about-row">
          <div id="about-left">
            <div id="contentSectionAbout">
              <div className="slide-up">
                <div id="about-title" className="slide-up-text">
                  The mind{" "}
                  <span>
                    <img
                      src={images.infinity}
                      alt="infinity"
                      id="infinity-about"
                    />
                  </span>{" "}
                  <span id="behind">Behind</span> <span id="eden">eden</span>
                </div>
              </div>
              <div className="slide-up">
                <p className="long-content slide-up-text">
                  Mark’s expertise has shaped Eden Utilities from the ground up,
                  embedding a consultative and sustainability-first ethos into
                  the company’s foundation. Deeply aware of the changing energy
                  landscape, he understands the growing need for trusted,
                  future-focused advisory. This mindset is central not just to
                  Eden’s services, but to every team member he brings on board —
                  creating a company united by shared values and a long-term
                  vision for smarter, greener utilities
                </p>
              </div>
            </div>
          </div>
          <div id="about-right">
            <div className="person-about-business">
              <div className="slide-up">
                <p className="long-content-medium slide-up-text">
                  With over 30 years in the utilities industry, I believe in
                  honest, expert advice delivered with a personable approach,
                  focused on long-term value and sustainable solutions
                </p>
              </div>
              <img className="view" src={images.view} />
              <img className="viewBottom" src={images.viewBottom} />
            </div>
            <div className="person-info">
              <img className="founder" alt="founder" src={images.founder} />
              <div className="slide-up">
                <p className="name slide-up-text">Mark chipol</p>
              </div>
              <div className="slide-up">
                <p className="designation slide-up-text">Founder & MD</p>
              </div>
            </div>
          </div>
          <img
            src={images.infinity_logo_transparent}
            alt="infinity_logo_transparent"
            id="infinity-logo-transparent-about"
            ref={infinityAboutLogoRef}
          />
        </div>

        <div id="about-bottom-tabs">
          <div className="person-info">
            <img
              className="person-image"
              alt='person-image"'
              src={images.person1}
            />
            <p className="name">ANDY</p>
          </div>
          <div className="person-info-round">
            <img
              className="person-image"
              alt='person-image"'
              src={images.person2}
            />
            <p className="name">Cathrine</p>
          </div>
          <div className="person-info">
            <img
              className="person-image"
              alt='person-image"'
              src={images.person3}
            />
            <p className="name">sIMON</p>
          </div>
          <div className="person-info-round">
            <img
              className="person-image"
              alt='person-image"'
              src={images.person4}
            />
            <p className="name">MIKE</p>
          </div>
        </div>
      </section>

      <Brands btn />

      <section id="services" ref={component}>
        <div id="services-header">
          <p className="long-content-medium">
            Smart Energy Solutions for Businesses
          </p>
          <div className="title">
            Optimize Costs & Efficiency
            <br />
            with Our Expert Services
          </div>
          <img
            alt="side-leaves"
            className="side-leaves"
            src={images.side_leaves}
          />
        </div>

        <div className="box-row" ref={slider}>
          {data.map((item, index) => (
            <ExpandableServicesBox
              key={index}
              index={index}
              title={item.title}
              content={item.content}
              isActive={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </section>

      <div id="contact">
        <h1 className="edenText-title">
          <span className="w-wrapper">
            <span className="w-letter">S</span>m
            <span className="a-wrapper">
              <span className="a-letter">a</span>rt
            </span>{" "}
            Utility{" "}
            <span>
              <img
                src={images.contact}
                alt="decorative"
                className="decorative-image"
              />
            </span>
          </span>
        </h1>

        <div className="solution-text">
          <Btn rightIcon padding="0 2rem">
            Talk to An expert
          </Btn>
          <h1 className="edenText-title">solutions for</h1>
        </div>

        <h1 className="edenText-title">Sustainable Growth.</h1>
        <img alt="dotted-image" className="dotted" src={images.dotted} />
        <img
          alt="side-leaves"
          className="side-leaves2"
          src={images.side_leaves2}
        />
      </div>

      <Features />

      <Footer />
    </>
  );
};

export default LandingPage;
