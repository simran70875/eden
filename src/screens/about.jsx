import React from 'react';
import "../components/stylesheets/about.css";
import "../components/stylesheets/aboutResponsive.css";
import images from '../components/theme/imagesPath';
import Header from '../components/other/header';
import Btn from '../components/other/btn';
import { BiPlayCircle } from 'react-icons/bi';
import { BsFilePlayFill, BsPlayFill } from 'react-icons/bs';
import { IoPlayForwardCircle } from 'react-icons/io5';
import { FaCirclePlay } from 'react-icons/fa6';

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
                    <p className="long-content text-start">Eden Utilities pride itself on working in
                        partnership with all clients, to ensure that
                        they are receiving not only the best price
                        from their utilities suppliers, but also the
                        best value
                    </p>
                    <p className="long-content text-blue pb-4">Read More..</p>
                    <Btn rightIcon>Speak to an expert</Btn>
                </div>

                <div class="circle">
                    <svg stroke="#2f98d0" stroke-width="0.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,100 A100,100 0 0,1 100,0 L100,100 Z" fill="white" />
                    </svg>
                </div>

            </div>



            <div id='csr' className='container-fluid p-0'>
                {/* <div className="content-width px-4 px-md-4">
                    <div className="title text-start">PARTNERSHIP WITH ALL CLIENTS
                    </div>
                    <p className="long-content text-start">Eden Utilities pride itself on working in
                        partnership with all clients, to ensure that
                        they are receiving not only the best price
                        from their utilities suppliers, but also the
                        best value
                    </p>
                    <p className="long-content text-blue pb-4">Read More..</p>
                    <Btn rightIcon>Speak to an expert</Btn>
                </div> */}

                <div class="circle">
                    <svg stroke="#2f98d0" stroke-width="0.1" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,100 A100,100 0 0,1 100,0 L100,100 Z" fill="white" />
                    </svg>
                </div>

            </div>


        </div>
    )
}

export default About