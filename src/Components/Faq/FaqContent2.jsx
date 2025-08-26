import { useEffect, useRef, useState } from "react";
import data from '../../Data/home3/faq2.json';

const FaqContent2 = () => {

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
        setOpenItemIndex(4);
        setFirstItemOpen(false);
      }
    }, [firstItemOpen]);


    return (
        <div className="accordion accordion2 accordion-flush" id="accordionFlushExample2">

        {data.map((item, index)=>(
        <div key={index} className={`accordion-item ${index === openItemIndex ? "active" : "" }`} >
          <h2 onClick={() => handleItemClick(index)} className="accordion-header" id="flush-headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
            {item.title}
            </button>
          </h2>
          <div ref={accordionContentRef} id="flush-collapseSix" className="accordion-collapse collapse accordion-content" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample2">
            <div className="accordion-body">{item.desc}</div>
          </div>
        </div>
        ))}


      </div>
    );
};

export default FaqContent2;