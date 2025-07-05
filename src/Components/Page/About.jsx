import React from "react";

import star from '../../assets/star.webp';

import destinationimage1 from '../../../public/Images/Destination-6.webp';
import destinationimage2 from '../../../public/Images/Destination-7.jpeg';
import destinationimage3 from '../../../public/Images/Destination-8.jpg';

import travelIcon1 from '../../assets/travel-icon1.png';
import travelIcon2 from '../../assets/travel-icon2.webp';

import tst1 from '../../assets/tst-1.webp';
import tst2 from '../../assets/tst-2.webp';
import tst3 from '../../assets/tst-3.webp';
import tst4 from '../../assets/tst-4.webp';

import travelexperienceimage1 from '../../assets/experience-image1.jpg';
import travelexperienceimage2 from '../../assets/experience-image2.jpeg';
import travelexperienceimage3 from '../../assets/experience-image3.jpg';
import travelexperienceimage4 from '../../assets/experience-image4.jpg';


import travelplace from '../../assets/experience-image4.jpg';
import placeholder from '../../assets/place-element.webp';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import brandimage1 from '../../assets/brand-image1.webp';
import brandimage2 from '../../assets/brand-image2.webp';
import brandimage3 from '../../assets/brand-image3.webp';
import brandimage4 from '../../assets/brand-image4.webp';
import brandimage5 from '../../assets/brand-image5.webp';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-cards';
import { EffectCards } from "swiper/modules";


import { Link } from "react-router-dom";

