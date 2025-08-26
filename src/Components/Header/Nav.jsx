import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>  
            <li>
              <Link to="/home4" onClick={() => setMobileToggle(false)}>
                Home Version 4
              </Link>
            </li>
            <li>
              <Link to="/home5" onClick={() => setMobileToggle(false)}>
                Home Version 5
              </Link>
            </li>                                     
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/about" onClick={() => setMobileToggle(false)}>
        About Us  
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
              About Light
              </Link>
            </li>
            <li>
              <Link to="/aboutdark" onClick={() => setMobileToggle(false)}>
              About Dark
              </Link>
            </li>                        
          </ul>
        </DropDown>

      </li>      

      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
              Testimonial
              </Link>
            </li>  
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>         
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>                        
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
                Project
              </Link>
            </li>           
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
                 Project Details
              </Link>
            </li> 
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>      
      <li className="menu-item-has-children">
        <Link to="/project" onClick={() => setMobileToggle(false)}>
        Project  
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
              Project Light
              </Link>
            </li>
            <li>
              <Link to="/projectDark" onClick={() => setMobileToggle(false)}>
              Project Dark
              </Link>
            </li>            
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
                Project Details Left
              </Link>
            </li>
            <li>
              <Link to="/project/project-details-right" onClick={() => setMobileToggle(false)}>
              Project Details Right
              </Link>
            </li>
            <li>
              <Link to="/project/project-details-center" onClick={() => setMobileToggle(false)}>
              Project Details Center
              </Link>
            </li> 
            <li>
              <Link to="/project/project-details-dark" onClick={() => setMobileToggle(false)}>
                Project Details Left Dark
              </Link>
            </li>
            <li>
              <Link to="/project/project-details-right-dark" onClick={() => setMobileToggle(false)}>
                Project Details Right Dark
              </Link>
            </li> 
            <li>
              <Link to="/project/project-details-center-dark" onClick={() => setMobileToggle(false)}>
                Project Detail Center Dark
              </Link>
            </li>                                                              
          </ul>
        </DropDown>

      </li>      
      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services Light
              </Link>
            </li>
            <li>
              <Link to="/serviceDark" onClick={() => setMobileToggle(false)}>
                Services Dark
              </Link>
            </li>           
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details Left
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-right" onClick={() => setMobileToggle(false)}>
                Service Details Right
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-center" onClick={() => setMobileToggle(false)}>
                Service Details Center
              </Link>
            </li> 
            <li>
              <Link to="/service/service-details-dark" onClick={() => setMobileToggle(false)}>
                Service Details Left Dark
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-right-dark" onClick={() => setMobileToggle(false)}>
                Service Details Right Dark
              </Link>
            </li>
            <li>
              <Link to="/service/service-details-center-dark" onClick={() => setMobileToggle(false)}>
                Service Detail Center Dark
              </Link>
            </li>                       
          </ul>
        </DropDown>

      </li>      
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog Light
              </Link>
            </li> 
            <li>
              <Link to="/blogdark" onClick={() => setMobileToggle(false)}>
                Blog Dark
              </Link>
            </li>                      
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Left
              </Link>
            </li>
            <li>
              <Link to="/blog/blog-details-right" onClick={() => setMobileToggle(false)}>
              Blog Details Right
              </Link>
            </li>  
            <li>
              <Link to="/blog/blog-details-center" onClick={() => setMobileToggle(false)}>
              Blog Details Center
              </Link>
            </li> 
            <li>
              <Link
                to="/blog/blog-details-dark"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details Left Dark
              </Link>
            </li>
            <li>
              <Link to="/blog/blog-details-right-dark" onClick={() => setMobileToggle(false)}>
              Blog Details Right Dark
              </Link>
            </li>  
            <li>
              <Link to="/blog/blog-details-center-dark" onClick={() => setMobileToggle(false)}>
              Blog Detail Center Dark
              </Link>
            </li>           

          </ul>
        </DropDown>
      </li>
    </ul>
  );
}
