import { Link } from "react-router-dom";

const Blog2 = () => {
    return (
        <div className="blog sp">
            <div className="container">
            <div className="row">
                <div className="ocl-lg-6 text-center m-auto">
                <div className="heading2">
                    <span className="span"><img src="/assets/img/icons/span2.png" alt="" /> Our Blog</span>
                    <h2 className="title tg-element-title">See Our Latest Blog & News</h2>
                </div>
                </div>
            </div>

            <div className="space30"></div>
            <div className="row">
                <div className="col-lg-6">
                <div className="blog2-box" data-aos="zoom-in-up" data-aos-duration="800">
                    <div className="image image-anime">
                    <img src="/assets/img/blog/blog2-img2.png" alt="" />
                    </div>
                    <div className="heading2">
                    <div className="tags">
                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 10/02/2024</a>
                        <a href="#" className="date outhor"><img src="/assets/img/icons/user.png" alt="" /> Ben Cutting</a>
                    </div>
                    <h4><Link to="/blog/blog-details">The Importance of Cybersecurity</Link></h4>
                    <div className="space16"></div>
                    <p>We explore the growing trend of remote work and its implications for cybersecurity.</p>
                    <div className="space16"></div>
                    <Link to="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
                </div>

                <div className="col-lg-6">
                <div className="blog2-box" data-aos="zoom-in-up" data-aos-duration="1100">
                    <div className="image image-anime">
                    <img src="/assets/img/blog/blog2-img1.png" alt="" />
                    </div>
                    <div className="heading2">
                    <div className="tags">
                        <a href="#" className="date"><img src="/assets/img/icons/date.png" alt="" /> 10/02/2024</a>
                        <a href="#" className="date outhor"><img src="/assets/img/icons/user.png" alt="" /> Ben Cutting</a>
                    </div>
                    <h4><Link to="/blog/blog-details">The Future of Cloud Computing</Link></h4>
                    <div className="space16"></div>
                    <p>We take a deep dive into the future of cloud computing and discuss emerging trends and predictions that the industry.</p>
                    <div className="space16"></div>
                    <Link to="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Blog2;