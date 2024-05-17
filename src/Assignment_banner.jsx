import React from 'react'
import "./service.css"
import Assignment_img from './assets/service-imgs/online-assignment.webp'

const Assignment_banner = () => {
  return (
    <div>
                <div className="about-service mt-5">
                <div className="container">
                    <div className="row justify-content-center allign-items-center mb-5">
                        <div className="col-lg-6">
                            <div className="img-wrap">
                                <img src={Assignment_img} width="100%" height="100%" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="as-content">
                                <h4 className="short-txt cl-primary mb-2">Online <span class="bg-black-own">Assignment</span></h4>
                                <h3 className="exam-hed-3">I Need<span class="bg-black-own">  Online Assignment </span> Help 
                                </h3>
                                <p className="para-exam">Feeling overwhelmed by your assignments? In search of expert assistance to boost your grades? Choose Academic Ally For Online Assignments. Our team includes specialists from top-tier universities ready to support you in achieving excellence. Sit back and secure the grade you desire with our help.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Assignment_banner