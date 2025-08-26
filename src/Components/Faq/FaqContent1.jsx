import { useEffect, useRef, useState } from "react";
import data from '../../Data/home3/faq1.json';

const FaqContent1 = () => {


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
        <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">

        {data.map((item, index)=>(
        <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : "" }`} data-aos="fade-up" data-aos-duration="700">
          <h2 onClick={() => handleItemClick(index)} className="accordion-header" id="flush-headingOne">
            <button className="accordion-button" type="button">
            {item.title}
            </button>
          </h2>
          <div ref={accordionContentRef} id="flush-collapseOne" className="accordion-collapse collapse accordion-content">
            <div className="accordion-body">{item.desc}</div>
          </div>
        </div>
        ))}


      </div>
    );
};

export default FaqContent1;