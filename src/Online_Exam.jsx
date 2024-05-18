import React, {  useState } from 'react'
import "./service.css"
import bannerImage from './assets/project imgs/banner-3.webp';
import Form from './Form';
import Popup_Modal from './Popup_Modal';
import { TypeAnimation } from 'react-type-animation';

const Online_Exam = () => {
  const[showmodal,setShowModal] = useState(false)



  return (

    <>
    <TypeAnimation
  sequence={[
    'We Provide FAST SERVICE',
    1000,
    'We Provide SECURE SERVICE',
    1000,
  ]}
  speed={50}
  repeat={Infinity}
/>

    <div>
      <div className='banner' >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-3">
              <div className='banner-text text-md-left '>
                <h1 className='sec-1-head'>Online Exam Help By <span className='text-blue'> Phd Experts</span></h1>
                <div className='sec-1-para'>
                  <p> Looking to hire someone for your online exam help? Why not Ph. D experts? Get help for online class has the expertise to serve you with the best <span className='text-blue-bg'>  online exam help.</span> Get legit exam help from industry professionals.  </p>
                </div>
                <div className='btn'>
                  <a onClick={() => setShowModal(true)} className='sec-1-btn fa-beat' >Get A Free Quote </a>
                </div>
              </div>
            </div>
            {showmodal && <Popup_Modal onClose={() => setShowModal(false) }/>}


            <div className="col-lg-4">
              <img className='banner-img' src={bannerImage} alt="banner_image" />
            </div>

            <Form />

          </div>
        </div>
      </div>


    </div>
        </>

  )
}

export default Online_Exam