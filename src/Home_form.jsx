import React, { useEffect, useState } from 'react'
import "./home.css"
import background from './assets/about-imgs/background-graduate-vector.webp'
import { useNavigate } from 'react-router-dom';

const Home_form = () => {

    useEffect(() => {
        const input = document.querySelector("#phone_home_form");
        if (input) {
          window.intlTelInput(input, {
            utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
          });
        }
      }, []);

    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [phone,setPhone]= useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()


      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);

      if(name || email || phone ){
        navigate("/Thank_You")
      }
      else{
        alert("please fill all the fields")
       }
       
    };

  return (

    <div>

    <div className="exam-help" style={{backgroundImage:`url(${background})`, backgroundSize:`cover`,backgroundPosition:`center`, backgroundBlendMode:`overlay`,backgroundColor:`rgb(47 97 111)` }}>
        <div className="background-image-form" >
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="exam-help-left my-5">
                                <h2>What Are The Benefits Of Using
                                    Get Online Class Help?
                                </h2>

                                <p>You may be asking I'd hire an American Class Helper to solve my concerns. So, let us
                                    make our
                                    case for ourselves. There are several online academic assistance programmes. A quick
                                    Google
                                    search will provide various alternatives. However, not all services are reliable.
                                    When it
                                    comes to academics, you must exercise extreme care when using internet services.
                                </p>

                                <p>You may be asking why I'd hire an Get Help For Online Class to solve my concerns. So
                                    let us
                                    make our case for ourselves. There are several online academic assistance programs.
                                    A quick
                                    Google search will provide various alternatives. However, not all services are
                                    reliable.
                                    When it comes to academics, you must exercise extreme care when using internet
                                    services.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <form action="" method="post" className="exam-help-right my-3">
                                <div class="exam-help-form-right">
                                    <h4 class="text">Having Difficulties With Your Online Education? We Can
                                        Assist</h4>
                                    <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control my-3" name='name' placeholder="Enter Your Name" required="required"/>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control my-3" name='email' placeholder="Enter Your Email Address" required="required"/>
                                        <input class="form-control my-3 " onChange={(e)=>setPhone(e.target.value)} type="number" id='phone_home_form' name="phone" placeholder="Enter Phone Number" required/>
                                    
                                    <button onClick={handleSubmit} class="btn-form mt-3" name='submit' type="submit">Submit</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

  )

}

export default Home_form