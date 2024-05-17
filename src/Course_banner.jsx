import React from 'react'
import "./service.css"
import Course_img from './assets/service-imgs/online-course.webp'

const Course_banner = () => {
  return (
    <div>

          <div className="about-service mt-5">
                <div className="container">
                    <div className="row justify-content-center allign-items-center mb-5">
                        <div className="col-lg-6">
                            <div className="img-wrap">
                                <img src={Course_img} width="100%" height="100%" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="as-content">
                                <h4 className="short-txt cl-primary mb-2">Online <span class="bg-black-own">Course</span></h4>
                                <h3 className="exam-hed-3">Online Course<span class="bg-black-own"> Help For Me </span>
                                </h3>
                                <p className="para-exam">Are you looking for experts to assist you with your online courses? You've come to the correct place. We have pros that can assist you in over 70 different areas. Do not be concerned if you are preoccupied with your everyday routine. Allow our specialists to assist you with your online courses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Course_banner