import { useEffect, useRef, useState } from "react";
import data from '../../Data/home3/faq1.json';
import { Link } from "react-router-dom";

const ServiceDetailsRight2 = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
  
    const handleItemClick = index => {
      if (index === openItemIndex) {
        setOpenItemIndex(-1);
      } else {
        setOpenItemIndex(index);
      }
    };
    useEffect(() => {
      if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);

    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-8 details-right-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src="/assets/img/service/service-details-img.png" alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Software Development</h2>
                                        <div className="space16"></div>
                                        <p>Welcome to TechXen IT Solutions, your premier destination for comprehensive software development services tailored to meet your business needs. Our team of experienced developers is dedicated to delivering high-quality, scalable, and innovative software solutions that drive business growth success.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Our Approach</h5>
                                                <div className="space16"></div>
                                                <p>At TechXen IT Solutions, we take a client-centric approach to software development, prioritizing your unique requirements and objectives. Our process begins with a thorough understanding of your business goals, target audience, and technical specifications. We then collaborate closely with you at every stage of the development cycle to ensure that the final product exceeds your expectations.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Custom Development</h5>
                                                <div className="space20"></div>
                                                <p>Our team specializes in developing custom software solutions tailored to address your specific business challenges. Whether you need a web application, mobile app, or enterprise </p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="space30"></div>
                                            <div className="heading1">
                                                <h5>Development Services</h5>
                                                <div className="space20"></div>
                                                <p>From initial concept and design to development, testing, and deployment, we offer comprehensive full-cycle development services to ensure a seamless and efficient development process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Our Approach</h5>
                                        <div className="space16"></div>
                                        <p>At TechXen IT Solutions, we take a client-centric approach to software development, prioritizing your unique requirements and objectives. Our process begins with a thorough understanding of your business goals, target audience, and technical specifications. We then collaborate closely with you at every stage of the development cycle to ensure that the final product exceeds your expectations.</p>

                                        <div className="space20"></div>
                                        <ul className="expart-list">
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Frontend:</span> (HTML, CSS, JavaScript, React, Angular, Vue.js)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Backend:</span> (Node.js, Python, Ruby on Rails, PHP, .NET)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Database:</span> (MySQL, MongoDB, PostgreSQL, Oracle)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Mobile:</span> (iOS (Swift), Android (Java, Kotlin), React Native)</li>
                                            <li><span className="check"><i className="bi bi-check-lg"></i></span> <span className="text">Cloud Platform:</span> (AWS, Azure, Google Cloud Platform)</li>
                                        </ul>
                                </div>
                            </div>
                            </article>

                            <div className="space20"></div>

                            <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon1.png" alt="" />
                                    </div>
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details">Consulting Service</Link></h4>
                                      <div className="space16"></div>
                                      <p>Strategic IT planning  roadmap development Business process analysis and improvement for It solution & technology.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                              <div className="col-lg-6 col-md-6">
                                <div className="">
                                  <div className="servcie2-box servcie2-box-2">
                                    <div className="icon">
                                      <img src="/assets/img/icons/service-page-icon2.png" alt="" />
                                    </div>
                                    <Link to="/service/service-details" className="arrow"><i className="bi bi-arrow-right"></i></Link>
                                    <div className="heading1">
                                      <h4><Link to="/service/service-details">Software Development</Link></h4>
                                      <div className="space16"></div>
                                      <p>Mobile app development for iOS, Android, and cross-platform solutions & web <br/> application.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                
                            </div>

                            <div className="space50"></div>

                            <div className="faq-area-all">
                                <div className="heading1">
                                    <h5>Frequently Asked Question</h5>
                                </div>
                                <div className="space20"></div>

                                <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">

                                {data.slice(0,4).map((item, index)=>(
                                    <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : "" }`}>
                                      <h2 onClick={() => handleItemClick(index)} className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        {item.title}
                                        </button>
                                      </h2>
                                      <div ref={accordionContentRef} id="flush-collapseOne" className="accordion-collapse collapse accordion-content" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">{item.desc}</div>
                                      </div>
                                    </div>
                                    ))}

                                  </div>

                            </div>

                        </div>
                    </div>


                    <div className="col-lg-4">
                      <div className="sidebar-box-area mb-40">
                          <h3>Search by Keyword</h3>
                          <div className="search">
                              <input type="text" placeholder="Type keyword here" /> 

                              <div className="button">
                                  <button><i className="bi bi-search"></i></button>
                              </div>
                          </div>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Our Services</h3>
                          <ul className="features-list">
                                <li><Link to="/service/service-details">Software Development <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">Consulting Service <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">Cloud Solution <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">Cyber Security <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">Data Analytics <span><i className="bi bi-chevron-right"></i></span></Link></li>
                                <li><Link to="/service/service-details">Manage It Services <span><i className="bi bi-chevron-right"></i></span></Link></li>
                          </ul>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Tags</h3>
                          <ul className="tags">
                              <li><a href="#">Software Development</a></li>
                              <li><a href="#">Cloud </a></li>
                              <li><a href="#">It Solution</a></li>
                              <li><a href="#">Data Analytics Service</a></li>
                              <li><a href="#">Technology</a></li>
                              <li><a href="#">Custom Development</a></li>
                              <li><a href="#">Cyber Security</a></li>
                              <li><a href="#">Consulting Service</a></li>
                          </ul>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Download Brochure</h3>
                          <p>With a focus on excellence  &  commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                          <div className="download-btns">
                              <a className="daownload1" href="#">PDF Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                              <a className="daownload2" href="#">DOC Download <img src="/assets/img/icons/download-img.png" alt="" /></a>
                          </div>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Get A Free Quote</h3>
                          <div className="contact-form">
                              <form action="#">
                                  
                                  <div className="single-input">
                                      <input type="text" placeholder="Your Name" />
                                  </div>

                                  <div className="single-input">
                                      <input type="email" placeholder="Email Address" />
                                  </div>

                                  <div className="single-input">
                                      <input type="number" placeholder="Phone Number" />
                                  </div>

                                  <div className="single-input">
                                      <textarea placeholder="Your Message" cols="30" rows="3"></textarea>
                                  </div>

                                  <div className="button">
                                      <button className="theme-btn1">Learn More <span><i className="bi bi-arrow-right"></i></span></button>
                                  </div>
                              </form>
                          </div>
                      </div>

                  </div>
                  
                </div>
            </div>
        </div>

    );
};

export default ServiceDetailsRight2;