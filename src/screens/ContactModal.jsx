import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import "../components/stylesheets/contact.css";
import images from "../components/theme/imagesPath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsClock } from "react-icons/bs";
import { BiCalendar, BiVideoRecording } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";


const ContactModal = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const steps = [
        { title: "Step 1", content: "Enter your name" },
        { title: "Step 2", content: "Enter your email" },
        { title: "Step 3", content: "Write your message" },
        { title: "Step 4", content: "Review & Submit" },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        "Billing & Payments",
        "Switching Energy Suppliers",
        "Energy Efficiency Advice",
        "Renewable Energy Options",
        "Account Management",
        "Other.."
    ];

    const toggleOption = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        );
    };

    const [step, setStep] = useState(0);

    if (!isOpen) return null;

    const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains("custom-backdrop")) {
            onClose();
            setStep(0);
        }
    };


    return createPortal(
        <div
            className="modal fade show contact-backdrop p-0 p-md-5"
            onClick={handleBackdropClick}
            style={{

                zIndex: 1050
            }}>
            <div className="modal-dialog modal-dialog-centered modal-fullscreen" style={{
                width: "80%", maxWidth: "100%",
            }}>
                <div className="modal-content shadow rounded-4 modal-blur p-3 p-md-5">
                    <div className="d-flex justify-content-between">
                        <div className="model-header-title-width">
                            <h1 className="top-title">
                                SPEAK WITH AN <span>EDEN EXPERT </span>!
                            </h1>
                            <p className="long-content">
                                We'll listen to your challenges and goals, show you the content and features you
                                might need, and see if Eden is the right solution for your organization!
                            </p>
                        </div>

                        <FaTimes
                            className="text-dark fs-5 cursor-pointer"
                            onClick={onClose}
                            style={{ cursor: "pointer", marginLeft: "1rem" }}
                        />
                    </div>

                    <div className="modal-body">

                        {step === 0 ? (
                            <div className="d-flex flex-column gap-2">
                                {options.map((option) => {
                                    const isChecked = selectedOptions.includes(option);
                                    return (
                                        <label key={option} className="image-checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => toggleOption(option)}
                                            />
                                            <div className={`checkbox-image ${isChecked ? "checked" : ""}`}></div>
                                            <span>{option}</span>
                                        </label>
                                    );
                                })}
                            </div>

                        ) : step === 1 ? (

                            <div className="bg-light row border m-0 form-height-modal">
                                <div className="col-md-1 d-flex align-items-center justify-content-center">
                                    <div className="text-vertical-box">
                                        <img src={images.checked} alt="Checked" />
                                        <p className="long-content vertical-text">Switching Energy Suppliers</p>
                                    </div>

                                </div>

                                <div className="col-md-4 border connect p-3">
                                    <div>
                                        <p className="text-muted">Eden Expert</p>
                                        <p className="box-title">Let’s connect!</p>
                                        <div className="contactTime d-flex align-items-center my-3">
                                            <BsClock className="clockIcon" />
                                            <p className="contact-time-text mb-0 ms-2">30 min</p>
                                        </div>
                                        <p className="long-content">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et</p>
                                    </div>
                                </div>
                                <div className="col-md-7 border p-1 p-md-3 pb-md-0">
                                    <p className="contact-time-text text-black mb-4 ms-2">Select date & Time</p>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        showTimeSelect
                                        inline
                                        dateFormat="Pp"
                                        calendarClassName="custom-datepicker"
                                    />
                                </div>
                            </div>
                        ) : step === 2 ? (

                            <div className="bg-light row border m-0 form-height-modal">
                                <div className="col-md-4 border-end connect">
                                    <div className="p-2 p-md-4">
                                        <p className="text-muted">Eden Expert</p>
                                        <p className="box-title">Let’s connect!</p>
                                        <div id="contact-selected-slot-details">
                                            <div className="contactTime d-flex align-items-center mt-3 mb-2">
                                                <BsClock className="clockIcon" />
                                                <p className="contact-time-text mb-0 ms-2">30 min</p>
                                            </div>
                                            <div className="contactTime d-flex align-items-center mb-2">
                                                <BiCalendar className="calendarIcon" />
                                                <p className="contact-time-text mb-0 ms-2">10:20am - 11:30am, Thursday April 24, 2025</p>
                                            </div>
                                            <div className="contactTime d-flex align-items-center mb-3">
                                                <RiGlobalLine className="globalIcon" />
                                                <p className="contact-time-text mb-0 ms-2">Abs, London, UK</p>
                                            </div>
                                        </div>

                                        <p className="long-content text-muted">Great news,
                                        </p>
                                        <p className="long-content text-muted"><b>Mike,</b> one of our Eden energy experts, is
                                            available at your selected time
                                        </p>
                                        <p className="long-content text-muted">This means you'll get:</p>
                                    </div>
                                </div>
                                <div className="col-md-8 p-2 p-md-4 pb-md-0">
                                    <p className="contact-time-text text-black mb-4">Enter Details</p>

                                    <form className="row g-4">

                                        {/* Name */}
                                        <div className="col-md-6">
                                            <label className="form-label text-dark">Name</label>
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6">
                                            <label className="form-label text-dark">Email</label>
                                            <input type="email" className="form-control" placeholder="Your Email" />
                                        </div>

                                        {/* Contact Number */}
                                        <div className="col-md-6">
                                            <label className="form-label text-dark">Contact Number</label>
                                            <input type="tel" className="form-control" placeholder="Contact Number" />
                                        </div>

                                        {/* Preferred Meeting Platform */}
                                        <div className="col-md-12">
                                            <label className="form-label text-dark">Preferred Meeting Platform</label>
                                            <div className="d-flex flex-wrap gap-3">
                                                {["Zoom", "Google Meet", "Microsoft Teams", "Phone Call"].map((method) => (
                                                    <label key={method} className="form-check d-flex align-items-center gap-2">
                                                        <input type="checkbox" className="form-check-input" />
                                                        <span className="form-check-label">{method}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message Box */}
                                        <div className="col-md-12">
                                            <label className="form-label text-dark">Plase share </label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                placeholder="Write your message or details here..."
                                            />
                                        </div>

                                    </form>

                                </div>

                            </div>


                        ) : <>
                            <div className="bg-light row border m-0 form-height-modal">

                                <div className="col-md-12 p-4 pb-0">
                                    <div className="d-flex align-items-center pb-3 pb-md-0 justify-content-center">
                                        <img src={images.checked} alt="Checked" />
                                        <p className="top-title ms-1 ms-md-2 text-center">You are scheduled</p>
                                    </div>

                                    <p className="long-content text-black text-center">
                                        A calendar invitation has been sent to your email address.
                                    </p>
                                    <div className=" d-flex align-items-center justify-content-center">
                                        <div className="success-messege border rounded px-3 py-1">
                                            <p className="text-muted">Eden Expert</p>
                                            <p className="box-title">Let’s connect!</p>
                                            <div id="contact-selected-slot-details">
                                                <div className="contactTime d-flex align-items-center mt-3 mb-2">
                                                    <BsClock className="clockIcon2" />
                                                    <p className="contact-time-text mb-0 ms-2">30 min</p>
                                                </div>
                                                <div className="contactTime d-flex align-items-center mb-2">
                                                    <BiCalendar className="calendarIcon2" />
                                                    <p className="contact-time-text mb-0 ms-2">10:20am - 11:30am, Thursday April 24, 2025</p>
                                                </div>
                                                <div className="contactTime d-flex align-items-center mb-2">
                                                    <RiGlobalLine className="globalIcon2" />
                                                    <p className="contact-time-text mb-0 ms-2">Abs, London, UK</p>
                                                </div>
                                                <div className="contactTime d-flex align-items-center mb-3">
                                                    <BiVideoRecording className="videoIcon2" />
                                                    <p className="contact-time-text mb-0 ms-2">Web conferencing details to follow</p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <p className="long-content text-black text-center">
                                        Join our newsletter
                                    </p>

                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="position-relative w-100 newsletter" style={{ maxWidth: "400px" }}>
                                            <input
                                                type="text"
                                                className="form-control  pe-5"
                                                placeholder="Your Email"
                                            />
                                            <FaPaperPlane className="position-absolute newsletterIcon" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>}

                    </div>

                    <div className="d-flex justify-content-between px-4 py-3">
                        <button
                            className="btn btn-secondary"
                            onClick={prevStep}
                            disabled={step === 0}
                        >
                            Back
                        </button>
                        {step === 2 ? <button className="btn btn-primary" onClick={nextStep}>
                            Schedule Event
                        </button> : step < steps.length - 1 ? (
                            <button className="btn btn-primary" onClick={nextStep}>
                                Next
                            </button>
                        ) : (
                            <button
                                className="btn btn-success"
                                onClick={onClose}
                            >
                                Done
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ContactModal;
