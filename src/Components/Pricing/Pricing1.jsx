import SectionTitle from "../Common/SectionTitle";
import PricingCard1 from "./PricingCard1";

const Pricing1 = () => {
    return (
        <div className="pricing sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="Our Pricing Plan"
                        Title="Explore Our Flexible Pricing Plans"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">

            <PricingCard1
                addClass="single-pricing-box"
                popularTitle=""
                title="Basic Plan"
                price="$9.9"
                monthly="month"
                content="Ideal for startups and small businesses looking get started essential IT services."
                featuretitle="Featured Included:"
                featurelist={[ 
                    'Network Monitoring',
                    'Helpdesk Support (Limited Hours)',
                    'Basic Cybersecurity Protection',
                ]} 
                btnname="Buy Now"
                btnUrl="#"
            ></PricingCard1>

            <PricingCard1
                addClass="single-pricing-box active"
                popularTitle="Most Popular"
                title="Standard Plan"
                price="$19.9"
                monthly="month"
                content="Perfect for growing businesses that require additional features and support."
                featuretitle="Featured Included:"
                featurelist={[ 
                    '24/7 Network Monitoring',
                    'Dedicated Helpdesk Support',
                    'Advance Cybersecurity Protection',
                    'Cloud Backup & Recovery',
                ]} 
                btnname="Buy Now"
                btnUrl="#"
            ></PricingCard1>            

            <PricingCard1
                addClass="single-pricing-box"
                popularTitle=""
                title="Premium Plan"
                price="$9.9"
                monthly="month"
                content="Tailored for larger enterprises with complex IT needs and stringent security."
                featuretitle="Featured Included:"
                featurelist={[ 
                    'Customised Network Monitoring',
                    'Priority Helpdesk Support',
                    'Comprehensive Cybersecurity Suite',
                    'Disaster Recovery Planning & Testing',
                    'Onsite Support (as needed)',
                ]} 
                btnname="Buy Now"
                btnUrl="#"
            ></PricingCard1> 

            </div>
          </div>
        </div>
    );
};

export default Pricing1;