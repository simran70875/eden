import './App.css';
import './responsive.css';
import Btn from './components/other/btn';
import Header from './components/other/header';
import images from './components/theme/imagesPath';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useLayoutEffect, useRef, useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram
} from "react-icons/fa6";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

const data = [
  { title: "Eden Strategy", content: "Lorem ipsum dolor sit amet consectetur. Convallis just in cursus consectetur. Felis dictumst rutrum et facilisi commodo nec netus." },
  { title: "Eden Strategy", content: "Lorem ipsum dolor sit amet consectetur. Convallis just in cursus consectetur. Felis dictumst rutrum et facilisi commodo nec netus." },
  { title: "Eden Strategy", content: "Lorem ipsum dolor sit amet consectetur. Convallis just in cursus consectetur. Felis dictumst rutrum et facilisi commodo nec netus." },
  { title: "Eden Strategy", content: "Lorem ipsum dolor sit amet consectetur. Convallis just in cursus consectetur. Felis dictumst rutrum et facilisi commodo nec netus." },
  { title: "Eden Strategy", content: "Lorem ipsum dolor sit amet consectetur. Convallis just in cursus consectetur. Felis dictumst rutrum et facilisi commodo nec netus." },
  { title: "Eden Strategy", content: "Lorem ipsum dolor sit amet consectetur. Convallis just in cursus consectetur. Felis dictumst rutrum et facilisi commodo nec netus." },
];

