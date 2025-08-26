import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Vission1 from "../Components/Mission/Vission1";
import Service6 from "../Components/Services/Service6";

const ServicePage = () => {
    return (
        <div className="service-page">
            <BreadCumb Title="Our Services"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Service6></Service6>
            <Vission1></Vission1>
            <Cta1></Cta1>
        </div>
    );
};

export default ServicePage;