import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import Layout4 from "../Layout/Layout4";
import Home4 from "../Pages/Home4";
import Layout5 from "../Layout/Layout5";
import Home5 from "../Pages/Home5";
import AboutLight from "../Pages/AboutLight";
import ServicePage from "../Pages/ServicePage";
import ProjectPage from "../Pages/ProjectPage";
import ContactPage from "../Pages/ContactPage";
import TeamPage from "../Pages/TeamPage";
import TestimonialPage from "../Pages/TestimonialPage";
import ServiceDetailsLeft from "../Pages/ServiceDetailsLeft";
import ServiceDetailsRight from "../Pages/ServiceDetailsRight";
import ServiceDetailsCenter from "../Pages/ServiceDetailsCenter";
import ProjectDetailsLeft from "../Pages/ProjectDetailsLeft";
import ProjectDetailsRight from "../Pages/ProjectDetailsRight";
import ProejctDetailsCenter from "../Pages/ProejctDetailsCenter";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsLeft from "../Pages/BlogDetailsLeft";
import BlogDetailsRight from "../Pages/BlogDetailsRight";
import BlogDetailsCenter from "../Pages/BlogDetailsCenter";
import Layout6 from "../Layout/Layout6";
import AboutDark from "../Pages/AboutDark";
import ProjectDetailsLeftDark from "../Pages/ProjectDetailsLeftDark";
import ProjectDetailsRightDark from "../Pages/ProjectDetailsRightDark";
import ProjectDetailsCenterDark from "../Pages/ProjectDetailsCenterDark";
import ProjectPageDark from "../Pages/ProjectPageDark";
import ServicePageDark from "../Pages/ServicePageDark";
import ServiceDetailsLeftDark from "../Pages/ServiceDetailsLeftDark";
import ServiceDetailsRightDark from "../Pages/ServiceDetailsRightDark";
import ServiceDetailsCenterDark from "../Pages/ServiceDetailsCenterDark";
import BlogPageDark from "../Pages/BlogPageDark";
import BlogDetailsLeftDark from "../Pages/BlogDetailsLeftDark";
import BlogDetailsRightDark from "../Pages/BlogDetailsRightDark";
import BlogDetailsCenterDark from "../Pages/BlogDetailsCenterDark";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/about",
            element:<AboutLight></AboutLight> ,
        }, 
        {
          path: "/service",
          element:<ServicePage></ServicePage> ,
        }, 
        {
          path: "/service/service-details",
          element:<ServiceDetailsLeft></ServiceDetailsLeft> ,
        }, 
        {
          path: "/service/service-details-right",
          element:<ServiceDetailsRight></ServiceDetailsRight> ,
        },
        {
          path: "/service/service-details-center",
          element:<ServiceDetailsCenter></ServiceDetailsCenter>,
        },                                  
        {
          path: "/project",
          element:<ProjectPage></ProjectPage> ,
        },
        {
          path: "/project/project-details",
          element:<ProjectDetailsLeft></ProjectDetailsLeft>,
        }, 
        {
          path: "/project/project-details-right",
          element:<ProjectDetailsRight></ProjectDetailsRight>,
        }, 
        {
          path: "/project/project-details-center",
          element:<ProejctDetailsCenter></ProejctDetailsCenter>,
        },                       
        {
          path: "/team",
          element:<TeamPage></TeamPage> ,
        }, 
        {
          path: "/testimonial",
          element:<TestimonialPage></TestimonialPage>,
        }, 
        {
          path: "/blog",
          element:<BlogPage></BlogPage> ,
        }, 
        {
          path: "/blog/blog-details",
          element:<BlogDetailsLeft></BlogDetailsLeft>,
        },
        {
          path: "/blog/blog-details-right",
          element:<BlogDetailsRight></BlogDetailsRight>,
        }, 
        {
          path: "/blog/blog-details-center",
          element:<BlogDetailsCenter></BlogDetailsCenter>,
        },                                                
        {
          path: "/contact",
          element:<ContactPage></ContactPage> ,
        },                                                                                 
      ],
    },
    {
      path: 'home2',
      element: <Layout2></Layout2>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        },                           
      ],
    },  
    {
      path: 'home3',
      element: <Layout3></Layout3>,
      children: [
        {
          index: true,
          element: <Home3></Home3>,
        },                           
      ],
    },
    {
      path: 'home4',
      element:<Layout4></Layout4>,
      children: [
        {
          index: true,
          element: <Home4></Home4>,
        },                           
      ],
    },  
    {
      path: 'home5',
      element:<Layout5></Layout5>,
      children: [
        {
          index: true,
          element: <Home5></Home5>,
        },                           
      ],
    }, 
    {
      element:<Layout6></Layout6>,
      children: [
        {
          path: '/aboutdark',
          element: <AboutDark></AboutDark>,
        }, 
        {
          path: '/projectDark',
          element: <ProjectPageDark></ProjectPageDark>,
        },        
        {
          path: "/project/project-details-dark",
          element:<ProjectDetailsLeftDark></ProjectDetailsLeftDark> ,
        },   
        {
          path: "/project/project-details-right-dark",
          element:<ProjectDetailsRightDark></ProjectDetailsRightDark>,
        },  
        {
          path: "/project/project-details-center-dark",
          element:<ProjectDetailsCenterDark></ProjectDetailsCenterDark>,
        }, 
        {
          path: '/serviceDark',
          element: <ServicePageDark></ServicePageDark>,
        }, 
        {
          path: '/service/service-details-dark',
          element: <ServiceDetailsLeftDark></ServiceDetailsLeftDark>,
        },
        {
          path: '/service/service-details-right-dark',
          element: <ServiceDetailsRightDark></ServiceDetailsRightDark>,
        },  
        {
          path: '/service/service-details-center-dark',
          element: <ServiceDetailsCenterDark></ServiceDetailsCenterDark>,
        }, 
        {
          path: '/blogdark',
          element: <BlogPageDark></BlogPageDark>,
        }, 
        {
          path: "/blog/blog-details-dark",
          element:<BlogDetailsLeftDark></BlogDetailsLeftDark>,
        },
        {
          path: "/blog/blog-details-right-dark",
          element:<BlogDetailsRightDark></BlogDetailsRightDark>,
        }, 
        {
          path: "/blog/blog-details-center-dark",
          element:<BlogDetailsCenterDark></BlogDetailsCenterDark>,
        },                                                                                            
      ],
    },                   
  ]);