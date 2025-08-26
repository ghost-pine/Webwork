import Blog7 from "../Components/Blog/Blog7";
import BlogDetailsCenter1 from "../Components/BlogDetails/BlogDetailsCenter1";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";

const BlogDetailsCenter = () => {
    return (
        <div>
            <BreadCumb Title="Blog Details Center"></BreadCumb>
            <MarqueeText></MarqueeText>
            <BlogDetailsCenter1></BlogDetailsCenter1>
            <Blog7></Blog7>
            <Cta1></Cta1>
        </div>
    );
};

export default BlogDetailsCenter;