import { Link } from "react-router-dom";
import SectionTitle3 from "../Common/SectionTitle3";

const Blog5 = () => {
    return (
        <div className="blog7 sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="heading7">
                <SectionTitle3
                    SubTitle="Our Blog"
                    Title="Explore Our <span>Solutions</span>"
                    content="Whether you are looking to enhance productivity, improve efficiency, or stay ahead of technological advancements, we've got you covered."
                ></SectionTitle3>
                </div>
              </div>
            </div>

            <div className="space20"></div>
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="700">
                <div className="blog-box">
                  <div className="image image-anime">
                    <img src="/assets/img/blog/blog6-img1.png" alt="" />
                  </div>
                  <div className="tags-area">
                    <a href="#" className="tag"><img src="/assets/img/icons/tag6.svg" alt="" /> The IT Corner</a>
                    <a href="#" className="tag"><img src="/assets/img/icons/date6.svg" alt="" /> May,27,2024</a>
                  </div>
                  <div className="heading7">
                    <h4><Link to="/blog/blog-details">Five Ways To Develop A World className Sales Operations Function</Link></h4>
                    <p>Our team of seasoned professionals shares valuable knowledge, tips, and best practices</p>
                    <Link to="/blog/blog-details" className="learn">Learn More <span><i className="bi bi-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="900">
                <div className="blog-box">
                  <div className="image image-anime">
                    <img src="/assets/img/blog/blog6-img2.png" alt="" />
                  </div>
                  <div className="tags-area">
                    <a href="#" className="tag"><img src="/assets/img/icons/tag6.svg" alt="" /> The IT Corner</a>
                    <a href="#" className="tag"><img src="/assets/img/icons/date6.svg" alt="" /> May,27,2024</a>
                  </div>
                  <div className="heading7">
                    <h4><Link to="/blog/blog-details">Succession Risks That Threaten Your Leadership Strategy.</Link></h4>
                    <p>Welcome to our blog, your go-to resource for the latest insights, trends, and updates in the world.</p>
                    <Link to="/blog/blog-details" className="learn">Learn More <span><i className="bi bi-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration="1100">
                <div className="blog-box">
                  <div className="image image-anime">
                    <img src="/assets/img/blog/blog6-img3.png" alt="" />
                  </div>
                  <div className="tags-area">
                    <a href="#" className="tag"><img src="/assets/img/icons/tag6.svg" alt="" /> The IT Corner</a>
                    <a href="#" className="tag"><img src="/assets/img/icons/date6.svg" alt="" /> May,27,2024</a>
                  </div>
                  <div className="heading7">
                    <h4><Link to="/blog/blog-details">What Do Employee Engagement Surveys Tell You About Employee?</Link></h4>
                    <p>Whether you are seeking expert advice on cybersecurity, cloud computing, data analytics,</p>
                    <Link to="/blog/blog-details" className="learn">Learn More <span><i className="bi bi-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
};

export default Blog5;