import FaqContent1 from "./FaqContent1";
import FaqContent2 from "./FaqContent2";

const HomeFaq1 = () => {
    return (
        <div className="faq3 sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading3">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700"> FAQS</span>
                <h2 className="title tg-element-title">Frequently Asked Question About Our Technology & IT Solution</h2>
              </div>
            </div>
          </div>
  
          <div className="space40"></div>
          <div className="row">
            <div className="col-lg-6">
              <FaqContent1></FaqContent1>
            </div>

            <div className="col-lg-6">
              <FaqContent2></FaqContent2>
            </div>
  
          </div>
        </div>
       </div>
    );
};

export default HomeFaq1;