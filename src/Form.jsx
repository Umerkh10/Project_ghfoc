import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Form = () => {
    const [name,setName]= useState(null);
    const [email,setEmail]= useState(null);
    const [phone,setPhone]= useState(null);
    const [subject,setSubject]= useState(null);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()


      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Subject:', subject);

if(name && email && phone || subject){
  navigate("/Thank_You")
}
else{
 alert("please fill all the fields")
}
       
    };
    useEffect(() => {
      const input = document.querySelector("#phone");
      if (input) {
        window.intlTelInput(input, {
          utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
        });
      }
    }, []);
  
  
  return (
    <div className="col-lg-4">
    <form method='post' className='form-main mt-3 mb-1'>
      <div className="form-box">
        <h4 className='text-white'>AVAIL <span className='bg-black'> 50% DISCOUNT </span> NOW</h4>
        <p className='text-white-form-para'>Sign Up Now to Lock Your Discount Avail Whenever You Want</p>
        <input onChange={(e)=>setName(e.target.value)} type="text" className='form-control mb-3' name='name' placeholder='Enter Your Name' required />
        <input onChange={(e)=>setEmail(e.target.value)} type="email" className='form-control mb-3' name='email' placeholder='Enter Your Email' required />
        <input onChange={(e)=>setPhone(e.target.value)} type="tel" id="phone" className='form-control mb-3' name='phone' placeholder='Enter Your Number' required />
        <div className="select-wrapper">
          <label htmlFor="select-service" className='form-label'>which service are your intrested in</label>
      <select onChange={(e)=>setSubject(e.target.value)} name="subject" className='form-control mb-3 mt-3'  id="">
        <option value="" >Which Service are you interested in</option>
        <option value="online exam help">Online Exam Help</option>
        <option value="online course help">Online Course Help</option>
        <option value="online class help">Online Class Help</option>
        <option value="online homework help">Online Homework Help</option>
        <option value="online test help">Online Test Help</option>
        <option value="online assignment help">Online Assignment Help</option>
      </select>
      <div className="select-icon">
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
        <button onClick={handleSubmit}  className='btn-form'>Lock Your Discount</button>
      </div>
    </form>
  </div>
  )
}

export default Form