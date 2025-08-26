import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import ServiceDetailsLeft1 from "../Components/ServiceDetails/ServiceDetailsLeft1";

const ServiceDetailsLeft = () => {
    return (
        <div>
            <BreadCumb Title="Service Details Left"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ServiceDetailsLeft1></ServiceDetailsLeft1>
            <Cta1></Cta1>
        </div>
    );
};

export default ServiceDetailsLeft;