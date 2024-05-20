import React, { useEffect, useState } from 'react'
import "./order_form.css"
import PageSelect from './Order_page_testing';
import Order_form_Country from './Order_form_Country';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import detail_img_1 from './assets/project imgs/24-7-badge.png'
import detail_img_2 from './assets/project imgs/detail-img-2.png'
import detail_img_3 from './assets/project imgs/detail-img-3-removebg-preview (2).png'
import detail_badge from './assets/project imgs/badge.png'

const Order_form = () => {

    const [selectedService, setSelectedService] = useState('Online Course Work');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [enteredTopic, setEnteredTopic] = useState('');
    const [selectedPaperStandard, setSelectedPaperStandard] = useState("Standard Quality");
    const [selectedDeadline, setSelectedDeadline] = useState('10 Days');
    const [selectedStyleChange, setSelectedStyle] = useState('Harvard Referencing');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [noOfPages, setNumberofPages] = useState(1)
    const [pricePerPage, setPricePerPage] = useState(8)
    const [totalPrice, setTotalPrice] = useState(null)
    const [word, setWord] = useState(300)

    useEffect(() => {
        const wordcount = noOfPages * 300
        setWord(wordcount)
    }, [noOfPages])


    const calculateTotalPrice = () => {
        const paperStandardsPrice = {
            'Standard Quality': 0,
            'Premium Quality': 5,
        };
        const deadlinePrice = {
            '4 Hours': 0,
            '8 Hours': 0,
            '12 Hours': 0,
            '1 Day': 0,
            '2 Days': 0,
            '3 Days': 0,
            '4 Days': 0,
            '5 Days': 0,
            '6 Days': 0,
            '7 Days': 0,
            '8 Days': 0,
            '9 Days': 0,
            '10 Days': 0,
            '11 Days': 0,
            '12 Days': 0,
            '13 Days': 0,
            '14 Days': 0,
            '15 Days': 0,
            '16 Days': 0,
            '17 Days': 0,
            '18 Days': 0,
            '19 Days': 0,
            '20 Days': 0,
            '21 Days': 0,
            '22 Days': 0,
            '23 Days': 0,
            '24 Days': 0,
            '25 Days': 0,
            '26 Days': 0,
            '27 Days': 0,
            '28 Days': 0,
            '29 Days': 0,
            '30 Days': 0,
        };

        let pricePerPage;
        switch (selectedDeadline) {
            case "4 Hours":
                pricePerPage = 34;
                break;
            case "8 Hours":
                pricePerPage = 29;
                break;
            case "12 Hours":
                pricePerPage = 24;
                break;
            case "1 Day":
                pricePerPage = 20;
                break;
            case "2 Days":
                pricePerPage = 18;
                break;
            case "3 Days":
            case "4 Days":
            case "5 Days":
                pricePerPage = 12;
                break;
            case "6 Days":
            case "7 Days":
            case "8 Days":
            case "9 Days":
                pricePerPage = 10;
                break;
            case "10 Days":
            case "11 Days":
            case "12 Days":
            case "13 Days":
            case "14 Days":
            case "15 Days":
            case "16 Days":
            case "17 Days":
            case "18 Days":
            case "19 Days":
            case "20 Days":
            case "21 Days":
            case "22 Days":
            case "23 Days":
            case "24 Days":
            case "25 Days":
            case "26 Days":
            case "27 Days":
            case "28 Days":
            case "29 Days":
            case "30 Days":
                pricePerPage = 8;
                break;
            default:
                pricePerPage = 8;
                break;
        }

        const standardPrice = pricePerPage * noOfPages;
        const paperStandardAdjustment = paperStandardsPrice[selectedPaperStandard] || 0;
        const deadlineAdjustment = deadlinePrice[selectedDeadline] || 0;

        // Calculate adjusted price per page based on deadline
        const adjustedPricePerPage = (pricePerPage + deadlineAdjustment)


        setPricePerPage(adjustedPricePerPage); // Update price per page state

        setTotalPrice(standardPrice + paperStandardAdjustment + deadlineAdjustment);
    };

    useEffect(() => {
        calculateTotalPrice()
    }, [selectedSubject, enteredTopic, selectedPaperStandard, selectedDeadline, noOfPages, selectedService])

    const handleTopicChange = (event) => {
        setEnteredTopic(event.target.value);
    };

    const serviceOptions = [
        'Essay writing',
        'Assignment Writing',
        'Research Paper writing',
        'Course Work',
        'case study',
        'Term Paper',
        'Online Exam Quizzes',
        'Homework',
        'Editing',
        'Formatting',
        'Proofreading',
        'Annotated Bibliography',
        'Speech/Presentation',
        'PowerPoint Presentation',
        'Thesis',
        'Thesis Proposal',
        'Dissertation',
        'Dissertation Chapter- Abstract',
        'Dissertation Chapter- Introduction Chapter',
        'Dissertation Chapter- Literature Review',
        'Dissertation Chapter- Methodology',
        'Dissertation Chapter- Result',
        'Dissertation Chapter- Discussion',
        'Book Report',
        'Book Review',
        'Movie Review',
        'Research Proposal',
        'Case Study',
        'Article',
        'Article Critique',
        'Admission Essays',
        'Admission Sevices - Editing',
        'Psychology',
        'Religious studies',
        'Shakespeare',
        'Sociology',
        'Statistics',
        'Technology',
        'Web, High tech',
        'Womens & gender studies',
        'World Affairs',
        'World Literature',
        'Zoology',
        'Thesis Writing',
        'Custom essay writing',
        'College Essay writing',
        'Write my Paper',
        'College Paper',
        'Online Exam Quizzes',
        'Resume writing',
        'Business letter writing',
        'SEO Optimized Articles',
        'Blog Writing',
        'Web Content Writing',
        'Other'
    ];

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    const handleStyleChange = (event) => {
        setSelectedStyle(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handlePaperStandardChange = (event) => {
        setSelectedPaperStandard(event.target.value);
    };

    // Array of deadline options
    const deadlines = [
        '4 Hours', '8 Hours', '12 Hours', '1 Day', '2 Days', '3 Days', '4 Days',
        '5 Days', '6 Days', '7 Days', '8 Days', '9 Days', '10 Days', '11 Days',
        '12 Days', '13 Days', '14 Days', '15 Days', '16 Days', '17 Days', '18 Days', '19 Days',
        '20 Days', '21 Days', '22 Days', '23 Days', '24 Days', '25 Days', '26 Days',
        '27 Days', '28 Days', '29 Days', '30 Days'
    ];

    // Function to handle change in deadline selection
    const handleDeadlineChange = (event) => {
        setSelectedDeadline(event.target.value);
    };


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      navigate("/Thank_You");
    };
    return (

        <form onSubmit={handleFormSubmit}>
            <div className="order-section">
                <div className="col-lg-12">
                    <div className="background-image-order">
                        <div className="overlay">
                            <div className="row mx-0">
                                <div className="col-lg-4 mt-3">
                                    <div className="container">
                                        <div className="order">
                                            <div className="order-main">
                                                <h2 className="header-form">Order Details</h2>
                                                <div className="tab">
                                                    <div>
                                                        <div className="order-input">

                                                            <div>
                                                                <h3 style={{ fontSize: '15px', fontFamily: 'jost' }} className="mb-1">Type of Service</h3>
                                                                <select className="order-select" name="service" value={selectedService} onChange={handleServiceChange}>
                                                                    {serviceOptions.map((option, index) => (
                                                                        <option key={index} value={option}>{option}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <h3 style={{ fontSize: '15px', marginBottom: '0.25rem', fontFamily: 'jost' }}>
                                                                    Task/Academic Level
                                                                </h3>
                                                                <select className="order-select">
                                                                    <option value="High School">High School</option>
                                                                    <option value="Undergraduate" selected>
                                                                        Undergraduate
                                                                    </option>
                                                                    <option value="Master's">Master's</option>
                                                                    <option value="Doctoral">Doctoral</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <h3 style={{ fontSize: '15px', marginBottom: '0.25rem', fontFamily: 'jost' }}>
                                                                    Select Subject
                                                                </h3>
                                                                <select className="order-select" name="subject" value={selectedSubject} onChange={handleSubjectChange}>
                                                                    <option value="">Select a subject</option>
                                                                    <option value="Biology">Biology</option>
                                                                    <option value="Chemistry">Chemistry</option>
                                                                    <option value="Classics English literature">Classics English literature</option>
                                                                    <option value="Computer science">Computer science</option>
                                                                    <option value="Economics">Economics</option>
                                                                    <option value="Education">Education</option>
                                                                    <option value="Engineering">Engineering</option>
                                                                    <option value="Algebra">Algebra</option>
                                                                    <option value="Calculus">Calculus</option>
                                                                    <option value="Mathematics">Mathematics</option>
                                                                    <option value="Physics">Physics</option>
                                                                    <option value="Social science">Social science</option>
                                                                    <option value="Psychology">Psychology</option>
                                                                    <option value="International Relation">International Relation</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <h3 style={{ fontSize: '15px', marginBottom: '0.25rem', fontFamily: 'jost' }}>
                                                                    Referencing Style
                                                                </h3>
                                                                <select className="order-select" name="referencing" value={selectedStyleChange} onChange={handleStyleChange}>
                                                                    <option value="APA Referencing">APA Referencing</option>
                                                                    <option value="Harvard Referencing">Harvard Referencing</option>
                                                                    <option value="Chicago Referencing">Chicago Referencing</option>
                                                                    <option value="MLA Referencing">MLA Referencing</option>
                                                                    <option value="Oxford Referencing">Oxford Referencing</option>
                                                                    <option value="Turabian Referencing">Turabian Referencing</option>
                                                                    <option value="CBE Referencing">CBE Referencing</option>
                                                                    <option value="Not applicable">Not applicable</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <h3 style={{ fontSize: "15px", marginBottom: "0.25rem", fontFamily: "jost" }}>
                                                                    Number of Sources
                                                                </h3>
                                                                <select className="order-select" name="sources">
                                                                    {[...Array(20).keys()].map((index) => (
                                                                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <h3 style={{ fontSize: "15px", marginBottom: "0.25rem", fontFamily: "jost" }}>
                                                                    Paper Standard
                                                                </h3>
                                                                <select className="order-select" id="paperStandards" name="Paper_Standard" value={selectedPaperStandard} onChange={handlePaperStandardChange}>
                                                                    <option data-price="+13.00" value="Premium Quality">Premium Quality</option>
                                                                    <option data-price="8.00" value="Standard Quality">Standard Quality</option>
                                                                </select>
                                                            </div>



                                                            < PageSelect noOfPages={noOfPages} setNumberofPages={setNumberofPages} />

                                                            <div>
                                                                <h3 style={{ fontSize: "15px", marginBottom: "0.25rem", fontFamily: "jost" }}>
                                                                    Preferred Language Style
                                                                </h3>
                                                                <select className="order-select" name="language">
                                                                    <option value="British">English (British)</option>
                                                                    <option value="U.S">English (U.S)</option>
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <h3 style={{ fontSize: "15px", marginBottom: "0.25rem", fontFamily: "jost" }}>
                                                                    Select Paper Format
                                                                </h3>
                                                                <select id="paperFormat" name="Paper_Format" className="order-select">
                                                                    <option selected data-price="+0" value="Double Spaced">
                                                                        Double Spaced
                                                                    </option>
                                                                    <option data-price="+9" value="Single Spaced">
                                                                        Single Spaced
                                                                    </option>
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <h3 style={{ fontSize: '15px', marginBottom: '0.25rem', fontFamily: 'jost' }}>
                                                                    Select Deadline
                                                                </h3>
                                                                <select className="order-select" id="deadlines" name="deadline" value={selectedDeadline} onChange={handleDeadlineChange}>
                                                                    {/* Loop over the deadline options and create option elements */}
                                                                    {deadlines.map((deadline, index) => (
                                                                        <option key={index} data-price="-8" value={deadline}>{deadline}</option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>

                                                            <div className="order-topic">
                                                                <div>
                                                                    <h3 style={{ fontSize: '15px', fontFamily: 'jost' }} className="mb-1 mt-1">
                                                                        Enter Topic
                                                                    </h3>
                                                                    <input type="text" name="topic" placeholder="Topic Of Paper" id="topic" className="order-topic-text" required value={enteredTopic} onChange={handleTopicChange} />
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-3">
                                    <div className="order-contact">
                                        <h2 className="header-contact">Contact Details</h2>
                                        <div className="contact-main">
                                            <div className="tab">
                                                <div className="user-input">
                                                    <div className="user-name">
                                                        <h3 style={{ fontSize: '15px', fontFamily: 'jost' }} className="mb-1">Your Name:</h3>
                                                        <input style={{ marginRight: '10px' }} className="contact-input" name='name' placeholder="Enter Full Name" type="text" value={name} onChange={handleNameChange} required />
                                                    </div>

                                                    <div className="user-email">
                                                        <h3 style={{ fontSize: '15px', fontFamily: 'jost' }} className="mb-1">Your Email:</h3>
                                                        <input className="contact-input" placeholder="Enter Email Address" name='email' type="email" value={email} onChange={handleEmailChange} required />
                                                    </div>
                                                </div>

                                                <div className="w-full mt-3">
                                                    <h3 style={{ fontSize: '15px', fontFamily: 'jost' }} className="mb-1">
                                                        Your Phone Number:
                                                    </h3>
                                                    <input className="contact-input" type="number" name="phone" placeholder="Enter Phone Number" required />
                                                </div>


                                                <Order_form_Country />

                                                <div className="mt-3">
                                                    <h3 style={{ fontSize: '15px', fontFamily: 'jost' }} className="mb-1">Additional Notes (Instructions)</h3>
                                                    <textarea className="contact-text-input" name="message" placeholder="The more instructions you provide, the better our writers can craft an essay that meets your needs." style={{ resize: 'none' }} required></textarea>
                                                </div>

                                                <div className="mt-3">
                                                    <h3 style={{ fontSize: '15px', fontFamily: 'jost' }} className="mb-1">
                                                        Additional Files
                                                    </h3>
                                                    <input
                                                        accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/plain, !application/x-rar-compressed !application/zip"
                                                        multiple
                                                        id="order_file_submit"
                                                        className="contact-files"
                                                        type="file"
                                                        name="orderFiles[]"
                                                    />
                                                </div>

                                                <div className="input-check mt-3">
                                                    <input type="checkbox" checked/>
                                                    <h3 style={{ fontSize: '15px', fontFamily: 'jost' }} className="mt-2 mx-2">
                                                        I agree with  
                                                         
                                                         <Link to={"/Privacy"} className="underline" >  Privacy Policy</Link>
                                                        <Link to={"/Term"} className="underline" href="terms.html">  Terms of Use</Link>
                                                    </h3>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 mt-3">
                                    <div className="container">
                                        <div className="order-detail">
                                            <h2 className="header-detail">Order Summary</h2>
                                            <div className="topics-container">

                                                <div className="detail-text">
                                                    <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">Topic Of Paper:</h3>
                                                    <h4 id="topic-display" style={{ fontWeight: '600', fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', color: 'black' }}>
                                                        {enteredTopic || "-------"}
                                                    </h4>
                                                </div>
                                            </div>


                                            <div className="detail-text">
                                                <h3 style={{ fontSize: 18, fontFamily: "jost" }} className="mx-3">
                                                    Referencing Style:
                                                </h3>
                                                <h4 id="referencing-style-display" style={{ fontWeight: 600, fontSize: 18, whiteSpace: "nowrap", overflow: "hidden", color: "black" }}>
                                                    {selectedStyleChange}
                                                </h4>
                                            </div>

                                            <div className="detail-text">
                                                <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">Paper Standard:</h3>
                                                <h4 id="paper-standard-display" style={{ fontWeight: 600, fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', color: 'black' }}>{selectedPaperStandard}</h4>
                                            </div>

                                            <div className="detail-text">
                                                <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">Deadline:</h3>
                                                <h4 id="deadline-display" style={{ fontWeight: 600, fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', color: 'black' }}>
                                                    {selectedDeadline}
                                                </h4>
                                            </div>

                                            <div className="detail-text">
                                                <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">No. Of Pages:</h3>
                                                <h4 id="page-count" style={{ fontWeight: 600, fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', color: 'black' }}>
                                                    {noOfPages}
                                                </h4>
                                            </div>


                                            <div className="detail-text">
                                                <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">Word Count:</h3>
                                                <h4 id="word-count" style={{ fontWeight: 600, fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', color: 'black' }}>
                                                    {word}
                                                </h4>
                                            </div>

                                            <div className="detail-text">
                                                <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">Price Per Page:</h3>
                                                <h4 id="price-per-page" style={{ fontWeight: 600, fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', color: 'black' }}>
                                                    {"£" + "  " + parseInt(pricePerPage)}
                                                </h4>
                                            </div>

                                            <div className="detail-text">
                                                <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">Total Price:</h3>
                                                <h4 id="total-price" style={{ fontWeight: '600', fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', color: 'black' }}>
                                                    {"£" + "  " + parseInt(totalPrice)}
                                                </h4>
                                            </div>

                                            <div className="detail-text">
                                                <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">
                                                    Turnitin Report
                                                </h3>
                                                <h4 style={{ fontWeight: 600, fontSize: '18px', whiteSpace: 'nowrap', overflow: 'hidden', color: 'black' }}>
                                                    Free
                                                </h4>
                                            </div>

                                            <div className="detail-text">
                                                <h3 style={{ fontSize: '18px', fontFamily: 'jost' }} className="mx-3">Discount</h3>
                                                <h4 style={{ fontWeight: '600', fontFamily: 'jost', color: 'white', fontSize: '13px', borderRadius: '1.5rem', backgroundColor: '#00a3c0', padding: '8px' }} className="px-2 py-2">50% OFF</h4>
                                            </div>

                                            <div className="my-2">
                                                <button id="submitButton" name="submit" className="detail-btn" type="submit">Place Order </button>
                                            </div>


                                            <div className="detail-img">
                                                <img height={150} width={100} src={detail_img_1} alt="detail_img_1" className="img-detail" />
                                                <img height={150} width={100} src={detail_img_2} alt="detail_img_2" className="img-detail" />
                                                <img height={150} width={100} src={detail_img_3} alt="detail_img_3" className="img-detail" />
                                            </div>


                                            <div>
                                                <h3 style={{ fontSize: '16px', fontFamily: 'jost', fontWeight: '500', marginTop: '10px' }}>
                                                    With Each Order You Get
                                                </h3>
                                                <ul className="detail-content">
                                                    <li className="detail-list">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="detail-list-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                        </svg>
                                                        Money-Refund Policy if the work is found unsatisfactory
                                                    </li>

                                                    <li className="detail-list">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="detail-list-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                        </svg>
                                                        On-time delivery of the assignment
                                                    </li>

                                                    <li className="detail-list">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="detail-list-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                        </svg>
                                                        Free Turnitin Report to prove the authenticity of content
                                                    </li>

                                                    <li className="detail-list">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="detail-list-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                        </svg>
                                                        24*7 Customer Assistance to resolve queries
                                                    </li>

                                                    <li className="detail-list">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="detail-list-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                        </svg>
                                                        100% Ownership to the clients
                                                    </li>

                                                    <li className="detail-list">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="detail-list-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                        </svg>
                                                        Privacy of confidential information
                                                    </li>

                                                    <li className="detail-list">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="detail-list-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                        </svg>
                                                        Free Unlimited Revisions if we do not match your expectations
                                                    </li>

                                                    <li className="detail-list">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="detail-list-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                                        </svg>
                                                        Exclusive offers and discounts
                                                    </li>
                                                </ul>
                                            </div>

                                            <img class="detail-badge" src={detail_badge} width={"300"} height={"150"}  alt="detail_badge" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Order_form