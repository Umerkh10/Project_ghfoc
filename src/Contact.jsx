import './contact.css'
import background from './assets/about-imgs/background-about.webp'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function contact(){

    useEffect(() => {
        const input = document.querySelector("#phone1");
        if (input) {
          window.intlTelInput(input, {
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
          });
        }
      }, []);

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
}}

    return(
      
        <div class="contact-sec">
        <div class="background-image-form" style={{backgroundImage:`url(${background})`,backgroundPosition:`center`, backgroundSize:`cover`}} >
        <div class="overlay_contact">
        <div class="container">
            <div class="row ">
                <div class="col-md-12 my-5">
                    <div class="row">
                        <div class="col-md-5">
                            <h5 class="blink-soft mt-3">24/7 SUPPORT FOR ACADEMIC HELP</h5>
                            <h2>Reach Out For A No-Cost Consultation Today!</h2>
                            <p class="contact">Searching For Reliable Academic Assistance? We've Got You Covered! Our Team Is Available
                                Round The Clock To Assist You. Whether It's Assignments, Quizzes, Or Any Other
                                Study-Related Task, We're Always Here To Help. For Immediate Responses, Utilize Our Live
                                Chat Feature, And Our Professionals Will Get Back To You Promptly.
                            </p>
                            
                            <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                <div class="col-md-12 col-lg-5 col-sm-6 mt-3 ">
                                    <a href="https://api.whatsapp.com/send?phone=+17547788999&text=Welcome%20Get%20Help%20For%20Online%20Class" class="whatsapp-button fa-beat">Chat On Whatsapp
                                    
                                    </a>
                                </div>
                                <div class="col-md-12 col-lg-5 col-sm-6 mt-3 ">
                                    <a href="javascript:void(Tawk_API.toggle())" class="expert-button fa-beat">Discuss With Expert</a>
                                </div>
                            </div>
                            </div>
                        </div>
                            </div>
                        
                            <div class="col-md-6 text-center justify-content-center m-auto ">
                                <div class="row">
                                    <div class="col-lg-8 justify-content-center m-auto">
                                        <form action="" method="post" class="form-contact my-3">
                                        
                                            <div class="form-box-contact">
                                                <h3 class="text-white-contact">Don't Hesitate, Feel Free Contact Us</h3>
                                                <input type="text" onChange={(e)=>setName(e.target.value)}  class="form-control my-3" name='name' placeholder="Enter Your Name" required />
                                                <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control my-3" name='email' placeholder="Enter Your Email Address" required />
                                                <input class="form-control my-3 phone-input" onChange={(e)=>setPhone(e.target.value)} type="tel" id='phone1' name="phone" placeholder="Enter Phone Number" required/>
                                               
                                                    <textarea onChange={(e)=>setSubject(e.target.value)} class="form-control mt-2" name='subject' placeholder="Talk About Your Project" required></textarea>
                                                    <button onClick={handleSubmit} class="btn-form mt-3" type="submit">Contact Us</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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

export default contact