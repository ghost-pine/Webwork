import About3 from "../Components/About/About3";
import Blog3 from "../Components/Blog/Blog3";
import HomeFaq1 from "../Components/Faq/HomeFaq1";
import HeroBanner3 from "../Components/HeroBanner/HeroBanner3";
import HowWork2 from "../Components/HowWork/HowWork2";
import Project2 from "../Components/Project/Project2";
import Services3 from "../Components/Services/Services3";
import Team2 from "../Components/Team/Team2";

const Home3 = () => {
    return (
        <div>
            <HeroBanner3
                bgImg="/assets/img/bg/hero3-bg.png"
                title="Drive Success With Tailored IT Solutions For Your <span class='span'>Business</span>"
                conetnt="Welcome to TechXen, where we specialize in delivering tailored technology and IT solutions designed <br/> to propel your business forward. From streamlining operations to boosting productivity "
                mainImage="/assets/img/hero/hero3-main-img.png"
                shape1="/assets/img/shapes/hero3-circle-shape.png"
                shape2="/assets/img/shapes/image-shape3.png"
                footerTitle="It Consulting & Support"
                footerContent="Navigate the complexities of the <br> digital landscape with confidence"
            ></HeroBanner3>
            <About3></About3>
            <Services3></Services3>
            <HowWork2></HowWork2>
            <Project2></Project2>
            <Team2></Team2>
            <HomeFaq1></HomeFaq1>
            <Blog3></Blog3>
        </div>
    );
};

export default Home3;