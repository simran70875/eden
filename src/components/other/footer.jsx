import React from 'react'
import {
    FaFacebookF,
    FaLinkedinIn,
    FaXTwitter,
    FaInstagram
} from "react-icons/fa6";
import images from '../theme/imagesPath';

const Footer = () => {
    return (
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
    )
}
export default Footer;