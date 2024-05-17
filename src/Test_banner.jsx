import React from 'react'
import "./service.css"
import Test_img from './assets/service-imgs/online-test.webp'

const Test_banner = () => {
  return (
    <div>

        
                <div className="about-service mt-5">
                <div className="container">
                    <div className="row justify-content-center allign-items-center mb-5">
                        <div className="col-lg-6">
                            <div className="img-wrap">
                                <img src={Test_img} width="100%" height="100%" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="as-content">
                                <h4 className="short-txt cl-primary mb-2">Online <span class="bg-black-own">Test</span></h4>
                                <h3 className="exam-hed-3">I Need<span class="bg-black-own"> Online Test</span> Assistance
                                </h3>
                                <p className="para-exam">It is quite challenging to balance your personal and work lives. Do you want to get the best possible score on your test? Allow our pros to handle your online exam. Don't be concerned. Our experts are prepared to take your online exam. Simply pay the cost, hire an expert to take your online exam, and get the required score.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



    </div>
  )
}

export default Test_banner