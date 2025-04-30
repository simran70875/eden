import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import images from "../components/theme/imagesPath";

const testimonials = [
    {
        image: images.profile2,
        name: "Liza Williams",
        role: "CMO",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        image: images.profile2,
        name: "John Doe",
        role: "CTO",
        text: "It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
        image: images.profile2,
        name: "Emma Brown",
        role: "Marketing Head",
        text: "Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
    },
    {
        image: images.profile2,
        name: "Oliver Smith",
        role: "Designer",
        text: "More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        image: images.profile2,
        name: "Sophia Johnson",
        role: "Product Manager",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
];


export default function TestimonialsSection() {
    return (
        <div className="container-fluid p-md-5 my-5" id="testimonials">
            <div className="row align-items-center">

                {/* Left Side - Content */}
                <div className="col-md-6 col-lg-4 left-side">
                    <h1 className="fw-bold text-uppercase mb-5">
                        KIND WORDS FROM OUR CLIENTS
                    </h1>
                    <p className="text-black">
                        We won't just be executors. We'll be your partners, we promise.
                        If you're not convinced, check out our verified testimonials
                        from around the world about working with us.
                    </p>

                    <img
                        src={images.grass}
                        alt="grass"
                        className="img-fluid"
                    />
                </div>

                {/* Right Side - Testimonial Card */}
                <div className="col-md-6 col-lg-8 d-flex justify-content-center align-items-center position-relative">
                    <div id="circular">
                        <img
                            src={images.infinity_logo_transparent}
                            alt="infinity_logo_transparent"
                            id="infinity-logo-transparent"
                        />
                        <div className="py-5 px-4 px-md-2 py-md-4 position-absolute testimonial1">
                            {/* User Image */}
                            <img
                                src={images.profile2} // replace with your testimonial image
                                alt="User"
                                className="rounded-circle mb-4"

                            />

                            {/* Testimonial Text */}
                            <p className="text-white mb-4">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book."
                            </p>

                            {/* User Name and Role */}
                            <h5 className="fw-bold text-white mb-0">Liza Williams</h5>
                            <small className="text-white">CMO</small>
                        </div>
                        <div className="px-3 py-5 py-md-3 position-absolute testimonial2">
                            {/* User Image */}
                            <img
                                src={images.profile2} // replace with your testimonial image
                                alt="User"
                                className="rounded-circle mb-4"

                            />

                            {/* Testimonial Text */}
                            <p className="text-muted mb-4">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book."
                            </p>

                            {/* User Name and Role */}
                            <h5 className="fw-bold text-dark mb-0">Liza Williams</h5>
                            <small className="text-muted">CMO</small>
                        </div>
                        <div className="px-2 py-3 py-md-3 position-absolute testimonial3">
                            {/* User Image */}
                            <img
                                src={images.profile2} // replace with your testimonial image
                                alt="User"
                                className="rounded-circle mb-4"

                            />

                            {/* Testimonial Text */}
                            <p className="text-muted mb-4">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book."
                            </p>

                            {/* User Name and Role */}
                            <h5 className="fw-bold text-dark mb-0">Liza Williams</h5>
                            <small className="text-muted">CMO</small>
                        </div>
                        <div className="px-2 py-3 py-md-3 position-absolute testimonial4">
                            {/* User Image */}
                            <img
                                src={images.profile2} // replace with your testimonial image
                                alt="User"
                                className="rounded-circle mb-4"

                            />

                            {/* Testimonial Text */}
                            <p className="text-muted mb-4">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book."
                            </p>

                            {/* User Name and Role */}
                            <h5 className="fw-bold text-dark mb-0">Liza Williams</h5>
                            <small className="text-muted">CMO</small>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
}
