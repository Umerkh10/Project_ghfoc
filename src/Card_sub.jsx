import React, { useState } from 'react'
import "./home.css"
import Popup_Modal from './Popup_Modal'

const Card_sub = () => {
    const[showmodal,setShowModal] = useState(false)
  return (
    <div>
        <div className="sec-2 my-3">
            <div className="container">
                <div className="text-center">
                    <h2>Services <strong> We Offer </strong> </h2>
                    <div class="row">
                <div class="col-lg-4">
                    <div class="fe-box my-3">
                        <div class="fa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-check"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="m9 9.5 2 2 4-4"/></svg>
                        </div>
                        <h3>Online Exam Help</h3>
                        <p class="service-text">Frustrated with failing various subjects over and over? Worry no more
                            since we have Ph.D. professionals to assist you with your online test. Why not let the
                            professionals handle your tests while you sit back and relax.
                        </p>

                        <a  onClick={() => setShowModal(true)} class="btn-modal "> Get Help Now</a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="fe-box my-3">
                        <div class="fa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> 
                         </div>
                        <h3>Online Class Help</h3>
                        <p class="service-text">This is the most practical strategy to complete your online education.
                            Simply pay your fees
                            to
                            have specialists assist you with your online programmes. We have Ph.D. specialists in
                            everything
                            from chemistry to physics to mathematics.
                        </p>
                        <a  onClick={() => setShowModal(true)} class="btn-modal"> Get Help Now</a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="fe-box my-3">
                        <div class="fa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"/></svg>
                        </div>
                        <h3>Online Homework Help</h3>
                        <p class="service-text">Yes, you heard correctly. Our certified specialists can help with your
                            assignment. Simply
                            sign up, share your assignment, pay the cost, and have your homework completed by
                            specialists. Contact our specialists in over 70 different areas.</p>
                        <a  onClick={() => setShowModal(true)} class="btn-modal"> Get Help Now</a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="fe-box my-3">
                        <div class="fa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-big"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>
                        </div>
                        <h3>Online Course Help</h3>
                        <p class="service-text">Are you looking for experts to assist you with your online courses?
                            You've come to the
                            correct place. We have pros that can assist you in over 70 different areas. Do not be
                            concerned if you are preoccupied with your routine.</p>
                        <a onClick={() => setShowModal(true)} class="btn-modal"> Get Help Now</a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="fe-box my-3">
                        <div class="fa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                        </div>
                        <h3>Online Assignment Help</h3>
                        <p class="service-text">Are you worried about your homework? Looking for someone to assist you
                            with your homework?
                            You should use Get Help For Online Class. We have experts from prestigious colleges that can
                            assist you with your task.</p>
                        <a onClick={() => setShowModal(true)} class="btn-modal"> Get Help Now</a>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="fe-box my-3">
                        <div class="fa-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check"><path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"/><path d="m16 12 2 2 4-4"/><path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"/></svg>
                        </div>
                        <h3>Online Test Help</h3>
                        <p class="service-text">It is quite challenging to balance your personal and work lives. Do you
                            want to get the best
                            possible score on your test? Allow our pros to handle your online exam. Don't be concerned.
                            Our experts are prepared to take your online exam.</p>
                        <a onClick={() => setShowModal(true)} class="btn-modal"> Get Help Now</a>
                    </div>
                </div>
                {showmodal && <Popup_Modal onClose={() => setShowModal(false) }/>}

            </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Card_sub