import React from 'react'
import "./service.css"
import Exam_img from './assets/service-imgs/online-exam.webp'

const Exam_banner = () => {
  return (
    <div>
            <div className="about-service mt-5">
        <div className="container">
            <div className="row justify-content-center allign-items-center mb-5">
                <div className="col-lg-6">
                    <div className="img-wrap">
                        <img src={Exam_img} width="100%" height="100%" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="as-content">
                        <h4 className="short-txt cl-primary mb-2">Online <span class="bg-black-own">Exam</span></h4>
                        <h3 className="exam-hed-3">Professional<span class="bg-black-own"> Online Exam </span> Assistance
                        </h3>
                        <p className="para-exam">Frustrated with failing certain subjects again and again? Pay professionals
                            to take your
                            online exam for you. We have a team of Ph. D professionals who are dedicated to taking your
                            proctored exam and helping you achieve your academic goal. No more hassle to get help with
                            your online exam.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Exam_banner