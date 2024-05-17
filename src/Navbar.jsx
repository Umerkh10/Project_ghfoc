import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from './assets/project imgs/logo.webp'
function Navbar() {
    const navLink = [
        {
            title: "Home",
            path: "/",
        },

        {
            title: "Contact",
            path: "/Contact",
        },
        {
            title: "About",
            path: "/About",
        },
        {
            title: "Order Form",
            path: "/Order_form",
        },
    ]
    return (

        <nav class="header navbar navbar-expand-lg ">
            <div class="container-fluid">
                <Link className="nav-logo" to="/">
                    <img className="logo" src={logo} height="60px" width="200px" alt="Logo" />
                </Link>               
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04"
                    aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <i id="bar" class="fa-solid fa-bars"></i>
                    </span>
                </button>
                <div class="navigation collapse navbar-collapse" id="navbarColor04">
                    <ul class="menu navbar-nav ms-auto">
                        {navLink.map((element, i) => (

                            <Link to={element.path} key={i} className="nav-list">{element.title}</Link>

                        ))}  <li class="dropdown nav-item dropdown">
                            <Link to={"Service"} role="button" aria-haspopup="true" aria-expanded="false" className="nav-list">Service</Link>
                            <div class="dropdown-menu">
                                <Link to={"Service/Online_Exam"} class="dropdown-item" >Online Exam</Link>
                                <Link to={"Service/Online_Class"} class="dropdown-item" >Online Class</Link>
                                <Link to={"Service/Online_Course"} class="dropdown-item" >Online Course</Link>
                                <Link to={"Service/Online_test"} class="dropdown-item" >Online Test</Link>
                                <Link to={"Service/Online_Homework"} class="dropdown-item" >Online Homework</Link>
                                <Link to={"Service/Online_Assignment"} class="dropdown-item" >Online Assignment</Link>
                            </div>
                        </li>
                        <li className="nav-social-links" >
                            <a class="nav-list" href="tel:++17862308680">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-social-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                +1(786) 230-8680</a>
                        </li>

                        <li className="nav-social-links" >
                            <a class="nav-list" href="mailto:info@gethelpforonlineclass.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-social-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                info@gethelpforonlineclass.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}


export default Navbar