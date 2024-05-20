import React, { useState } from 'react'
import "./home.css"
import Form from './Form'
import Popup_Modal from './Popup_Modal'
import bannerImage from './assets/project imgs/banner-3.webp';
import { TypeAnimation } from 'react-type-animation'
import { Helmet } from 'react-helmet';

const Home = () => {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Get Help For Online Class</title>
                <meta name="description" content="Get help for your online classes from our experts" />
            </Helmet>

      <TypeAnimation
        sequence={[

          'We Provide FAST SERVICE',
          2000,
          'We Provide SECURE SERVICE',
          2000,
        ]}
        speed={99}
        deletionSpeed={1}
        repeat={Infinity}
      />

      <div>
        <div className='banner ' >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt-3">
                <div className='banner-text text-md-left '>

                  <h1 className='sec-1-head'>Online Class Help For All Academic Level With  <span className='text-blue'> Phd Experts</span></h1>
                  <div className='sec-1-para'>
                    <p>Get help for Online class offers assistance with <span className='text-blue-bg'> all courses </span> at all <span className='text-blue-bg'> academic levels </span> score your <span className='text-blue-bg'> desired marks </span> with a team of top-tier instructors at most <span className='text-blue-bg'> affordable prices </span> </p>
                  </div>

                  <div className='btn'>
                    {showModal && <Popup_Modal onClose={() => setShowModal(false)} />}
                    <button onClick={() => setShowModal(true)} className='sec-1-btn fa-beat'>Get A Free Quote</button>
                  </div>
                </div>
              </div>



              <div className="col-lg-4">
                <img className='banner-img' style={{width:`100%`,height:`auto`}} width={400} height={400} src={bannerImage} alt="banner" />
              </div>

              <Form />


            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Home






