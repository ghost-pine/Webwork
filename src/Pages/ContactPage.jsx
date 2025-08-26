import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";

const ContactPage = () => {
    return (
        <div>
            <BreadCumb Title="Contact Us"></BreadCumb>
            <MarqueeText></MarqueeText>
            <ContactInfo1></ContactInfo1>
            <Cta1></Cta1>
        </div>
    );
};

export default ContactPage;