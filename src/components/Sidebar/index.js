import { Link,NavLink } from 'react-router-dom'
import { useState} from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-w.png'
import LogoSubtitle from '../../assets/images/logo_sub1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBookReader, faBars, faClose, faUserTie } from '@fortawesome/free-solid-svg-icons' 
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/' onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="wally" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink 
       
                activeclassname="active" 
                className="about-link" 
                to="/about" onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
          
                activeclassname="active"
                className="skill-link"
                to="/skills" 
                onClick={() => setShowNav(false)}
            >
            <FontAwesomeIcon icon={faBookReader} color="#4d4d4e" />
            </NavLink>
            <NavLink 
               
                activeclassname="active" 
                className="profile-link" 
                to="/profile" 
                onClick={() => setShowNav(false)}
            >
            <FontAwesomeIcon icon={faUserTie} color="#4d4d4e" />
            </NavLink>
            <NavLink 
               
                activeclassname="active" 
                className="contact-link" 
                to="/contact" 
                onClick={() => setShowNav(false)}
            >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className='close-icon' />

        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://www.youtube.com/channel/UC46E44wu9_12cgP7e1ROdgQ'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://www.facebook.com/AllSeeingEye08'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://www.instagram.com/chrstn_wlly/               ppp'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://www.tiktok.com/@cwaliiii?_t=8VjX4pDMUPy&_r=1'>
                    <FontAwesomeIcon icon={faTiktok} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon' />
    </div>
)
}
export default Sidebar