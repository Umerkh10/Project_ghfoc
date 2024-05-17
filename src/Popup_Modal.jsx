import React, { useEffect,useRef, useState } from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';

const Popup_Modal = ({onClose}) => {

    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [topic,setTopic]= useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Topic:', topic);

      if(name && email || topic ){
        navigate("/Thank_You")
      }
      else{
        alert("please fill all the fields")
       }

       
    };

    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }

  return (
<>
    <div ref={modalRef} onClick={closeModal} class="bts-popup" role="alert">
    <form  method="post" class="bts-popup-container">
        <div class="container">
            <button onClick={onClose} className='bts-popup-close'> <i class="fa-solid fa-x"></i>  </button> 
            <h3 class="popup-head">Limited Time Offer 50% OFF</h3>
            <p class="popup-para">Providing you the perfect solution for your academic needs. Signup now and unlock
                doors to success.</p>
            <form action="">
                <input  onChange={(e)=>setName(e.target.value)} type="text" id="fname" name="name" placeholder="Full Name" required/>
                <input  onChange={(e)=>setEmail(e.target.value)} type="email" id="lname" name="email" placeholder="Email Address" required/>
                <textarea onChange={(e)=>setTopic(e.target.value)} name="topic" placeholder="Talk About Your Project" required></textarea>
                <button onClick={handleSubmit} class="submit" name="submit" type="submit">Submit</button>
            </form>
        </div>
    </form>
</div>
</>

  )
}

export default Popup_Modal