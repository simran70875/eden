import React from 'react';
import "../components/stylesheets/about.css";
import "../components/stylesheets/aboutResponsive.css";
import images from '../components/theme/imagesPath';
import Header from '../components/other/header';
import Btn from '../components/other/btn';
import { FaCirclePlay } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const posts = [
    {
        image: images.post1,
        title: "CLIMATE CRISIS AND RISING COASTLINES",
        description: "Rising sea levels are threatening coastal communities across the globe, displacing thousands and endangering critical infrastructure. In early 2025, parts of Miami and Jakarta reported record-breaking floods, sparking renewed debate on climate adaptation and resilience strategies.",
        link: "#"
    },
    {
        image: images.post2,
        title: "CONFLUENCE OF FIRE AND PEOPLE",
        description: "Governments worldwide are racing to draft AI regulations. In 2025, the EU passed sweeping laws requiring transparency in algorithmic decision-making, as concerns grow over job displacement and misinformation driven by generative models.",
        link: "#"
    },
    {
        image: images.post3,
        title: "SPACE TOURISM TAKES OFF",
        description: "Private space travel entered a new era as three commercial flights carried civilians to low Earth orbit in Q1 2025. While hailed as a milestone, critics question its environmental cost and exclusivity.",
        link: "#"
    },
    {
        image: images.post1,
        title: "CONFLUENCE OF FIRE AND PEOPLE",
        description: "On 7 January 2025, wildfires began in the Los Angeles (LA) area, two of which became the second and third most destructive in California history. As of 28 January 2025, the Eaton and Palisades Fires were nearly fully contained.",
        link: "#"
    },
    {
        image: images.post2,
        title: "URBAN GREENING INITIATIVES EXPAND",
        description: "Cities like Singapore, Paris, and Toronto are doubling down on urban greening, turning rooftops into gardens and highways into green corridors. Experts say these efforts are key to heat resilience and air quality improvement.",
        link: "#"
    },
    {
        image: images.post3,
        title: "THE RISE OF MICRO-MOBILITY",
        description: "Electric scooters, bikes, and compact EVs are reshaping urban transit. In 2025, micro-mobility usage surged 40% in major cities, reducing congestion while prompting new infrastructure policies.",
        link: "#"
    },
    {
        image: images.post1,
        title: "WATER SCARCITY HITS CRISIS LEVELS",
        description: "Prolonged droughts across southern Africa and parts of India have intensified water scarcity concerns. Relief efforts are underway, but experts warn that sustainable water management must be prioritized globally.",
        link: "#"
    }
];



