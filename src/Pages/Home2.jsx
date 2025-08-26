import About2 from "../Components/About/About2";
import Blog2 from "../Components/Blog/Blog2";
import Choose2 from "../Components/Choose/Choose2";
import Cta2 from "../Components/Cta/Cta2";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import HowWork1 from "../Components/HowWork/HowWork1";
import Service2 from "../Components/Services/Service2";
import Team1 from "../Components/Team/Team1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";

const Home2 = () => {
    return (
        <div>
            <HeroBanner2
                subTitle="TechXen Technology & It Solution"
                title="Empowering Your Digital Journey With TechXen"
                featureList={[
                    "Software Development",
                    "Cloud Solution",
                    "It Solution",
                    "Data Analytics",
                    "Technology",
                    "Cyber Security",
                    "Consulting Services",
                ]}
                image1="/assets/img/shapes/hero2-shape1.png"
                image2="/assets/img/hero/hero2-main-img1.png"
                image3="/assets/img/hero/hero2-main-img2.png"
            ></HeroBanner2>
            <About2
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum="25"
                experienceTitle="Years Of <br> Experience"
                subTitle="Our Service"
                title="Empower Your Business With Our Comprehensive IT Solutions"
                content="Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At TechXen, we are passionate about harnessing the power of technology to empower businesses a like."
                counName1="IT Consulting"
                CounNum1="100%"
                counName2="Cyber Security"
                CounNum2="98%"
            ></About2>
            <Service2></Service2>
            <Choose2></Choose2>
            <HowWork1></HowWork1>
            <Team1></Team1>
            <Testimonial2></Testimonial2>
            <Blog2></Blog2>
            <Cta2></Cta2>
        </div>
    );
};

export default Home2;