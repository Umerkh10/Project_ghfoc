import React, { useState } from 'react'
import Popup_Modal from './Popup_Modal';
import background from './assets/about-imgs/term_back.webp'


const Term = () => {
    const [showmodal, setShowModal] = useState(false)

    return (
        <div>
            <div class="banner-content mt-3">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div className='background_term' style={{ backgroundImage: `url(${background})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundBlendMode: `overlay`, backgroundColor: `#466471`, padding: `20px` }}>
                                <h1 class="term-hed mb-1 text-center">Terms & Conditions</h1>

                                <div className="term_button">
                                    <div className="row">
                                        <div className=" col-lg-6 col-6 mt-3">
                                            {showmodal && <Popup_Modal onClose={() => setShowModal(false)} />}
                                            <button onClick={() => setShowModal(true)} className='term-btn-quote'>Get A Free Quote</button>
                                        </div>

                                        <div className="col-lg-6 col-6 mt-3">
                                            <a href="https://api.whatsapp.com/send?phone=+17547788999&text=Welcome%20Get%20Help%20For%20Online%20Class" className="term_whatsapp_button">Chat On Whatsapp</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                        <div className="container">
                            <p class="term-para mt-3">Get Help For Online Class is an academic platform that aims at helping the
                                students battling with their academic studies. We always make sure that the services provided by
                                us to our customers must always be of high-quality. We always work according to our policies and
                                therefore, expect our customers to agree with the terms and conditions mentioned below before
                                placing an order. In case, if anyone violates any rule then strict action will be taken.</p>

                            <h4 class="term-hed-2">Some Important Terms:</h4>
                            <ul class="list-unstyled feature-list pb-3">
                                <li><i class="fa-solid fa-check"></i>  Request Status portrays demand progress on a particular stage.</li>
                                <li><i class="fa-solid fa-check"></i>  Revision' is a changed type of the principal Product presented by the Customer.</li>
                                <li><i class="fa-solid fa-check"></i>  Support' is the bit of the Company's progressive structure with the critical assistance and
                                    orchestration of the Order strategy.</li>
                                <li><i class="fa-solid fa-check"></i>  Quality Assurance Department' signifies the bit of the Company's legitimate structure with
                                    the critical screen and survey the idea of Product and organization given.</li>
                                <li><i class="fa-solid fa-check"></i>  Confirmation Process' is an approach required from Customer in order to assert his/her
                                    charging character to prevent coercion.</li>
                            </ul>

                            <h4 class="term-hed-2">Payment Policy</h4>
                            <p class="term-para">You can pay through online banking or credit card. Where else, we do not accept
                                any other installment method. Our payment method is safe and secure and we always make sure
                                about it.</p>

                            <h4 class="term-hed-2">Revision Policy</h4>
                            <p class="term-para">Revisions will be catered multiple times if the writer makes any mistake in the
                                requirement provided earlier. In case of new requirements by the customer or something extra,
                                amendment will be placed and will be charged accordingly.</p>

                            <h4 class="term-hed-2">Refund Policy</h4>
                            <ul class="list-unstyled feature-list pb-3">
                                <p class="term-para">All Your cash will be refunded in the case if,</p>
                                <li><i class="fa-solid fa-check"></i> We fail to deliver your paper before the deadline.</li>
                                <li><i class="fa-solid fa-check"></i> Your money will be refunded if you ask for it before we
                                    start working on your order.</li>
                                <li><i class="fa-solid fa-check"></i> If you fail due to our work and show us authentic failure
                                    report and comments of the teacher regarding our work.</li>
                            </ul>
                            <h4 class="term-hed-2">Copyright Policy</h4>
                            <p class="term-para">According to copyright policies, the experts' online class assignments cannot
                                be used by anyone else once they have been provided to the owner. It cannot be utilized by
                                professionals for personal gain, as this would be a violation of the policies.</p>
                            {showmodal && <Popup_Modal onClose={() => setShowModal(false)} />}
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default Term