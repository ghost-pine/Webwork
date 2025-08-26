import data from '../../Data/Home1/award1.json';

const Award1 = () => {
    return (
        <div className="">
          <div className="container">
            <div className="row hero-bottom-area">
            {data.map((item, i) => (
              <div key={i} className="col-lg-3">
                <div className="single-box">
                  <div className="icon">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="headding">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
    );
};

export default Award1;