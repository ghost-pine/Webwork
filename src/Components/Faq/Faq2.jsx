import { useEffect, useRef, useState } from "react";
import data from '../../Data/home3/faq1.json';
import SectionTitle3 from "../Common/SectionTitle3";

const Faq2 = () => {

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
        <div className="faq7 sp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading7">

                <SectionTitle3
                    SubTitle="FAQS"
                    Title="Frequently Asked <span>Question?</span>"
                    content="Got questions? We have got answers. Explore our frequently asked questions to learn more about our IT solutions and how they can benefit your business."
                ></SectionTitle3>

                  <div className="space10"></div>
                  <div className="faq-area">
                    <div className="accordion accordion1" id="accordionExample">
                    {data.slice(0,4).map((item, index)=>(
                      <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : "" }`}>
                        <h2  onClick={() => handleItemClick(index)} className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          {item.title}
                          </button>
                        </h2>
                        <div ref={accordionContentRef} id="collapseOne" className="accordion-collapse collapse accordion-content" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                          {item.desc}
                          </div>
                        </div>
                      </div>
                        ))}

                    </div>
                  </div>

                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-image image-anime" data-aos="zoom-out" data-aos-duration="800">
                  <img src="/assets/img/others/faq6-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Faq2;