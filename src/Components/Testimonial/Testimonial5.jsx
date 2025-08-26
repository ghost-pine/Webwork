import data from '../../Data/testimonialPage.json';

const Testimonial5 = () => {
    return (
        <div className="testimonial-page-all sp tes-page">
        <div className="container">
            <div className="row">
            {data.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                    <div className="single-slider">
                        <div className="icon">
                          <img src="/assets/img/icons/about-page-qute.png" alt="" />
                        </div>
                        <p className="pera">{item.desc}</p>
      
                        <div className="bottom-area">
                          <div className="author">
                            <a href="#">{item.title}</a>
                          </div>
                          <div className="reating">
                            <ul>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star-half"></i></li>
                            </ul>
                            <p>{item.rating}</p>
                          </div>
                        </div>
                      </div>
                </div>
                ))}

            </div>

        </div>
     </div>
    );
};

export default Testimonial5;