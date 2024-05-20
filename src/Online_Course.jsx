import React, { useState } from 'react'
import "./service.css"
import bannerImage from './assets/project imgs/banner-3.webp';
import Form from './Form';
import Popup_Modal from './Popup_Modal';
import { TypeAnimation } from 'react-type-animation';

const Online_Course = () => {
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
                <h1 className='sec-1-head'>Online Course Help for All Academic Levels with<span className='text-blue'> Phd Experts</span></h1>
              <div className='sec-1-para'>
                <p> Online Course Help for Me offers assistance with <span className='text-blue-bg'> all courses </span> at all <span className='text-blue-bg'> academic levels. </span> Score your <span className='text-blue-bg'> desired marks </span> with a team of top-tier academic instructors at the most <span className='text-blue-bg'> affordable price.</span>  </p>
              </div>
              <div className='btn'>
                <a className='sec-1-btn fa-beat' onClick={() => setShowModal(true)} >Get A Free Quote </a>
              </div>
            </div>
          </div>
          {showmodal && <Popup_Modal onClose={() => setShowModal(false) }/>}


          <div className="col-lg-4">
          <img className='banner-img' style={{width:`100%`,height:`auto`}} width={400} height={400} src={bannerImage} alt="banner" />
          </div>

      <Form/>

        </div>
        </div>
      </div>


    </div>
    </>
  )
}

export default Online_Course