const featuresData = [
  { title: 80, content: "Suppliers Engaged", img: images.feature1 },
  { title: 80, content: "Suppliers Engaged", img: images.feature2 },
  { title: 80, content: "Suppliers Engaged", img: images.feature3 },
  { title: 80, content: "Suppliers Engaged", img: images.feature4 },
  { title: 80, content: "Suppliers Engaged", img: images.feature5 },
  { title: 80, content: "Suppliers Engaged", img: images.feature1 },
  { title: 80, content: "Suppliers Engaged", img: images.feature2 },
  { title: 80, content: "Suppliers Engaged", img: images.feature3 },
  { title: 80, content: "Suppliers Engaged", img: images.feature4 },
  { title: 80, content: "Suppliers Engaged", img: images.feature5 },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);
  const lineRef = useRef(null);
  // const iconRef = useRef(null);

  const brands = [
    images.brand1,
    images.brand2,
    images.brand3,
    images.brand4,
    images.brand5,
    images.brand6,
  ];

  const component = useRef();
  const slider = useRef();

  useGSAP(() => {
    console.log("window.innerWidth ==>", window.innerWidth);
    if (window.innerWidth <= 768) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".expandable-box");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: slider.current,
          start: "top center",
          end: "+=" + panels.length * 800, // Customize scroll length
          scrub: 1,
          pin: true,
          endTrigger: "#contact",
          onLeave: () => {
            document.getElementById("services-header")?.classList.add("scroll-ended");
          },
          onEnterBack: () => {
            document.getElementById("services-header")?.classList.remove("scroll-ended");
          }
        }
      });

      panels.forEach((panel, i) => {
        const tl = gsap.timeline();
        const title = panel.querySelector(".box-title");
        const content = panel.querySelector(".box-content");

        tl.to(panel, {
          width: "14.2vw",
          duration: 1,
          ease: "none"
        });

        // Hide content
        tl.to(content, {
          opacity: 0,
          overflow: "hidden",
          duration: 0.5,
          // delay:1,
          // width:"100%",
          ease: "power2.inOut"
        }, "<");


        // tl.to(title, {
        //   fontSize: "1.2vw"
        // })


        timeline.add(tl, i);
      });
    }, slider);

    return () => ctx.revert();
  }, []);

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
    tl.fromTo(
      lineRef.current,
      { height: 0 },
      { height: "100%", ease: "none" }
    );

    // Icon animation in middle of line
    // tl.fromTo(
    //   iconRef.current,
    //   { opacity: 0 },
    //   { opacity: 1, ease: "power1.out" },

    // );
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
          color: boxBgColors[index % boxBgColors.length] === "#fafafa" ? "#000" : "#fff",
          flexShrink: 0,
        }}
        onClick={onClick}>
        <div className="title-row">
          <h3 ref={titleRef} className={"box-title"}>
            {title}
          </h3>

          <div
            className="index-badge"
            style={{
              backgroundColor: boxBgColors[index % boxBgColors.length] === "#fafafa" ? "#2F98D0" : "#fff",
              color: boxBgColors[index % boxBgColors.length] === "#fafafa" ? "#fff" : "#000",
            }}
          >
            {
              index < 10 ? `0${index + 1}` : index + 1
            }

          </div>
        </div>



        <div ref={contentRef} className="box-content">
          <p className='long-content' style={{ color: boxBgColors[index % boxBgColors.length] === "#fafafa" ? "#828282" : "#fff" }}>{content}</p>
          <div className="box-btn">
            {/* <Btn iconbackground={boxBgColors[index % boxBgColors.length] === "#8DC74B" ? '#8DC74B' : boxBgColors[index % boxBgColors.length] === "#2F98D0" ? '#2F98D0' : '#fff'} color={boxBgColors[index % boxBgColors.length] === "#8DC74B" ? '#8DC74B' : boxBgColors[index % boxBgColors.length] === "#2F98D0" ? '#2F98D0' : '#fff'} background={boxBgColors[index % boxBgColors.length] === "#fafafa" ? "linear-gradient(86.2deg, #2F98D0 8.59%, #47ADE3 89.8%)" : "linear-gradient(86.2deg,#ffffff 8.59%, #ffffff 89.8%)"} rightIcon>Learn More</Btn> */}

            <Btn rightIcon>Learn More</Btn>
          </div>

        </div>

        <img src={images.pattern} alt="pattern" id="pattern" />
      </div>
    );
  };

  return (
    <>
      <div id="header-outer">
        <Header />
      </div>

      <section id="hero">
        <img src={images.infinity_logo_transparent} alt="infinity_logo_transparent" id="infinity-logo-transparent" />
        <div id="contentSection">
          <img src={images.logo} alt="logo" className="logo" />
          <h1 className='top-title'>Your sustainable <span>utility partner</span></h1>
          <p className='long-content content-width'>Lorem ipsum dolor sit amet consectetur. Convallis just in cursus consectetur. Felis dictumst rutrum et facilisi commodo nec netus. </p>
          <Btn rightIcon>Talk to an Expert</Btn>
          <img className="flowers" src={images.flowers} />
        </div>

      </section>

      <section id="search">
        <div className="search-container">
          <img className="search-icon" src={images.icon_search} />

          <input
            type="text"
            className="search-input"
            placeholder="The Best Utility Experts Near Me...."
          />
        </div>
      </section>

      <section id="edenText">
        <h1 className="edenText-title">
          <span className="w-wrapper">
            <span className="w-letter">W</span>e <span className="a-wrapper"><span className="a-letter">a</span>re</span> <span className="eden-highlight"><span className="d-wrapper">E<span className="d-letter">d</span>en.</span></span>
          </span>
        </h1>
        <p className="edenText-subtext">
          LOWER COST - MORE EFFICIENT - BETTER INFORMED
        </p>

        {/* Scroll Animation Wrapper */}
        <div ref={wrapperRef} className='line-wrapper'>
          {/* Vertical Line */}
          <div
            className='line'
            ref={lineRef}
            style={{

            }}
          />

          {/* Icon in center of line */}
          {/* <div
            ref={iconRef}
            className='lineIcon'>
            {"<>"}
          </div> */}
        </div>
      </section>
      <div className='leaf'>
        <img alt="leaf" src={images.leaf} />
      </div>

      <section id="about">
        <div id='about-row'>
          <div id="about-left">
            <div id="about-title">
              The mind <span><img src={images.infinity} alt="infinity" id="infinity-about" /></span>  <span id='behind'>Behind</span> <span id='eden'>eden</span>
            </div>
            <p className='long-content'>Mark’s experience has been the essential pillar in building Eden Utilities Products, whilst his ethos determined the company’s consultative approach on which we continue to build our reputation.</p>
          </div>
          <div id="about-right">
            <div className="person-about-business">
              <p className='long-content-medium'>With 25+ years’ experience in the utilities industry, I believe in a professional, ey friendly approach, delivering high quality services in consultancy format.</p>
              <img className="view" src={images.view} />
              <img className="viewBottom" src={images.viewBottom} />
            </div>
            <div className='person-info'>
              <img className="founder" alt='founder' src={images.founder} />
              <p className="name">Mark chipol</p>
              <p className="designation">Founder & MD</p>
            </div>
          </div>
          <img src={images.infinity_logo_transparent} alt="infinity_logo_transparent" id="infinity-logo-transparent-about" />
        </div>


        <div id="about-bottom-tabs">
          <div className='person-info'>
            <img className="person-image" alt='person-image"' src={images.person1} />
            <p className="name">ANDY</p>
          </div>
          <div className='person-info-round'>
            <img className="person-image" alt='person-image"' src={images.person2} />
            <p className="name">Cathrine</p>
          </div>
          <div className='person-info'>
            <img className="person-image" alt='person-image"' src={images.person3} />
            <p className="name">sIMON</p>
          </div>
          <div className='person-info-round'>
            <img className="person-image" alt='person-image"' src={images.person4} />
            <p className="name">MIKE</p>
          </div>
        </div>
      </section>

      <section id="brands">
        <div className="title">BRANDS WHO TRUST <span className='eden-highlight'>EDEN</span></div>
        <div className="brands-track">
          <div className="brands-slide">
            {brands.concat(brands).map((logo, index) => (
              <img src={logo} alt={`Brand ${index}`} key={index} className="brand-logo" />
            ))}
          </div>
        </div>
        <Btn rightIcon>See how eden Works</Btn>
      </section>

      <section id="services" ref={component}>
        <div id="services-header">
          <p className='long-content-medium'>Smart Energy Solutions for Businesses</p>
          <div className="title">Optimize Costs & Efficiency<br />with Our Expert Services</div>
          <img alt="side-leaves" className='side-leaves' src={images.side_leaves} />
        </div>



        <div className="box-row" ref={slider}>
          {data.map((item, index) => (
            <ExpandableServicesBox
              key={index}
              index={index}
              title={item.title}
              content={item.content}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>

      <div id="contact">

        <h1 className="edenText-title">
          <span className="w-wrapper">
            <span className="w-letter">S</span>m<span className="a-wrapper"><span className="a-letter">a</span>rt</span> Utility <span><img
              src={images.contact}
              alt="decorative"
              className="decorative-image"
            /></span>
          </span>
        </h1>

        <div className='solution-text'>
          <Btn rightIcon padding="0 2rem">Talk to An expert</Btn>
          <h1 className="edenText-title">solutions for</h1>
        </div>

        <h1 className="edenText-title">Sustainable Growth.</h1>
        <img alt="dotted-image" className='dotted' src={images.dotted} />
        <img alt="side-leaves" className='side-leaves2' src={images.side_leaves2} />
      </div>


      <section id="features">
        <div className="brands-track">
          <div className="brands-slide">
            {featuresData?.map((feature, index) => (
              <div key={index} className="supplier-card" style={{ backgroundImage: `url(${feature.img})`, }}>
                <div className="overlay"></div>
                <div className="supplier-percentage">{feature.title}%</div>
                <div className="supplier-label">{feature.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-container">
        <div className='custom-footer'>
          <div className="footer-col">
            <div>
              <img src={images.logo} alt="logo" className="logo" />
              <p className="footer-text">Eden Utilities offers innovative and sustainable utility management solutions, specialising in energy optimisation and renewable energy. We help businesses reduce costs, improve efficiency, and support a greener future.</p>
            </div>

          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Eden Partnership</a></li>
              <li><a href="#">Client</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Address</h4>
            <div className='footer-row'>
              <img className="search-icon" src={images.subway_location} />
              <p className="footer-address">
                123 Green Lane<br />
                Sustainable City, EC01 9XX<br />
                United Kingdom
              </p>
            </div>

          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Me</h4>

            <div>
              <div className='footer-row'>
                <img className="search-icon" src={images.line_md_phone} />
                <p className="footer-contact">+44 123 456 7890</p>
              </div>
              <div style={{ padding: "0.5rem" }}></div>
              <div className='footer-row'>

                <img className="search-icon" src={images.ic_outline_email} />
                <p className="footer-contact">info@edenutilities.com</p>
              </div>
            </div>



          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © 2025. All Rights Reserved
          </p>
          <div className="socials">
            <span className="follow-text">Follow Us:</span>
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App
