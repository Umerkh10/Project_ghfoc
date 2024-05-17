import React from 'react'
import "./home.css"
import background from './assets/about-imgs/background-divider.webp'
import Confi_right from './assets/project imgs/confidentiality.webp'

const Conf = () => {
  return (

    <div>

        
    <div className="professional-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="prof-head mt-5">
                                <h2>CONFIDENTIALITY</h2>
                                <h4>Your Data Is <span className="bg-white-own"> 100% Secured</span></h4>
                                <p>
                                    We know how important it is to keep data secret and private, so we work hard to keep
                                    all of our customers' data private.
                                </p>
                                <p>Your information is never shared with third-party companies. We also provide entirely
                                    secure payment alternatives to add to the security.
                                </p>
                                <p>We are the assistance you have been seeking your whole life!</p>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="img-prof">
                                <div className="prof-container">
                                    <img src={Confi_right} alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="mzero">
        <div class="exam-help-sec">
            <div class="background-image" style={{backgroundImage:`url(${background})`,backgroundSize:`cover`,backgroundPosition:`center`, backgroundBlendMode:`overlay`,backgroundColor:`rgb(47 97 111)` }} >
                <div class="overlay">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="exam-main my-5">
                                    <h2>Hire a PhD. Qualified Professional To Take Your Online Exam!</h2>
                                    <h3>Get Online Exam Aid From Get Help For Online Class NOW!</h3>
                                    <div class="justify-content-center d-flex m-auto">
                                        <a href="javascript:void(Tawk_API.toggle())" class="btn btn-help">GET ONLINE
                                            CLASS HELP
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
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

export default Conf