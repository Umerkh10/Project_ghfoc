import React, { useState } from 'react'
import "./service.css"
import bannerImage from './assets/project imgs/banner-3.webp';
import Form from './Form';
import Popup_Modal from './Popup_Modal';
import { TypeAnimation } from 'react-type-animation';


const Online_Class = () => {
  const [showmodal, setShowModal] = useState(false)


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

      <div className='banner' >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-3">
              <div className='banner-text text-md-left '>
                <h1 className='sec-1-head'>Best Online Class Help For You By <span className='text-blue'> Phd Experts</span></h1>
                <div className='sec-1-para'>
                  <p> Pay someone to help you with your <span className='text-blue-bg'> online class.</span> Get Help has the expertise to connect you with a professional whom you can hire to take your online class,  Make the right choice.<span className='text-blue-bg'> Pay for grades </span>and get assistance from industry professionals.  </p>
                </div>
                <div className='btn'>
                  <a className='sec-1-btn fa-beat' onClick={() => setShowModal(true)} >Get A Free Quote </a>
                </div>
              </div>
            </div>
            {showmodal && <Popup_Modal onClose={() => setShowModal(false)} />}


            <div className="col-lg-4">
              <img className='banner-img' style={{ width: `100%`, height: `auto` }} width={400} height={400} src={bannerImage} alt="banner" /> 
            </div>

            <Form />

          </div>
        </div>
      </div>
    </>


  )
}

export default Online_Class