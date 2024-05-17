import React from 'react'
import "./service.css"
import Homework_img from './assets/service-imgs/online-homework.webp'

const Homework_banner = () => {
  return (
    <div>
        <div className="about-service mt-5">
                <div className="container">
                    <div className="row justify-content-center allign-items-center mb-5">
                        <div className="col-lg-6">
                            <div className="img-wrap">
                                <img src={Homework_img} width="100%" height="100%" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="as-content">
                                <h4 className="short-txt cl-primary mb-2">Online <span class="bg-black-own">Homework</span></h4>
                                <h3 className="exam-hed-3">Online Homework<span class="bg-black-own"> Help For Me</span> 
                                </h3>
                                <p className="para-exam">Yes, you heard correctly. Our certified specialists can help with your assignment. Simply sign up, share your assignment, pay the cost, and have your homework completed by specialists. You may now contact our specialists in over 70 different areas, including chemistry, physics, engineering, computers, and much more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Homework_banner