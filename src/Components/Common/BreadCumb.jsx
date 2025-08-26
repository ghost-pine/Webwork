import { Link } from "react-router-dom";

const BreadCumb = ({Title}) => {
    
    return (

      <div className="common-hero" >
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-6 m-auto">
            <div className="main-heading">
              <h1>{Title}</h1>
                <div className="space16"></div>
                <span className="span"><img src="/assets/img/icons/span1.png" alt="" /> <Link to="/">Home</Link><span className="arrow"><i className="bi bi-chevron-right"></i></span> {Title}</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    );
};

export default BreadCumb;