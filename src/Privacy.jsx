import React, {  useState } from 'react'
import "./policy.css"
import Popup_Modal from './Popup_Modal';


const Privacy = () => {
    const[showmodal,setShowModal] = useState(false)
 
    
  return (
    <div>
        
    <div class="privacy">
        <div class="background-image">
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="policy-sec">
                                <h2 class="pol-hed-1 txt-padding">
                                    PRIVACY POLICY
                                    <i class="fa-solid fa-shield-halved"></i>
                                </h2>
           
                                <p class="col-md-6 text-pol">Please Read Our Policies Carefully and Feel Free to Get in
                                    Touch With Us, If you Have
                                    Ambiguities Regarding any Clause.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="sec-space">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="pol-hed-2 ">Respecting Your Data and Trust:</h4>
                    <p class="pol-para">At Get Help For Online Class, respecting your data and trust is our top
                        priority. We are committed to
                        safeguarding your privacy and ensuring that your information remains secure. Through robust
                        encryption protocols, stringent data protection measures, and transparent privacy policies, we
                        strive to uphold the highest standards of confidentiality and integrity. We continuously work to
                        earn and maintain it in every interaction and
                        transaction. </p>

                    <h4 class="pol-hed-2">1. Our Commitment to Privacy:</h4>
                    <p class="pol-para">
                        At Get Help For Online Class, we prioritize your privacy above all else. We are committed to
                        safeguarding
                        your personal information and ensuring that it is handled with the utmost care and
                        confidentiality. Our policies are designed to protect your privacy rights and maintain the trust
                        you place in us. Rest assured, your data is in safe hands with us.</p>

                    <h4 class="pol-hed-2">Information Collection Protocols:</h4>
                    <p class="pol-para">At Get Help For Online Class Company, our Information Collection Protocols are
                        meticulously designed
                        to prioritize the privacy and security of our users' data.</p>
                    <ul class="list-unstyled feature-list pb-3">
                        <li><i class="fa-solid fa-check"></i> Secure handling of personal information.</li>
                        <li><i class="fa-solid fa-check"></i> Limited access to sensitive data within the company.</li>
                        <li><i class="fa-solid fa-check"></i> Regular audits and updates to privacy protocols.</li>
                        <li><i class="fa-solid fa-check"></i> Clear communication on data retention policies.</li>
                    </ul>

                    <h4 class="pol-hed-2"> Data Sharing:</h4>
                    <p class="pol-para">Get Help For Online Class prioritizes data sharing as a fundamental aspect of
                        its operations. Through seamless collaboration and transparent information exchange, Get Help
                        For Online Class fosters innovation and drives collective growth, ensuring that insights are
                        leveraged effectively across the organization.</p>

                    <h4 class="pol-hed-2">The Requested Information:</h4>
                    <p class="pol-para">Upon engaging with our website, we may request certain information to better
                        serve your needs:</p>
                    <ul class="list-unstyled feature-list pb-3">
                        <li><i class="fa-solid fa-check"></i> Full Name</li>
                        <li><i class="fa-solid fa-check"></i> Email Address</li>
                        <li><i class="fa-solid fa-check"></i> Phone Number</li>
                        <li><i class="fa-solid fa-check"></i> Payment Details (credit/debit card information)</li>
                    </ul>

                    <h4 class="pol-hed-2">Cookies Policy:</h4>
                    <p class="pol-para">At Get Help For Online Class, we use cookies to enhance user experience and
                        improve our
                        website's functionality. By continuing to browse, you consent to our use of cookies in
                        accordance with our Cookies Policy.</p>

                    <h4 class="pol-hed-2">Consent:</h4>
                    <p class="pol-para">At Get Help For Online Class, we prioritize consent as the cornerstone of our
                        interactions,
                        ensuring every engagement respects individual autonomy and choice. Our commitment to obtaining
                        and respecting consent underscores our dedication to ethical and responsible practices.</p>

                    <h4 class="pol-hed-2">Reaching Out:</h4>
                    <p class="pol-para">Struggling with your online class? Get the support you need today.Feel free to
                        Contact Us via email, chat,call. </p>

                    <h4 class="pol-hed-2">Disclaimer:</h4>
                    <p class="pol-para">Online classes can be challenging, and it's crucial to acknowledge that seeking
                        assistance is a wise decision. Whether you're struggling with assignments, understanding
                        concepts, or managing your time effectively, So don't hesitate to get the help you need to
                        thrive in your online classes.
                    </p>

                    <h4 class="pol-hed-2">Remember:</h4>
                    <p class="pol-para">Your trust in us is invaluable, and we are here to assist you. Let's get the help
                        you need for your online class and conquer it together.</p>
                </div>
                {showmodal && <Popup_Modal onClose={() => setShowModal(false) }/>}

            </div>
        </div>
    </div>


    </div>
  )
}

export default Privacy