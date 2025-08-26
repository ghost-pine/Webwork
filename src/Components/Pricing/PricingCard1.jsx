import { Link } from "react-router-dom";

const PricingCard1 = ({addClass,popularTitle,title,price,monthly,content,featuretitle,featurelist,btnname,btnUrl}) => {
    return (
        <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1100">
        <div className={addClass}>
        { popularTitle &&
          <div className="most-popular">
            <p>{popularTitle}</p>
          </div>
        }

          <p className="title">{title}</p>
          <h2>{price}<span>/ {monthly}</span></h2>
          <p className="pera">{content} </p>

          <div className="border"></div>

          <h4>{featuretitle}</h4>
          <ul className="list">
          {featurelist?.map((item, index) => (
            <li key={index}><span><i className="bi bi-check-lg"></i></span> {item}</li>
        ))}
          </ul>

          <div className="space30"></div>
          <div className="button">
            <Link className="theme-btn1" to={btnUrl}>{btnname} <span><i className="bi bi-arrow-right"></i></span></Link>
          </div>
          
        </div>
      </div>
    );
};

export default PricingCard1;