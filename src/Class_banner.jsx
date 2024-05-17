import React from 'react'
import "./service.css"
import Class_img from './assets/service-imgs/online-class.webp'

const Class_banner = () => {
    return (
        <div>

            <div className="about-service mt-5">
                <div className="container">
                    <div className="row justify-content-center allign-items-center mb-5">
                        <div className="col-lg-6">
                            <div className="img-wrap">
                                <img src={Class_img} width="100%" height="100%" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="as-content">
                                <h4 className="short-txt cl-primary mb-2">Online <span class="bg-black-own">Class</span></h4>
                                <h3 className="exam-hed-3">Pay Someone To Do Your<span class="bg-black-own"> Online Class </span>
                                </h3>
                                <p className="para-exam">This is the most practical strategy to complete your online education. Simply, hire a professional to take your online class for you. Our team of dedicated employees aspires to help you with your online class, no matter what course you’re struggling with. No need to worry about attendance anymore, through the years we have connected with people who are professional online class helpers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Class_banner