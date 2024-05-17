import React from 'react'
import "./thank.css"
import background from './assets/about-imgs/background-graduate-vector.webp'

const Thank_You = () => {
  return (
    <div>
            <section class="thank-you">
        <div class="background-image" style={{backgroundImage:`url(${background})`}}>
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-8">
                                    <h5 class="blink-soft ">GET HELP FOR ONLINE CLASS</h5>
                                    <h2>Thank You For Reaching Out To Us
                                        <img src="src\assets\about-imgs\heart_thankyou.png" class="thankyou-heart" alt=""/>
                                    </h2>
                                    <p class="ty-para">We Appreciate Your Interest In Our Services. Our Team Of Experts
                                        Is Dedicated To Providing The Best Possible Experience To Our Valued Students.
                                    </p>
                                    <p class="ty-para">We Believe That Our Success Is Directly Tied To The Success Of Students. That's
                                        Why We Go Above And Beyond To Ensure That Every Task We Undertake Is Completed
                                        On Time, Within Transparent Budget, And To The Highest Possible Standard.</p>

                                        <div class="row mt-5">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-5 col-sm-6 mt-3">
                                                        <a href="https://api.whatsapp.com/send?phone=+17547788999&text=Welcome%20Get%20Help%20For%20Online%20Class"
                                                            class="button fa-beat">Chat With Whatsapp</a>
                                                            
                                                    </div>
                                                    <div class="col-md-12 col-lg-5 col-sm-6 mt-3">
                                                        <a href="javascript:void(Tawk_API.toggle())" class="contact-button fa-beat">Discuss With Expert</a>
                                                    </div>
                                                </div>
                                            </div>
                                     </div>
                                </div>

                                <div class="col-md-4 text-center justify-content-center m-auto">
                                    <img class="image-container" src="src\assets\about-imgs\thank-you-banner.webp" alt=""/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Thank_You