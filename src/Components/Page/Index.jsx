import React from 'react'
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation } from 'swiper/modules';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

//Data
import Destination from './../../Destination.json'

import btnArrow from './../../assets/btn-arrow.svg'
import plane from './../../assets/crane.svg'

import about1 from './../../assets/about-image-1.png'
import about2 from './../../assets/about-image-2.webp'
import checkImg from './../../assets/about-check.svg'
import tst1 from './../../assets/tst-1.webp'
import tst2 from './../../assets/tst-2.webp'
import tst3 from './../../assets/tst-3.webp'
import tst4 from './../../assets/tst-4.webp'
import abElement2 from './../../assets/about-element-2.webp'
import abElement3 from './../../assets/about-element-3.webp'
import DiscoverImg1 from './../../assets/Discover-image-1.jpg'
import DiscoverImg2 from './../../assets/Discover-image-2.jpg'
import DiscoverImg3 from './../../assets/Discover-image-3.jpeg'
import DiscoverImg4 from './../../assets/Discover-image-4.jpg'
import steps1 from './../../assets/steps-1.svg'
import steps2 from './../../assets/steps-2.svg'
import steps3 from './../../assets/crane.svg'
import FeatureImg1 from './../../assets/Feature-image-1.png'
import testBG from './../../assets/test-bg.webp'
import testimn01 from './../../assets/tst-image-1.png'
import testimn02 from './../../assets/tst-3.webp'
import quote from './../../assets/quote-left.png'
import footer from './../../assets/footer.jpg'