function About() {
    return (
        <>
            {/* Page Section */}
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>About</h2>
                        <ul>
                            <li className="pe-2">
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                About
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Top Destination Section */}
            <section className="top-destination py-5 my-5">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-12 text-center">
                            <div className="section-title top-destination-title">
                                <div className="text-center d-flex align-items-center justify-content-center gap-3">
                                    <img src={star} alt="star-image" className="img-fluid" />
                                    <h3 className="m-0">
                                        Get To Know Us
                                    </h3>
                                </div>
                                <h2>Trusted Crane Solutions Across India</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="top-destination-item  w-100">
                                <div className="top-destination-image position-relative">
                                    <img src={destinationimage1} alt="destination-image" />
                                    <div className="top-destination-icons">
                                        <i className="bi bi-play"></i>
                                        <i className="bi bi-link-45deg"></i>
                                    </div>
                                </div>
                                <div className="top-destination-content">
                                    <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                                        <h3 className="dst-title fw-bolder fs-4 m-0">Crawler Crane 90T</h3>
                                        <span className="fs-bold fs-4 m-0">₹45,000/day</span>
                                    </div>
                                    <div className="trip-time fs-5">
                                        <i className="fa-solid fa-loaction-arrow pe-1"></i>
                                        Available: 3 Days Min
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="top-destination-item  w-100">
                                <div className="top-destination-image position-relative">
                                    <img src={destinationimage2} alt="destination-image" />
                                    <div className="top-destination-icons">
                                        <i className="bi bi-play"></i>
                                        <i className="bi bi-link-45deg"></i>
                                    </div>
                                </div>
                                <div className="top-destination-content">
                                    <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                                        <h3 className="dst-title fw-bolder fs-4 m-0" style={{ fontWeight: '800' }}>Hydraulic Crane 50T</h3>
                                        <span className="fs-4" >₹32,000/day</span>
                                    </div>
                                    <div className="trip-time fs-5">
                                        <i className="fa-solid fa-loaction-arrow pe-1"></i>
                                        Available: 2 Days Min
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="top-destination-item  w-100">
                                <div className="top-destination-image position-relative">
                                    <img src={destinationimage3} alt="destination-image" />
                                    <div className="top-destination-icons">
                                        <i className="bi bi-play"></i>
                                        <i className="bi bi-link-45deg"></i>
                                    </div>
                                </div>
                                <div className="top-destination-content">
                                    <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                                        <h3 className="dst-title fw-bolder fs-4 m-0" style={{ fontWeight: '800' }}>Tower Crane</h3>
                                        <span className="fs-4">₹60,000/day</span>
                                    </div>
                                    <div className="trip-time fs-5">
                                        <i className="fa-solid fa-loaction-arrow pe-1"></i>
                                        Available: 5 Days Min
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* travel experience */}
            <section className="travel-experience my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="section-title travel-destination-title">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <img src={star} alt="star-image" className="img-fluid" />
                                    <h3 className="m-0">About Our Services</h3>
                                </div>
                                <h2>Get Reliable Crane Rental Solutions</h2>
                                <ul className="list-unstyled pt-4">
                                    <li className="d-flex align-items-center gap-3 pb-4">
                                        <img src={travelIcon1} alt="travel-icon" width={50} height={50} />
                                        <div>
                                            <h4>Certified Equipment</h4>
                                            <p>
                                                We provide only certified cranes and lifting solutions.<br />
                                                Assuring safety, reliability, and efficiency on every job site.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center gap-3 pb-4">
                                        <img src={travelIcon2} alt="travel-icon" width={50} height={50} />
                                        <div>
                                            <h4>Expert Support</h4>
                                            <p>
                                                Our team assists you with setup, operation, and maintenance.
                                                <br />24/7 support to keep your project running smoothly.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="travel-experience-btn d-flex flex-column flex-sm-row align-items-center gap-3 mt-4">
                                    <button className="btn custome-btn2">
                                        <a href="#">Find out more</a>
                                    </button>

                                    <div className="travel-experience-user d-flex  align-items-center ps-sm-4">
                                        <img src={tst1} alt="user" />
                                        <img src={tst2} alt="user" />
                                        <img src={tst3} alt="user" />
                                        <img src={tst4} alt="user" />
                                        <span className="ms-2">50+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-sm-6 col-12 mb-3">
                                    <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                                        <img src={travelexperienceimage1} alt="America" className="img-fluid w-100" />
                                        <span className="position-absolute bottom-0 start-0 p-2 text-white">Delhi</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 mb-3">
                                    <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                                        <img src={travelexperienceimage3} alt="Africa" className="img-fluid w-100" />
                                        <span className="position-absolute bottom-0 start-0 p-2 text-white">Banglore</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 mb-3">
                                    <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                                        <img src={travelexperienceimage2} alt="Asia" className="img-fluid w-100" />
                                        <span className="position-absolute bottom-0 start-0 p-2 text-white">Mumbai</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-12 mb-3">
                                    <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                                        <img src={travelexperienceimage4} alt="Europe" className="img-fluid w-100" />
                                        <span className="position-absolute bottom-0 start-0 p-2 text-white">Hydrabad</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* travel places */}
            <section className="travel-places my-5 py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="section-title travel-places-title">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <img src={star} alt="star-image" className="img-fluid" />
                                    <h3 className="m-0">Get To Know Us</h3>
                                </div>
                                <h2>Reliable Crane Solutions for <br />
                                    Your Projects & <br />
                                    Heavy Lifting Needs</h2>

                                <div className="travel-experience-image mt-4">
                                    <div className="travel-experience-user d-flex align-items-center pb-2">
                                        <img src={tst1} alt="user" />
                                        <img src={tst2} alt="user" />
                                        <img src={tst3} alt="user" />
                                        <img src={tst4} alt="user" />
                                        <span className="ms-2">50+</span>
                                    </div>
                                    <p style={{ fontWeight: '700', fontSize: '1.3rem' }}>500k+ Happy Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <div className="row align-items-center gy-4">
                                <div className="col-lg-6">
                                    <div className="travel-places-image">
                                        <img src={travelplace} alt="travel-place" className="img-fluid object-fit-cover" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="travel-places-info">
                                        <h4>Waiting for Adventures? Don't miss them</h4>
                                        <p>
                                            We don't just work with concerete and steel.
                                            We are Approachable, with even our highest
                                            concretre and steel. we work with people
                                        </p>

                                        <div className="place-text d-flex gap-3 align-items-center shadow p-3 rounded-4 mt-3">
                                            <img src={placeholder} alt="place" width='50' height='50' />
                                            <h6>We Have More than 10+ years of exeperience</h6>
                                        </div>

                                        <ul className="list-unstyled pt-3 travel-place-ul">
                                            <li className="pb-3"><i className="fa-solid fa-check me-2"></i>Generation Technology</li>
                                            <li className="pb-3"><i className="fa-solid fa-check me-2"></i>Generation Technology</li>
                                            <li className="pb-3"><i className="fa-solid fa-check me-2"></i>Audio Performance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* business-banner */}
            <section className="business-banner my-5" style={{ backgroundColor: '#f7ffc4' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center mb-5">
                                <h2>Trusted By Local Businesses</h2>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5">
                            <Splide className="banner-splide"
                                options={{
                                    perPage: 5,
                                    loop: true,
                                    type: 'loop',
                                    gap: "1rem",
                                    pagination: false,
                                    arrows: false,
                                    breakpoits: {
                                        1200: { perPage: 4 },
                                        992: { perPage: 3 },
                                        768: { perPage: 2 },
                                        570: { perPage: 1 },
                                    }
                                }}
                            >
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage1} alt="brand-image" className="im-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage2} alt="brand-image" className="im-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage3} alt="brand-image" className="im-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage4} alt="brand-image" className="im-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage5} alt="brand-image" className="im-fluid" />
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>

            </section>

            {/* Reviews */}
            <section className="reviews my-5 py-5 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <div className="section-title travel-places-title">
                                <div className="d-flex align-items-center gap-3">
                                    <img src={star} alt="star-image" className="img-fluid" />
                                    <h3 className="m-0">Client Testimonials</h3>
                                </div>
                                <h2 className="m-0 p-0">What Our Clients Say About Us</h2>
                                <p className="py-3 text-start">
                                    From large construction sites to precision lifting projects, our clients trust us for reliable crane services, professional operators, and on-time delivery. We don’t just lift — we elevate your expectations.
                                </p>
                                <button className="btn custome-btn2">
                                        <a href="#">Find out more</a>
                                    </button>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                loop={true}
                                autoplay={true}
                                modules={[EffectCards]}
                                className="ab-tst-swiper"
                            >
                                <SwiperSlide>
                                    <div className="ab-tst-item w-100">
                                        <img src={tst2} alt="ab-tst-image" />
                                        <p className="fs-5 mb-5">
                                            We don't just work with concerete and steel. We are Approachable, with even our highest concretre and steel. we work with people
                                        </p>
                                        <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                                            <div>
                                                <h3>Hamz Khan</h3>
                                                <span>Fementum Odio Co.</span>
                                            </div>
                                            <div className="ab-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="ab-tst-item w-100">
                                        <img src={tst4} alt="ab-tst-image" />
                                        <p className="fs-5 mb-5">
                                            We don't just work with concerete and steel. We are Approachable, with even our highest concretre and steel. we work with people
                                        </p>
                                        <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                                            <div>
                                                <h3>Ishin Korma</h3>
                                                <span>Fementum Odio Co.</span>
                                            </div>
                                            <div className="ab-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="ab-tst-item w-100">
                                        <img src={tst1} alt="ab-tst-image" />
                                        <p className="fs-5 mb-5">
                                            We don't just work with concerete and steel. We are Approachable, with even our highest concretre and steel. we work with people
                                        </p>
                                        <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                                            <div>
                                                <h3>Victoria Wotton</h3>
                                                <span>Fementum Odio Co.</span>
                                            </div>
                                            <div className="ab-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="ab-tst-item w-100">
                                        <img src={tst3} alt="ab-tst-image" />
                                        <p className="fs-5 mb-5">
                                            We don't just work with concerete and steel. We are Approachable, with even our highest concretre and steel. we work with people
                                        </p>
                                        <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                                            <div>
                                                <h3>Wastson Karm</h3>
                                                <span>Fementum Odio Co.</span>
                                            </div>
                                            <div className="ab-star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>

                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About