import Choose2 from "../Components/Choose/Choose2";
import BreadCumb2 from "../Components/Common/BreadCumb2";
import Cta2 from "../Components/Cta/Cta2";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Service6 from "../Components/Services/Service6";

const ServicePageDark = () => {
    return (
        <div className="service-page-dark">
            <BreadCumb2 Title="Our Services"></BreadCumb2>
            <MarqueeText></MarqueeText>
            <Service6></Service6>
            <Choose2></Choose2>
            <Cta2></Cta2>
        </div>
    );
};

export default ServicePageDark;