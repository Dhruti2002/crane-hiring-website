import React from 'react'
import { data, Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';

import galleryimage1 from '../../assets/galleryimage1.jpg';
import galleryimage2 from '../../assets/galleryimage2.jpg';
import galleryimage3 from '../../assets/galleryimage3.jpg';
import galleryimage4 from '../../assets/galleryimage4.jpg';
import galleryimage5 from '../../assets/galleryimage5.jpg';

import Datas from '../../Destination.json';
function Services() {
  return (
    <>
      {/* Page Section */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>Crane Search Result</h2>
            <ul>
              <li className="pe-2">
                <Link to='/'>Home</Link>
              </li>
              <li>
                <i className="bi bi-gear fs-6 pe-2"></i>
                Crane Search Result
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tours */}
      <div className="tours-wrapper my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 tour-cate-wrap-sticky">
              <div className="tour-cate-wrap">
                <div className="tour-cate-col pb-3 border-bottom  d-flex gap-5 justify-content-between">
                  <h2>Filter</h2>
                  <button className='btn'>Clear All</button>
                </div>
                <div className="tour-cate-box-wrap rounded pb-4 mt-5">
                  <div className="tour-cate-box">
                    <h2>Location</h2>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        Ahmedabad
                      </label>
                      <span>2</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        Mumbai
                      </label>
                      <span>2</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        Surat
                      </label>
                      <span>1</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        Vadodara
                      </label>
                      <span>2</span>
                    </div>
                  </div>
                </div>
                <div className="tour-cate-box-wrap rounded pb-4 mt-5">
                  <div className="tour-cate-box">
                    <h2>Crane Type</h2>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        Mobile Crane
                      </label>
                      <span>7</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        Crawler Crane
                      </label>
                      <span>8</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        Tower Crane
                      </label>
                      <span>7</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        Hydraulic Crane
                      </label>
                      <span>6</span>
                    </div>
                  </div>
                </div>
                <div className="tour-cate-box-wrap rounded pb-4 mt-5">
                  <div className="tour-cate-box">
                    <h2>Capacity</h2>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        10-20 Ton
                      </label>
                      <span>11</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        21-40 Ton
                      </label>
                      <span>10</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        41-60 Ton
                      </label>
                      <span>1</span>
                    </div>
                    <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                      <label className='d-flex align-items-center gap-2'>
                        <input type="checkbox" />
                        60+ Ton
                      </label>
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 ps-4 ps-lg-5">
              <div className="row">
                <div className="col-lg-12 border rounded p-3 d-flex align-items-center justify-content-end gap-3">
                  <span className='fs-5'>Sort :</span>
                  <i className="bi bi-card-list tours-grid-icon fs-5"></i>
                  <i className="bi bi-grid-3x3 tours-grid-icon fa-5"></i>
                </div>
              </div>
              <div className="row tours-grid mt-4">
                {
                  Datas.map(Data => (
                    <div className="col-lg-6 mb-4" key={Data.id}>
                      <div className="tour-card shadow-sm">
                        <div className="tour-card-img">
                          <img src={Data.image} className='img-fluid rounded' alt='' />
                        </div>
                        <span><i className="bi bi-geo0alt-fill"></i>{Data.location}</span>
                        <div className="tour-card-content mt-4 px-3">
                          <Link to='#' className='text-black text-decoration-none'><h2>{Data.name}</h2></Link>
                          <div className="tour-card-box border-top py-3 d-flex justify-content-between gap-2 mt-3">
                            <p><i className="bi bi-bi-clock-history"></i>{Data.hours}</p>
                            <Link to='#'>view Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )

                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div className="gallery-grid my-5 mb-0">
        <div className="row">
          <Swiper
            slidesPerView={5}
            autoplay={true}
            loop={true}
            className='gallery-swiper'
          >
            <SwiperSlide>
              <div className="gallery-image">
                <img src={galleryimage1} alt="gallery" className='img-fluid w-100' style={{height:'450px'}} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img src={galleryimage2} alt="gallery" className='img-fluid w-100' style={{height:'450px'}}/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img src={galleryimage3} alt="gallery" className='img-fluid w-100' style={{height:'450px'}} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img src={galleryimage4} alt="gallery" className='img-fluid w-100' style={{height:'450px'}} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img src={galleryimage5} alt="gallery" className='img-fluid w-100' style={{height:'450px'}}/>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Services