function Index() {
    useEffect(() => {
        const testimonial = document.querySelectorAll('.testimonial-img');
        testimonial.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                el.classList.add('hovered');
            });
        });
    }, []);
    return (

        <>
            {/* Hero slider */}
            <Swiper
                modules={[Navigation, EffectFade]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                effect={'fade'}
                navigation={{
                    prevEl: '.swiper-prev',
                    nextEl: '.swiper-next',
                }}
                className='overflow-hidden'
            >
                <SwiperSlide>
                    <div className="hero hero1 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-white">Power Meets Precision</h2>
                            <h1 className="text-white">Crane Rentals</h1>
                            <button className="btn text-white hero-btn mt-5">LEARN MORE <img src={btnArrow} className="img-fluid" alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero hero2 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-white">Power Meets Precision</h2>
                            <h1 className="text-white">Crane Rentals</h1>
                            <button className="btn text-white hero-btn mt-5">LEARN MORE <img src={btnArrow} className="img-fluid" alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero hero3 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-white">Power Meets Precision</h2>
                            <h1 className="text-white">Crane Rentals</h1>
                            <button className="btn text-white hero-btn mt-5">LEARN MORE <img src={btnArrow} className="img-fluid" alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <i className="bi bi-arrow-left-short swiper-btn swiper-prev"></i>
                <i className="bi bi-arrow-right-short swiper-btn swiper-next"></i>

            </Swiper>

            {/* Destination */}
            <div className="destinations py-5 my-5">
                <div className="section-title">
                    <div className="text-center d-flex flex-column align-items-center justify-content-center gap-3">
                        <span className="d-flex align-items-center gap-2">
                            <img src={plane} alt="" className="img-fluid" />
                            <span>Crane Services</span>
                            <img src={plane} alt="" className="img-fluid" />
                        </span>
                        <h2>Top Crane Rentals</h2>
                        <p>Discover our most requested crane services, trusted by over 100,000+ clients across construction, logistics, and heavy-lifting industries.</p>
                    </div>
                </div>
                <div className="destinations-wrapper mt-5">
                    <Splide
                        hasTrack={false}
                        options={{
                            type: 'loop',
                            drag: 'free',
                            focus: 'center',
                            gap: 50,
                            perPage: 3,
                            arrows: false,
                            pagination: false,
                            AutoScroll: {
                                speed: 1,
                                autoStart: true,
                            },
                            breakpoints: {
                                1199: { perPage: 3 },
                                911: { perPage: 2 },
                                767: { perPage: 2 },
                                575: { perPage: 1 },
                                0: { perPage: 1 },
                            }
                        }}
                        extensions={{ AutoScroll }}
                    >
                        <SplideTrack>
                            {Destination.map(dest => (
                                <SplideSlide key={dest.id}>
                                    <div className="dest-card position-relative">
                                        <div className="dest-img overflow-hidden rounded">
                                            <img src={dest.image} alt={dest.name} />
                                            <span className='dest-price position-absolute top-0 end-0'>{dest.price}</span>
                                        </div>
                                        <div className="dest-content p-4 rounded border top-0 start-0 mt-3 position-absolute">
                                            <i className="fa-solid fa-arrow-right dest-arrow position-absolute"></i>
                                            <h2>{dest.name}</h2>
                                            <p>{dest.desc}</p>
                                            <div className="dest-day border-top pt-3">
                                                <i className="bi bi-send-fill me-2"></i>
                                                <span>{dest.hours}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                    <p className="text-center mt-5 fs-5">
                        Want to explore our most hired cranes? <a href="#" style={{ color: '#FF7F00' }}>Click here to view more</a>
                    </p>
                </div>
            </div>

            {/* About */}
            <div className="about py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-content-wrap">
                            <div className="section-title about-title">
                                <div className="text-center d-flex flex-column align-items-center justify-content-start gap-3">
                                    <span className="d-flex align-items-center gap-2">
                                        <img src={plane} alt="" className="img-fluid" />
                                        <span>About Our Services</span>
                                        <img src={plane} alt="" className="img-fluid" />
                                    </span>
                                    <h2>Elevate Your Project with Our Expertise
                                    </h2>
                                    <p>Partner with us for reliable and efficient crane hiring solutions. From small-scale tasks to heavy-duty lifts, we deliver performance, safety, and trust—every time.
                                    </p>
                                </div>
                            </div>
                            <div className="row about-cols">
                                {/* <div className="col-md-6">
                                    <div className="about-col-img position-relative">
                                        <i className="bi bi-play-fill position-absolute"></i>
                                        <img src={about2} alt="" className="img-fluid" />
                                    </div>
                                </div> */}
                                <div className="col-md-6 about-cols p-3">
                                    <h4 className="my-3"><img src={checkImg} className='img-fluid pe-2' alt="" />Certified Operators</h4>
                                    <h4 className="my-3"><img src={checkImg} className='img-fluid pe-2' alt="" />Modern Equipment Fleet</h4>
                                    <h4 className="my-3"><img src={checkImg} className='img-fluid pe-2' alt="" />Cost-Effective Rentals</h4>
                                    <h4 className="my-3"><img src={checkImg} className='img-fluid pe-2' alt="" />24/7 Customer Support</h4>
                                </div>
                            </div>
                            <div className="about-bottom mt-5 d-flex gap-4">
                                <div className="btn-box">
                                    <button className="btn custom-btn1">
                                        Learn More
                                        <img src={btnArrow} className="img-fluid ms-2" alt="" />
                                    </button>
                                </div>
                                <div className="about-col-box d-flex align-items-center">
                                    <div className="about-col-box-img">
                                        <img src={tst1} className='img-fluid' alt="" />
                                        <img src={tst2} className='img-fluid' alt="" />
                                        <img src={tst3} className='img-fluid' alt="" />
                                        <img src={tst4} className='img-fluid' alt="" />
                                    </div>
                                    <p className="ms-4 m-0 fs-5">5.2+ Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-img">
                            <img src={about1} className='img-fluid' alt="" style={{ marginLeft: '90px' }} />
                            <img src={abElement2} className='img-fluid abElement-2 position-absolute' alt="" />
                            <img src={abElement3} className='img-fluid abElement-3 position-absolute' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Discover */}
            <div className="discover py-5">
                <div className="section-title">
                    <div className="text-center d-flex flex-column align-items-center justify-content-center gap-3">
                        <span className="d-flex align-items-center gap-2">
                            <img src={plane} alt="" className="img-fluid" />
                            <span>Crane Hiring Solutions</span>
                            <img src={plane} alt="" className="img-fluid" />
                        </span>
                        <h2>Heavy Lifting Made Effortless</h2>
                        <p>Our clients trust us for reliable, safe, and cost-effective crane rental services
                            tailored to meet every construction need.
                        </p>
                    </div>
                </div>
                <div className="row px-5 my-5 mx-0 gap-3 align-items-center justify-content-center">
                    <div className="col-lg-2 discover-card position-relative">
                        <img src={DiscoverImg1} alt="" className="img-fluid" />
                        <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center">
                            <span><i className="bi bi-geo-alt-fill"></i> Mumbai</span>
                            <h2 className="mt-4">Tower Crane for High-Rise Construction Projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-2 discover-card position-relative">
                        <img src={DiscoverImg2} alt="" className="img-fluid" />
                        <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center">
                            <span><i className="bi bi-geo-alt-fill"></i> Delhi</span>
                            <h2 className="mt-4">Mobile Crane Rental for Quick Infrastructure Jobs</h2>
                        </div>
                    </div>
                    <div className="col-lg-2 discover-card position-relative">
                        <img src={DiscoverImg3} alt="" className="img-fluid" />
                        <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center">
                            <span><i className="bi bi-geo-alt-fill"></i> Bangalore</span>
                            <h2 className="mt-4">Hydraulic Crane for Heavy Industrial Use</h2>
                        </div>
                    </div>
                    <div className="col-lg-2 discover-card position-relative">
                        <img src={DiscoverImg4} alt="" className="img-fluid" />
                        <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center">
                            <span><i className="bi bi-geo-alt-fill"></i> Hyderabad</span>
                            <h2 className="mt-4">Crawler Cranes for Rough Terrain Projects</h2>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-5 fs-5">Want to explore our crane types & locations? <a href='#' style={{ color: '#FF7F00' }}>Click here to view More</a></p>
            </div>

            {/* working steps */}
            <div className="working py-5 position-relative">
                <img src={FeatureImg1} className='featureImg featureImg1 img-fluid position-absolute' alt="" />
                {/* <img src={FeatureImg2} className='featureImg featureImg2 img-fluid position-absolute' alt="" /> */}
                <div className="container">
                    <div className="row">
                        <div className="section-title about-title">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center gap-3">
                                <span className="d-flex align-items-start gap-2">
                                    <img src={plane} alt="" className="img-fluid" />
                                    <span>Working Steps</span>
                                    <img src={plane} alt="" className="img-fluid" />
                                </span>
                                <h2>Hire a Crane in Just 3 Simple Steps</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 gap-3">
                        <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img rounded">
                                <img src={steps1} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>Browse Available Cranes</h2>
                                <p>Explore various crane types suited to your construction or industrial needs, all in one place.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img step-img2 rounded">
                                <img src={steps2} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>Book & Confirm</h2>
                                <p>Select your crane, schedule the timeline, and confirm the hire with easy online booking and support</p>
                            </div>
                        </div><div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img step-img3 rounded">
                                <img src={steps3} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>Crane Delivered On-Site</h2>
                                <p>Our team ensures on-time delivery and setup at your specified location, ready for immediate use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="testimonial py-5 position-relative">
                <img src={testBG} alt="img-testimonials" className='img-fluid test-img position-absolute' />
                <img src={testBG} alt="img-testimonials" className='img-fluid test-img-2 position-absolute' />

                <div className="section-title test-title">
                    <div className="text-center d-flex flex-column gap-3 justify-content-center align-items-center">
                        <span className='d-flex align-items-center gap-2'>
                            <img src={plane} alt="" className='img-fluid' />
                            <span>Testimonials</span>
                            <img src={plane} alt="" className='img-fluid' />

                        </span>
                        <h2>What our Clients Say's</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae quia, doloribus non nisi distinctio accusamus molestiae natus vitae sint porro odio, laborum itaque adipisci!</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        className='test-Swiper'
                    >
                        <SwiperSlide>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-img d-flex align-items-center justify-content-center">
                                        <img src={testimn01} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="test-content">
                                        <img src={quote} alt="" className='img-fluid test-content-img' />
                                        <p className='test-pare'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur obcaecati beatae veritatis ea, nisi, ullam temporibus nam atque unde omnis magnam eligendi fugiat cumque?
                                        </p>
                                        <div className="test-stars">
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <div className="test-user mt-3 d-flex align-items-center gap-2">
                                            <img src={testimn02} alt="" className='img-fluid' />
                                        </div>
                                        <div className="test-user-info">
                                            <h3>TASHA STEWART</h3>
                                            <p className="m-0">Web Developer at ThemeXviwer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-img d-flex align-items-center justify-content-center">
                                        <img src={testimn01} alt="" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="test-content">
                                        <img src={quote} alt="" className='img-fluid test-content-img' />
                                        <p className='test-pare'>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non consequuntur obcaecati beatae veritatis ea, nisi, ullam temporibus nam atque unde omnis magnam eligendi fugiat cumque?
                                        </p>
                                        <div className="test-stars">
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                            <i className='bi bi-star-fill'></i>
                                        </div>
                                        <div className="test-user mt-3 d-flex align-items-center gap-2">
                                            <img src={testimn02} alt="" className='img-fluid' />
                                        </div>
                                        <div className="test-user-info">
                                            <h3>TASHA STEWART</h3>
                                            <p className="m-0">Web Developer at ThemeXviwer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Footer */}
            <div className="container-fluid px-0 mt-5">
                <div className="row gx-0">
                    {/* LEFT SIDE */}
                    <div className="col-lg-7">
                        {/* PURPLE SECTION */}
                        <div className="px-4 py-5" style={{ backgroundColor: '#cc6600' }}>
                            <h2 className="text-white fw-bold mb-4">
                                Subscribe for the latest<br /> updates on Crane Hiring
                            </h2>
                            <div className="d-flex flex-column flex-sm-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="form-control p-3 rounded-pill"
                                    style={{ maxWidth: '400px' }}
                                />
                                <button
                                    className="btn custom-btn1"
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>

                        {/* WHITE SECTION */}
                        <div className="px-4 py-5 bg-light">
                            <div className="mb-4">
                                <a href="#" className="navbar-brand fw-bold fs-3 mb-2 d-inline-block">
                                    Crane<span className="fw-normal">Hire</span>
                                </a>
                                <p className="text-muted" style={{ maxWidth: '600px' }}>
                                    Power your projects with our industry-leading crane rental solutions. We provide expert support, certified operators, and the right equipment to keep your operations moving safely and efficiently.
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="d-flex gap-3 mb-4">
                                <i className="ri-facebook-circle-fill fs-4"></i>
                                <i className="ri-youtube-fill fs-4"></i>
                                <i className="ri-instagram-fill fs-4"></i>
                                <i className="ri-linkedin-fill fs-4"></i>
                            </div>

                            {/* Footer Links */}
                            <div className="row">
                                <div className="col-4">
                                    <ul className="list-unstyled">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Login</a></li>
                                        <li><a href="#">Equipment</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Get a Quote</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Projects</a></li>
                                        <li><a href="#">Teams</a></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Terms & Use</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div className="col-lg-5">
                        <img
                            src={footer} // Your actual image variable or path
                            alt="Travel"
                            className="img-fluid h-100 w-100 object-fit-cover footer-img"
                            style={{ objectFit: 'cover', height: '100%' }}
                        />
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="footer-bottom container-fluid text-white bg-dark p-2 text-center">
                <p className='mb-0 small'>ⓒ 2025 <strong>DP0220</strong> - All Rights Reserved.</p>
            </div>

        </>
    )
}

export default Index