import React from "react";
import Header from "../components/other/header";
import Footer from "../components/other/footer";
import Brands from "../components/pages/brands";
import { FaShareAlt, FaFacebookF, FaTwitter } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "../insights.css";
import images from "../components/theme/imagesPath";
import Btn from "../components/other/btn";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
import TestimonialsSection from "./testimonialsSection";


const blogPosts = [
  {
    id: 1,
    title: "IMPACTS OF AGRISOLAR CO-LOCATION ON THE FOOD.",
    sub_title: "Climate change threatens our finite food resources.",
    content:
      "Understanding how solar PV installations affect the landscape and its critical resources is crucial to achieve sustainable net-zero energy production. We investigate the consequences of converting agricultural fields to solar photovoltaic installations, known as ‘agrisolar’ co-location.",
    image: images.post1,
    author: "Jane Smith",
    authorImage: images.profile,
    date: "April 25, 2025",
  },
  {
    id: 2,
    title: "Revolutionizing Renewable Energy Through Innovation",
    sub_title: "The future of clean energy depends on breakthroughs.",
    content:
      "Advancements in renewable technologies like wind, solar, and hydrogen storage are driving a new era of sustainable growth. Industry leaders are investing heavily to meet the increasing global energy demand.",
    image: images.post2,
    author: "David Johnson",
    authorImage: images.profile,
    date: "April 20, 2025",
  },
  {
    id: 3,
    title: "How Urban Farming Can Feed Cities",
    sub_title: "Growing food closer to where people live.",
    content:
      "Urban farming initiatives are transforming rooftops and abandoned lots into productive food gardens. This movement not only supports local food production but also reduces carbon footprints.",
    image: images.post3,
    author: "Emily Davis",
    authorImage: images.profile,
    date: "April 18, 2025",
  },
];

const SideblogPosts = [
  {
    id: 1,
    title: "Global Hydrogen Demand and Challenges",
    content:
      "Meeting global hydrogen demand requires innovative zero-carbon processes and sustainable market strategies.",
    image: images.post1,
  },
  {
    id: 2,
    title: "Future of Renewable Energy Markets",
    content:
      "Exploring the expanding opportunities and challenges in renewable energy industries worldwide.",
    image: images.post2,
  },
  {
    id: 3,
    title: "Building Smart Cities for Tomorrow",
    content:
      "Technology-driven smart cities are reshaping urban landscapes with AI and IoT solutions.",
    image: images.post3,
  },
  {
    id: 4,
    title: "Advances in Sustainable Construction Methods",
    content:
      "New eco-friendly construction techniques are helping reduce the carbon footprint of cities.",
    image: images.post4,
  },
  {
    id: 5,
    title: "Hydrogen Fuel: Powering the Future",
    content:
      "Hydrogen energy is becoming a leading solution in the pursuit of zero-emission transportation.",
    image: images.post5,
  },
  {
    id: 6,
    title: "AI Innovations Shaping Modern Industry",
    content:
      "Artificial intelligence continues to transform industries from healthcare to automotive sectors rapidly.",
    image: images.post3,
  },
  {
    id: 7,
    title: "Climate Change and Business Strategies",
    content:
      "Businesses worldwide are adapting their strategies to address urgent climate change realities.",
    image: images.post4,
  },
  {
    id: 8,
    title: "Unlocking Efficiency Through Automation",
    content:
      "Automation technologies are unlocking new efficiencies and revolutionizing traditional manufacturing workflows.",
    image: images.post5,
  },
  {
    id: 9,
    title: "Next Generation Battery Storage Systems",
    content:
      "Innovations in battery technology are crucial for the transition to renewable energy systems.",
    image: images.post3,
  },
  {
    id: 10,
    title: "Green Hydrogen: A Clean Energy Solution",
    content:
      "Green hydrogen offers a promising clean energy solution for multiple industries and sectors globally.",
    image: images.post5,
  },
];

