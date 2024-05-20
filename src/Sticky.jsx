import React, { useRef,useEffect, useState } from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';


const Sticky = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const input = document.querySelector("#tel");
    if (input) {
      window.intlTelInput(input, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@22.0.2/build/js/utils.js",
      });
    }
  }, [showForm]);

   

    const toggleForm = () => {
      setShowForm(!showForm);
    };

    const [name,setName]= useState(null);
    const [email,setEmail]= useState(null);
    const [phone,setPhone]= useState(null);
    const [subject,setSubject]= useState(null);
    const phoneInputRef = useRef(null);

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

    
  return (
    <div>
        
    <div class="sticky-left-container">
        <ul class="sticky-left">
            <a href="javascript:void(Tawk_API.toggle())">
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
                    <p>Chat With Us</p>
                </li>
            </a>
        </ul>

<ul className='sticky-left'>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <p>+1(786) 230-8680</p>
            </li>
            </ul>
    </div>

    <a rel=" noopener no-referrer" aria-label='whatsapp'
        href="https://api.whatsapp.com/send?phone=+17547788999&text=Welcome%20Get%20Help%20For%20Online%20Class">
        <i class="fa-brands fa-whatsapp fa-beat "></i>
    </a>

    <div className={`sidebar-contact ${showForm ? 'active' : ''}`}>
      <div className={`toggle ${showForm ? 'active' : ''}`} onClick={toggleForm}></div>
      {showForm && (
        <>
          <h2>Sign Up Now & <br /> Let's Get Started</h2>
          <form action="" method="post">
            <input onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Enter Your Name" required />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Enter Your Email" required />
            <input onChange={(e)=>setPhone(e.target.value)} type="tel" ref={phoneInputRef} id="tel" name="phone" placeholder="Enter Phone Number" required />
            <textarea onChange={(e)=>setSubject(e.target.value)} name='subject' placeholder="Talk About Your Project" required></textarea>
            <button onClick={handleSubmit} className="submit" >Submit</button>
          </form>
        </>
      )}
    </div>

    

    
    </div>
  )
}

export default Sticky