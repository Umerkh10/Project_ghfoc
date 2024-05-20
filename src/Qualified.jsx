import React, { useState } from 'react'
import "./home.css"
import Slider from "react-slick";
import Qualified_right from './assets/project imgs/qualified-right.webp'
import Uni_img_1 from './assets/uni-imgs/part-1.webp'
import Uni_img_2 from './assets/uni-imgs/part-2.webp'
import Uni_img_3 from './assets/uni-imgs/part-3.webp'
import Uni_img_4 from './assets/uni-imgs/part-4.webp'
import Uni_img_5 from './assets/uni-imgs/part-5.webp'
import Uni_img_6 from './assets/uni-imgs/part-6.webp'
import Uni_img_7 from './assets/uni-imgs/part-7.webp'
import Popup_Modal from './Popup_Modal';

const Qualified = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768, // Breakpoint for tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024, // Breakpoint for desktops
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [showmodal, setShowModal] = useState(false)


    return (
        <div>

            <div class="Qualified-sec mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="qualified-content">
                                <h2 class="qualified-heading"><span class="bg-white-own">Our Experts </span> Are Alumni Of Top <span class="bg-white-own">
                                    Ranking Universities.</span></h2>
                                <div class="qualified-inner ">
                                    <p class="qualified-para">Are you worried about your assignments,quizzes,exams? Why not hire a PhD.specialist to
                                        manage your academics matters and get you the grade you want while you sit back and
                                        relax.</p>
                                    <div class="d-flex allign-items-center justify-content-between">
                                        <div class="uni-li">
                                            <ul class="uni-pts">
                                                <li class="d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                                    24/7 Availablity</li>
                                            </ul>

                                            <ul class="uni-pts">
                                                <li class="d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                                    No Middle Men</li>
                                            </ul>

                                            <ul class="uni-pts">
                                                <li class="d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                                    Timely Submission</li>
                                            </ul>

                                            <ul class="uni-pts">
                                                <li class="d-flex"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
                                                    Guranteed A Grade</li>
                                            </ul>
                                        </div>

                                        <ul className='uni-pts'>
                                            <div class="action-row">
                                                <a href='#' onClick={() => setShowModal(true)} class="btn-primary"> Get Help Now</a>
                                                {showmodal && <Popup_Modal onClose={() => setShowModal(false)} />}

                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="qualified-img">
                                <div class="image-container">
                                    <img src={Qualified_right} style={{ width: `100%`, height: `auto` }} height={500} width={500} alt="qualified" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="partners-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-4 mt-2">
                                    <div class="heading">
                                        <h6>Our Experts Are Graduated from <strong>Top Universities Around The World</strong>
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-lg-8 mb-3">
                                    <Slider className="customer-logos" {...settings}>
                                        <div className="slide"><img src={Uni_img_1} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_1" /></div>
                                        <div className="slide"><img src={Uni_img_2} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_2" /></div>
                                        <div className="slide"><img src={Uni_img_3} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_3" /></div>
                                        <div className="slide"><img src={Uni_img_4} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_4" /></div>
                                        <div className="slide"><img src={Uni_img_5} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_5" /></div>
                                        <div className="slide"><img src={Uni_img_6} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_6" /></div>
                                        <div className="slide"><img src={Uni_img_7} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_7" /></div>
                                        <div className="slide"><img src={Uni_img_1} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_8" /></div>
                                        <div className="slide"><img src={Uni_img_2} style={{ width: `60%`, height: `auto`, verticalAlign: `middle` }} width={200} height={90} alt="uni_9" /></div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Qualified