const About = () => {
    return (
        <div id='aboutPage'>
            <div id="about-header">
                <img src={images.logo} alt="logo" className="logo" />
                <Header navItemStyle={{ color: "#000" }} />
            </div>

            <section id="hero-about" className="container-fluid p-0">
                <div className="row p-0">
                    <div className="col-12 col-md-6 p-0 d-flex align-items-end justify-content-start written-img">
                        <img className='img-fluid' src={images.writtenImg} alt="written image" />
                    </div>
                    <div className="col-12 col-md-6 p-0 lines-img position-relative">
                        <img className='img-fluid' src={images.lines} alt="written image" />
                    </div>
                </div>

                <div className="hero-overlay"></div>
            </section>

            <section id="about-page-content" className="container-fluid p-0">
                <div className="row p-0">
                    <div className="col-12 col-md-6 p-0 p-md-5">
                        <div className="content-width px-4 px-md-5">
                            <div className="title text-start">OUR STORY WRITTEN
                                BY PAUL’S VISION ...
                            </div>
                            <div className="long-content">Mark's experience has been the essential pillar
                                in building Eden Utilities products, whilst his
                                ethos determined the company's.
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="person-info">
                            <img className="founder" alt="founder" src={images.founder} />
                            <p className="name">Mark chipol</p>
                            <p className="designation">Founder & MD</p>
                        </div>


                        <div id="features2">
                            <div className="supplier-card">
                                <div className="supplier-percentage">84%</div>
                                <div className="supplier-label text-muted">Supplier Engaged</div>
                            </div>
                            <div className="supplier-card">
                                <div className="supplier-percentage">96%</div>
                                <div className="supplier-label text-muted">Satisfaction</div>
                            </div>
                            <div className="supplier-card">
                                <div className="supplier-percentage">65%</div>
                                <div className="supplier-label text-muted">Fixed Products</div>
                            </div>
                            <div className="supplier-card">
                                <div className="supplier-percentage">65%</div>
                                <div className="supplier-label text-muted">Fixed Products</div>
                            </div>
                            <div className="supplier-card mb-0">
                                <div className="supplier-percentage">65%</div>
                                <div className="supplier-label text-muted">Retention</div>
                            </div>
                        </div>

                        <div id="features3">
                            <div className='mt-5'>
                                <p className="title text-start text-muted">2.12 billion
                                </p>
                                <p className="mb-0 text-muted">Mark's experience has been the essential pillar
                                    in building Eden Utilities products, whilst his
                                    ethos determined the company's.
                                </p>
                            </div>

                            <div className='mt-5'>
                                <p className="title text-start text-muted">less than 20%
                                </p>
                                <p className="mb-0 text-muted">Mark's experience has been
                                </p>
                            </div>

                        </div>

                    </div>
                </div>


                <div id="utility-experts">
                    <div className="content-width px-4 px-md-4">
                        <div className="title text-start">Looking for
                            Utility Experts?
                        </div>
                        <p className="long-content">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore.
                        </p>
                        <p className="long-content">See how your business benefit</p>
                        <Btn rightIcon>Speak to an expert</Btn>
                    </div>
                    <div id="features">
                        <div>
                            <p>Eco-friendly</p>
                            <p>Renewable</p>
                            <p>Zero-waste</p>
                            <p>Green</p>
                            <p>Carbon-neutra</p>
                            <p>Energy-efficient</p>
                        </div>


                    </div>
                </div>

                <img src={images.shape} id='shape' alt="shape" />
                <div id="video-section">

                    <img src={images.outer_video_image} alt="outer_video_image" className='outer-video-img' />
                    <img src={images.inner_video_image} alt="inner_video_image" className='inner-video-img img-fluid' />
                    <div id="play-btn">
                        <FaCirclePlay />
                    </div>
                </div>

            </section>

            <div id='partnership' className='container-fluid p-0'>
                <div className="content-width px-4 px-md-4">
                    <div className="title text-start">PARTNERSHIP WITH ALL CLIENTS
                    </div>
                    <p className="long-content text-black text-start">Eden Utilities pride itself on working in
                        partnership with all clients, to ensure that
                        they are receiving not only the best price
                        from their utilities suppliers, but also the
                        best value
                    </p>
                    <p className="long-content text-blue pb-4">Read More..</p>
                    <Btn rightIcon>Speak to an expert</Btn>
                </div>

                <div class="circle">
                    <svg stroke="#2f98d0" stroke-width="2" viewBox="0 0 1400 1400" preserveAspectRatio="none">
                        <path d="M180,1400 C-430,380 700,-250 1400,265 L1400,1400 Z" fill="#fff" />
                    </svg>
                </div>
            </div>

            <div id='csr' className='container-fluid p-0 pt-5'>
                <div className="content-width px-4 px-md-4">
                    <div>
                        <div className="title text-start">CSR INITIATIVES</div>
                        <p className="long-content text-black text-start mb-5">We won't just be executors. We'll be your partners, we
                            promise. If you're not convinced, check out our
                            verified testimonials from around the world about
                            working with us.
                        </p>

                        <div className="d-flex align-items-center csr-features">
                            <div className='feature d-flex'>
                                <img src={images.secure} className='security-icon' alt="security policy icon" />
                                <div>
                                    <h5 className="text-black text-start m-0 mb-2">Pollution of Soil</h5>
                                    <p className="text-black text-start">Waste can leak
                                        hazardous chemicals
                                        into the soil and from
                                        there into our food
                                    </p>
                                </div>
                            </div>
                            <div className='feature d-flex ps-5'>
                                <img src={images.secure} className='security-icon' alt="security policy icon" />
                                <div>
                                    <h5 className="text-black text-start m-0 mb-2">Pollution of Soil</h5>
                                    <p className="text-black text-start">Waste can leak
                                        hazardous chemicals
                                        into the soil and from
                                        there into our food
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="long-content text-end text-blue pb-4 pe-5">Read More..</p>
                    </div>

                    <div className="title title2 text-start">LET’S MAKE<br></br> SOMETHING</div>
                </div>

                <img src={images.leaf2} className='leaf2' alt="security policy icon" />

                <div class="circle">
                    <svg stroke="#2f98d0" stroke-width="20" viewBox="0 0 20000 20000" preserveAspectRatio="none">
                        <path d="M2500,20000 C-6200,6000 10000,-5000 20000,4000 L20000,20000 Z" fill="#fff" />
                    </svg>
                </div>
            </div>


            <div id="posts" className="container-fluid px-5">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 5 }
                    }}
                    className="posts-swiper"
                >
                    {posts.map((post, index) => (
                        <SwiperSlide key={index}>
                            <div className="post-card p-3 bg-white h-100">
                                <img src={post.image} alt={post.title} className="w-100 mb-3" />
                                <h6 className='my-3'>{post.title}</h6>
                                <p className="post-description">{post.description}</p>
                                <div className="text-end">
                                    <a href={post.link}>
                                        Read More...
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Btn rightIcon>Speak to an expert</Btn>
            </div>


            <div id="vision">
                <img src={images.tree} className='tree' alt="tree" />
                <div className='outer-box'>
                    <div className='inner-box'>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={10}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 1 }
                            }}
                            className="vision-swiper"
                        >
                            {/* {posts.map((post, index) => (
                                <SwiperSlide key={index}>
                                    <div className="vision-card p-3 h-100">
                                        <h6 className='my-3'>{post.title}</h6>
                                        <p className="v-description">{post.description}</p>

                                    </div>
                                </SwiperSlide>
                            ))} */}
                        </Swiper>
                    </div>
                    <img src={images.person} className='person' alt="person" />
                </div>

            </div>
        </div>
    )
}

export default About