const LatestblogPosts = [
  {
    id: 1,
    title: "Harnessing Solar Innovations for a Greener Future",
    content: "Discover how the latest advancements in solar technology are driving sustainable energy solutions worldwide.",
    image: images.post1,
  },
  {
    id: 2,
    title: "Wind Energy Expansion Across Coastal Regions",
    content: "New wind farms are rapidly developing across coastlines, providing clean energy to millions of homes.",
    image: images.post2,
  },
  {
    id: 3,
    title: "Hydrogen Fuel: The Next Big Step in Clean Energy",
    content: "Hydrogen is emerging as a key player in the clean energy transition, promising lower emissions for transportation.",
    image: images.post3,
  },
  {
    id: 4,
    title: "Community Solar Projects Empower Local Areas",
    content: "Shared solar installations are helping small communities benefit from renewable energy without high upfront costs.",
    image: images.post2,
  },

];


const Insights = () => {
  return (
    <div id="insights">
      <div id="insights-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header
          navItemStyle={{ color: "#000" }}
        />
      </div>

      <section id="hero-blog" className="img-fluid">
        <div className="top-curve">
          <svg
            viewBox="0 0 1440 1200"
            xmlns="http://www.w3.org/2000/svg"
            className="top-curve-svg"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0, 50 C500, 1000 1000, 300 1440, 1200 L1440, 0 L0, 0 Z"
            />
          </svg>

          <div className="px-md-5 d-flex flex-column justify-content-center align-items-end h-70vh m-5">
            <div id="edenText" className="text-center text-md-end p-0">
              <h1 className="edenText-title">
                <span className="w-wrapper">
                  <span className="w-letter">W</span>e{" "}
                  <span className="a-wrapper">
                    <span className="a-letter">a</span>re
                  </span>
                  <span className="eden-highlight">
                    <span className="d-wrapper">
                      {" "}E<span className="d-letter">d</span>en.
                    </span>
                  </span>
                </span>
              </h1>
              <p className="edenText-subtext me-4">
                LOWER COST - MORE EFFICIENT - BETTER INFORMED
              </p>
            </div>
            <div className="me-4 mt-3 btn-hero">
              <Btn rightIcon>Talk to an Expert</Btn>
            </div>
          </div>
        </div>

        <div className="hero-insight">
          <div id="about-title">
            EXPLORE THE<br></br>
            EXPERT INSIGHTS
          </div>
          <p className="long-content mb-4">
            PROTECTING FUTURE..
          </p>

          <img className="img-fluid tree-insight" src={images.tree_insight} />
          <div id="swiper-insights">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              {
                blogPosts?.map((item) => {
                  return <SwiperSlide className="hero-insights-content p-4" key={item.id}>

                    <div className="box-content">
                      <h3 className={"box-title"}>
                        {item.title}
                      </h3>
                      <p className="long-content">
                        {item.content}
                      </p>
                      {/* Small Read More link */}
                      <Link to={""} className="read-more-link">
                        Read More...
                      </Link>

                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>

        </div>
      </section>

      {/* <div className="p-5"></div> */}

      <div className="container-fluid p-md-5">
        <div className="row py-5 py-sm-0">
          {/* Left Side - Blogs */}
          <div className="col-lg-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="card mb-4 pb-4 border-bottom">

                {/* Title and Subtitle */}
                <div className="card-header bg-transparent border-0 p-0 mb-3">
                  <h2 className="text-uppercase fw-bold text-black mb-1">{post.title}</h2>
                  <h6 className="text-muted small mb-2">{post.sub_title}</h6>
                </div>

                {/* Content */}
                <div className="card-body p-0">
                  <p className="card-text mb-3">{post.content}</p>

                  {/* Image */}
                  <img
                    src={post.image}
                    className="img-fluid rounded mb-3"
                    alt={post.title}
                  />

                  {/* Bottom Section */}
                  <div className="d-flex  justify-content-between align-items-center mt-3 gap-3">
                    {/* Author Details */}
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
                      />
                      <div>
                        <small className="text-muted d-block">By {post.author}</small>
                        <small className="text-muted">{post.date}</small>
                      </div>
                    </div>

                    <div className="d-flex gap-1 gap-sm-3">
                      {/* Share */}
                      <div className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm" style={{ borderColor: "#ddd" }}>
                        <div className="pe-2 me-2 border-end d-none d-sm-block" style={{ borderColor: "#ddd" }}>
                          <FaShareAlt />
                        </div>
                        <div className="d-sm-none">
                          <FaShareAlt />
                        </div>
                        <span className="d-none d-sm-inline">Share</span>
                      </div>

                      {/* Facebook */}
                      <div className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm" style={{ borderColor: "#ddd" }}>
                        <div className="pe-2 me-2 border-end d-none d-sm-block" style={{ borderColor: "#ddd" }}>
                          <FaFacebookF />
                        </div>
                        <div className="d-sm-none">
                          <FaFacebookF />
                        </div>
                        <span className="d-none d-sm-inline">Facebook</span>
                      </div>

                      {/* Twitter */}
                      <div className="d-flex align-items-center gap-2 px-2 px-sm-3 py-1 py-sm-2 border-0 border-sm rounded-0 rounded-sm" style={{ borderColor: "#ddd" }}>
                        <div className="pe-2 me-2 border-end d-none d-sm-block" style={{ borderColor: "#ddd" }}>
                          <FaTwitter />
                        </div>
                        <div className="d-sm-none">
                          <FaTwitter />
                        </div>
                        <span className="d-none d-sm-inline">Twitter</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>


          {/* Right Side - Blog List */}
          <div className="col-lg-4 px-md-5 px-lg-2 sideBar">

            {/* Clean Energy Section */}
            <section className="cleanEnergy">
              <h4 className="mb-4 mx-5 mx-lg-3">Clean Energy</h4>
              <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3">
                {SideblogPosts?.map((post) => (
                  <div key={post.id} className="d-flex mb-4">
                    <div className="flex-grow-1 pe-3">
                      <p className="mb-0">{post.title}</p>
                    </div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-small-image"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* ---- New Blog List Section ---- */}
            <h4 className="mt-5 mb-4 mx-5 mx-lg-3">Latest Articles</h4>
            <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3 latestArticles">
              {LatestblogPosts?.map((post) => (
                <div key={post.id} className="mb-5">

                  {/* Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid rounded mb-3"
                  />

                  {/* Title */}
                  <h6 className="fw-bold">{post.title}</h6>

                  {/* Content */}
                  <p className="text-muted small">{post.content}</p>

                  {/* Read More Button */}
                  <div className="text-end">
                    <button className="btn btn-primary btn-sm">
                      Read More
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>


      <div className="container-fluid px-3 px-sm-4 px-md-5 py-4 py-md-5">
        <div className="row g-4">
          {/* Left Side Image */}
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={images.blog_single}
              alt="Take Action"
              className="img-fluid rounded w-100"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-md-8 px-2 px-sm-3 py-2 py-sm-3 px-md-2 d-flex flex-column justify-content-between">
            <div>
              {/* Main Title */}
              <h1 className="fw-bold text-uppercase mb-4 mb-md-3 fs-4 fs-md-2">
                TAKE ACTION FOR A SUSTAINABLE TOMORROW
              </h1>

              {/* Grid of 4 Points */}
              <div className="row g-4 g-md-3">
                {/* Point 1 */}
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <h5 className="fw-bold text-secondary">Pollution of Soil</h5>
                  <p className="text-muted small">
                    Waste can leak hazardous chemicals into the soil and from there into our food.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <h5 className="fw-bold text-secondary">Water Contamination</h5>
                  <p className="text-muted small">
                    Dumped waste materials often seep into water bodies, harming marine life and ecosystems.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <h5 className="fw-bold text-secondary">Air Quality Degradation</h5>
                  <p className="text-muted small">
                    Burning of waste releases harmful pollutants that degrade air quality and public health.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="col-sm-12 col-md-6 col-lg-5">
                  <h5 className="fw-bold text-secondary">Wildlife Threats</h5>
                  <p className="text-muted small">
                    Improper waste management disrupts wildlife habitats, leading to biodiversity loss.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-4 d-flex flex-wrap align-items-center gap-2">
              <Btn rightIcon>Talk to an Expert</Btn>
            </div>
          </div>
        </div>
      </div>


      <TestimonialsSection />


      <Brands style={{ padding: "15rem 0 0" }} />
      <Footer />
    </div>
  );
};

export default Insights;
