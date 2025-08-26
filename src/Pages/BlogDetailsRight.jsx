import Blog7 from "../Components/Blog/Blog7";
import BlogDetailsRight1 from "../Components/BlogDetails/BlogDetailsRight1";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";

const BlogDetailsRight = () => {
    return (
        <div>
            <BreadCumb Title="Blog Details Right"></BreadCumb>
            <MarqueeText></MarqueeText>
            <BlogDetailsRight1></BlogDetailsRight1>
            <Blog7></Blog7>
            <Cta1></Cta1>
        </div>
    );
};

export default BlogDetailsRight;