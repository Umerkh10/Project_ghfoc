
import { Link } from 'react-router-dom'
import "./footer.css"
import logo from './assets/project imgs/logow.webp'


function Footer() {
    const footerlink = [
        {
            title: "Online Exam",
            path: "/Service/Online_Exam",
        },
        {
            title: "Online Class",
            path: "/Service/Online_Class",
        },
        {
            title: "Online Course",
            path: "/Service/Online_Course",
        },
        {
            title: "Online Test",
            path: "/Service/Online_test",
        },
        {
            title: "Online Homework",
            path: "/Service/Online_Homework",
        },
        {
            title: "Online Assignment",
            path: "/Service/Online_Assignment",
        },
    ]

    const service = [
        {
            title: "Privacy Policy",
            path: "/Privacy",
        },

        {
            title: "Terms and Conditions",
            path: "/Term"
        },
    ]

    const contact = [
        {
            title: "Contact Us",
            path: "/Contact",
        }
    ]
    return (
        <div>

            <div className="footer">
                <div className="footer-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <Link to="/">
                                    <img className="logo-footer" src={logo} height="60px" width="200px" alt="Logo" />
                                </Link>
                                <div className="footer-para">
                                    Get Help For Online Class is providing help for all the subjects at all academic levels.
                                    Score your desired grades with a team of top leading academic professors at the lowest prices
                                </div>
                                <ul className="item">
                                    <li className="itemx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                                        <a href='tel:++17862308680' className="text-black">+1(786) 230-8680</a>
                                    </li>
                                    <li className="itemx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                        <a href='mailto:info@gethelpforonlineclass.com' className="text-black">Mail Us</a>
                                    </li>

                                </ul>

                            </div>

                            <div className="col-lg-2">
                                <h3 className="service-header">Services</h3>
                                <div className="footer-link">
                                    {footerlink.map((element, i) => (

                                        <Link to={element.path} key={i} className="footer-list"> {element.title}</Link>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <h3 className="policy-header">Our Policies</h3>
                                <div className="service">
                                    {service.map((element, i) => (


                                        <Link to={element.path} key={i} className="policy-list">{element.title}</Link>


                                    ))}
                                </div>

                            </div>

                            <div className="col-lg-3">
                                <h3 className="contact-header"> Contact Us </h3>
                                <div className="contact-footer">
                                    {contact.map((element, i) => (

                                        <Link to={element.path} className="contact-list">{element.title}</Link>


                                    ))}
                                </div>

                                <div class="social mb-4">
                                    <h4 class="title mt-4 mb-3">Find Us On</h4>
                                    <ul className="icon-footer" >
                                        <li>
                                            <a href="https://www.facebook.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                            </a>
                                            <a href="https://pk.linkedin.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="disclaimer">
                    <div className="container">
                        <p><strong>Disclaimer :</strong> The graphically and text based content on the website belongs to Get Help
                            For Online Class and is its intellectual property. All other names, logos and trademarks of other
                            organization belong to their original owners. We don't purposefully entail any kind of endorsement
                            via these trademarks and logos of different organizations.</p>
                    </div>
                </div>

                <div class="sec-copyright">
                    <div class="container">
                        <div class="fflex fflex justify-content-center">
                            <p>Copyright © <b class="foot-b">2024 Get Help For Online Class</b> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer