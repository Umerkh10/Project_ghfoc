import React from 'react'
import "./About.css"
import background from './assets/about-imgs/background-about.webp'

const About_Card = () => {
  return (
    <div>

<section class="we-offer-area text-center">
        <div class="background-image-form" style={{backgroundImage:`url(${background})`,backgroundPosition:`center`,backgroundSize:`cover`}}>
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                <h1 class="sec_hed_red fade-in text-center pb-2 text-white pb-2 mt-3">OUR PROMISES &
                                    GUARANTEES</h1>
                                <h3 class="hed-sec-3">Setting The Benchmark With Outstanding Services That Shine Bright
                                </h3>
                                <p class="para-blue">More than just assisting you to ace your grades, we open doors for
                                    you to realize and surpass your academic aspirations! Boasting a proficient team of
                                    seasoned tutors, our offerings are unparalleled in value. If you're aiming for that
                                    exceptional academic journey, let's embark on it together!</p>
                            </div>

                            <div class="row our-offer-items less-carousel">
                                <div class="col-lg-3 col-sm-6 equal-height">
                                    <div class="item">
                                        <i class="fa-solid fa-graduation-cap"></i>
                                        <h4>Always Here For You | 24/7 Availability</h4>
                                        <p class="service-ovrf">With Assignment Help, rest assured you're getting
                                            top-tier quality. Our dedicated team, filled with Ph.D. experts, crafts
                                            every document from the ground up, ensuring originality. Every piece we
                                            produce undergoes intensive proofreading and editing stages, making sure
                                            it's up to university standards. Choose us for unparalleled excellence and a
                                            commitment to delivering only the best!</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 equal-height">
                                    <div class="item">
                                        <i class="fa-regular fa-money-bill-1"></i>
                                        <h4>Swift Assignment Turnaround</h4>
                                        <p class="service-ovrf">Get Help For Online Class® operates on the principle of
                                            ensuring mutual
                                            benefits for our clients. We offer top-tier services at pocket-friendly
                                            rates, and we value the trust students place in us. Should there ever be an
                                            instance where our service doesn't meet your expectations, we promise a
                                            no-hassle refund. Trust us to prioritize your academic needs, delivering
                                            quality work without weighing down your wallet.</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6 equal-height">
                                    <div class="item">
                                        <i class="fa-solid fa-star"></i>
                                        <h4>Qualified Specialists In Every Field</h4>
                                        <p class="service-ovrf">Assignment Help in Karachi stands out because of our
                                            commitment to excellence. Every piece we deliver is held to the highest
                                            standards, ensuring you get the best possible grade. Our team is packed with
                                            experts who are dedicated to providing deep and well-researched content
                                            tailored to your needs. And if you ever have any concerns or queries, just
                                            give us a shout. Our top-notch customer service is just another reason why
                                            we're a cut above the rest!</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6 equal-height">
                                    <div class="item">
                                        <i class="fa-solid fa-star"></i>
                                        <h4>Rated 4.5/5</h4>
                                        <p class="service-ovrf">We're thrilled to have received such positive feedback
                                            from our valued clients. Their affirming reviews reflect our unwavering
                                            dedication to quality and service. Being a front-runner in the field is a
                                            testament to our hard work. Dive in and discover the exceptional customer
                                            experience we offer!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default About_Card