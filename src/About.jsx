import React, { useEffect, useState } from 'react'
import "./About.css"
import background from './assets/about-imgs/background-about.webp'
import Popup_Modal from './Popup_Modal';


const About = () => {


  return (
    <div>

<div class="sec-1-about">
        <div class="background-image-form" style={{backgroundImage:`url(${background})`, backgroundSize:`cover` , backgroundPosition:`center` }} >
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="blink-soft mt-3">AFFORDABLE - FASTEST - 100% SECURE</h5>
                                    <h2>Secure Top-Quality Academic Support From Our Expert Team</h2>
                                    <p class="contact">Get Help For Online Class® leads the way in premier Academic
                                        Solutions! With our
                                        assistance, students globally can tackle any academic hurdle confidently and
                                        redirect their energies to what truly counts - their education and development.
                                        Truly, Get Help For Online Class® is the beacon of first-rate Academic
                                        Solutions.
                                    </p>

                                    <div class="row my-3">
                                        <div class="por-one-about d-flex align-items-center">
                                            <img src="src\assets\about-imgs\pngwing.com (4).webp" class="bn-short-img2" alt=""/>
                                            <p class="own-para">Subject Experts With Flair of Academic Writing</p>
                                        </div>

                                        <div class="por-one-about d-flex align-items-center">
                                            <img src="src\assets\about-imgs\pngwing.com (7).webp" class="bn-short-img2" alt=""/>
                                            <p class="own-para">100% FREE Turnitin Report on Time</p>
                                        </div>

                                        <div class="por-one-about d-flex align-items-center">
                                            <img src="src\assets\about-imgs\star.webp" class="bn-short-img2" alt=""/>
                                            <p class="own-para">17,3456+ Clients 100% Satisfaction Rate</p>
                                        </div>

                                        <div class="por-one-about d-flex align-items-center">
                                            <img src="src\assets\about-imgs\pngwing.com (3).webp" class="bn-short-img2" alt=""/>
                                            <p class="own-para">Highest Grade A+ Worthy Assignments</p>
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-5 col-sm-6 mt-3">
                                                    <a href="https://api.whatsapp.com/send?phone=+17547788999&text=Welcome%20Get%20Help%20For%20Online%20Class"
                                                        class="wa_button fa-beat">Chat With Whatsapp</a>
                                                        
                                                </div>
                                                <div class="col-md-12 col-lg-5 col-sm-6 mt-3">
                                                    <a href="javascript:void(Tawk_API.toggle())" class="discuss_expert_button fa-beat">Discuss With Expert</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 text-center justify-content-center m-auto">
                                    <img class="image-container" src="src\assets\about-imgs\about-banner.webp" alt=""/>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

  )
}

export default About