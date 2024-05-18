import React from 'react'
import "./home.css"
import Payment_1 from './assets/payment-pngs/money-transfer.webp'
import Payment_2 from './assets/payment-pngs/pngwing.com.webp'
import Payment_3 from './assets/payment-pngs/union.png.webp'
import Payment_4 from './assets/payment-pngs/pngwing.com (1).webp'

const Payment = () => {
  return (
    <div>

            <div class="pay-sec">
        <div class="container">
            <div class="pay-text">
                <h2> <span class="bg-white-own">Payment Method</span>  </h2>
                <p>Pay However You Like-Choose From Our Diffrent & Secure Payment Methods</p>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="pay-list"/>
                        <div class="row justify-content-center">

                            <div class="col-sm-6 col-lg-3">
                              
                                    <div class="pay-box">
                                        <img src={Payment_1} height={130} width={130} alt="bank_transfer"/>
                                        <p>Bank/Wire Transfer</p>
                                    </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="pay-box">
                                    <img src={Payment_2}height={130} width={130} alt="online_transfer"/>
                                    <p>Online Credit/Debit Card</p>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="pay-box">
                                    <img src={Payment_3} height={130} width={130} alt="wu_transfer"/>
                                    <p>Western Union</p>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-3">
                                <div class="pay-box">
                                    <img src={Payment_4} height={130} width={130} alt="stripe"/>
                                    <p>Stripe</p>
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

export default Payment