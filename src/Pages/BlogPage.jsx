import Blog6 from "../Components/Blog/Blog6";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";

const BlogPage = () => {
    return (
        <div>
            <BreadCumb Title="Blog"></BreadCumb>
            <MarqueeText></MarqueeText>
            <Blog6></Blog6>
            <Cta1></Cta1>
        </div>
    );
};

export default BlogPage;