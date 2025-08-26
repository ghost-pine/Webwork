import { Link } from "react-router-dom";

const BlogDetailsLeft1 = () => {
    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
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
                            <h3>Recent Blogs</h3>
                            <div className="sidebar-blog-boxs">
                                <div className="sidebar-blogs">
                                    <div className="">
                                        <div className="image">
                                            <img src="/assets/img/blog/blog-details-sidebar1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading">
                                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 19/02/2024</a>
                                        <h5><Link to="/blog/blog-details">We take a deep dive into the future of cloud computing </Link></h5>
                                    </div>
                                </div>

                                <div className="sidebar-blogs">
                                    <div className="">
                                        <div className="image">
                                            <img src="/assets/img/blog/blog-details-sidebar2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading">
                                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 19/02/2024</a>
                                        <h5><Link to="/blog/blog-details">Our team of experts will provide in-depth analysis </Link></h5>
                                    </div>
                                </div>

                                <div className="sidebar-blogs">
                                    <div className="">
                                        <div className="image">
                                            <img src="/assets/img/blog/blog-details-sidebar3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading">
                                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 19/02/2024</a>
                                        <h5><Link to="/blog/blog-details">Our case studies and success stories highlight real-world </Link></h5>
                                    </div>
                                </div>

                                <div className="sidebar-blogs">
                                    <div className="">
                                        <div className="image">
                                            <img src="/assets/img/blog/blog-details-sidebar3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading">
                                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 19/02/2024</a>
                                        <h5><Link to="/blog/blog-details">One of the primary objectives of cybersecurity is to protect </Link></h5>
                                    </div>
                                </div>

                            </div>
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

                    </div>

                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src="/assets/img/others/project-details-img1.png" alt="" />
                                    </div>
                                    <div className="social-users">
                                        <ul>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon1.png" alt="" /> John William</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon2.png" alt="" /> Feb 25, 24</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon3.png" alt="" /> Cyber Security</a></li>
                                            <li><a href="#"><img src="/assets/img/icons/user-icon4.png" alt="" /> 03 Comments</a></li>
                                        </ul>
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h2>Protecting Your Business in the Digital Age of Cyber Security</h2>
                                        <div className="space16"></div>
                                        <p>In todays interconnected world, cybersecurity has become a critical concern for businesses of all sizes. With cyber threats evolving rapidly and the increasing reliance on digital technology, the importance of cybersecurity cannot be overstated. In this blog post, we will delve into why cybersecurity is essential for protecting your business in the digital age.</p>
                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Preventing Cyber Attacks</h5>
                                        <div className="space16"></div>
                                        <p>Cyber attacks come in many forms, from phishing scams and malware infections to ransomware attacks and DDoS (Distributed Denial of Service) attacks. These attacks can have devastating consequences for businesses, ranging from financial losses and reputational damage to legal liabilities. By investing in cybersecurity measures such as firewalls, intrusion detection systems, and security awareness training, businesses can reduce their susceptibility to cyber attacks and the impact of security incidents.</p>
                                    </div>

                                    <div className="space40"></div>
                                    <div className="heading1">
                                        <h5>Ensuring Business Continuity</h5>
                                        <div className="space16"></div>
                                        <p>In addition to protecting against external threats, cybersecurity also plays a crucial role in ensuring business continuity. In the event of a cyber attack or data breach, systems may be disrupted, data may be lost or corrupted, and downtime can result in significant financial losses. By implementing measures such as regular data backups, disaster recovery plans, and incident response protocols, businesses can minimize the impact of cyber incidents and maintain continuity of operations, even in the face adversity.</p>
                                    </div>

                                </div>
                            </article>

                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="video-area-image">
                                        <div className="image">
                                            <img src="/assets/img/blog/blog-post-video-img.png" alt="" />
                                        </div>
                                    </div>

                                    <div className="space30"></div>
                                    <div className="heading1">
                                        <h5>Maintaining Regulatory Compliance</h5>
                                        <div className="space20"></div>
                                        <p>Furthermore, cybersecurity is essential for maintaining compliance with various regulations and industry standards governing data privacy and security. Non-compliance can result in significant fines, legal penalties, and reputational damage to businesses. By implementing security controls and adhering to regulations such as GDPR, HIPAA, and PCI-DSS, businesses can mitigate the risk of regulatory violations and demonstrate their commitment to protecting customer data and privacy.</p>
                                    </div>
                                </div>
                            </article>
                            
                            <div className="blog-details-border"></div>
                            
                            <div className="tags-links">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="tags">
                                            <ul>
                                                <li className="text">Tags:</li>
                                                <li className="tag-text"><a href="#">Business </a></li>
                                                <li className="tag-text"><a href="#">Services </a></li>
                                                <li className="tag-text"><a href="#">IT Solution </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="social">
                                            <ul>
                                                <li className="text">Social:</li>
                                                <li className="icon"><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                                <li className="icon"><a href="#"><i className="bi bi-twitter"></i></a></li>
                                                <li className="icon"><a href="#"><i className="bi bi-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-details-border"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="heading1">
                                        <h5>Blog Comments (2)</h5>

                                        <div className="comment-box">
                                            <div className="box-top-area">
                                                <div className="heading-area">
                                                    <div className="image">
                                                        <img src="/assets/img/blog/comment-box-image1.png" alt="" />
                                                    </div>
                                                    <div className="heading">
                                                        <h5><a href="#">Mr. Ana Ritchie</a></h5>
                                                        <a href="#" className="date">8/1/2024</a>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#"><span><i className="bi bi-reply-fill"></i></span> Reply</a>
                                                </div>
                                            </div>
                                            <div className="space20"></div>
                                            <p className="pera">The team at TechXen goes above and beyond to provide exceptional support and service. From the initial consultation to the final deployment, they were there every step of the way, ensuring a seamless integration of our new technology solution.</p>
                                        </div>

                                        <div className="comment-box comment-box2">
                                            <div className="box-top-area">
                                                <div className="heading-area">
                                                    <div className="image">
                                                        <img src="/assets/img/blog/comment-box-image2.png" alt="" />
                                                    </div>
                                                    <div className="heading">
                                                        <h5><a href="#">Matthew Kuhnemann</a></h5>
                                                        <a href="#" className="date">8/1/2024</a>
                                                    </div>
                                                </div>
                                                <div className="reply-btn">
                                                    <a href="#"><span><i className="bi bi-reply-fill"></i></span> Reply</a>
                                                </div>
                                            </div>
                                            <div className="space20"></div>
                                            <p className="pera">We approached TechXen with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their teams creativity, technical prowess, and dedication to client satisfaction are truly commendable.</p>
                                        </div>

                                    </div>
                                </div>
                            </article>

                            <div className="space50"></div>

                            <div className="contact-form-details">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="number" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button className="theme-btn1">Submit Now <span><i className="bi bi-arrow-right"></i></span></button>
                                        </div>

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

export default BlogDetailsLeft1;