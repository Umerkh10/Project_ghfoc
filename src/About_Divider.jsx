import React, { useState } from 'react'
import "./About.css"
import Popup_Modal from './Popup_Modal'

const About_Divider = () => {
    const[showmodal,setShowModal] = useState(false)

  return (
    <div>
        <section class="sec4">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center">
                        <h2 class="blink-soft">Absolutely FREE</h2>
                        <h3 class="ban-hed2">EAGER FOR A FREE SAMPLE ?</h3>
                        <p class="ban-para mb-3">EAGER TO BEGIN? PLACE YOUR INITIAL ORDER WITH US AND SEE THE DIFFERENCE.
                            OUR SPECIALISTS WILL DELIVER EXCEPTIONAL QUALITY IN NO TIME - AT NO COST! STEP TOWARDS
                            ACHIEVEMENT BY SIMPLY PLACING YOUR FIRST ORDER AND WATCH THE RESULTS IN A MATTER OF HOURS.
                        </p>
                        <div class="col-md-3 col-12 justify-content-center d-flex m-auto">
                            <button onClick={() => setShowModal(true)} class="whatsapp-btn fa-beat">Get First Order Now</button>
                        </div>
                        {showmodal && <Popup_Modal onClose={() => setShowModal(false) }/>}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About_Divider