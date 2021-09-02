import '../styles/footer.scss'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Logo from '../images/CloudDevs_01-white-new-font.svg'
import heart from '../images/heart.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <div className='footer-top'>
          <div className='footer-description'>
            <h2>Ready to get started?</h2>
            <p>Be matched with a talent or team of Latin America’s best based on your needs!</p>
          </div>
          <div className='footer-button'>
            <Link to='/connect/'>
              <Button variant="outlined" color="primary">
                Hire Now
              </Button>
            </Link>
          </div>
        </div>
        <div className='footer-middle'>
          <div className='footer-menu'>
            <div className='footer-name'>
              <div className='footer-logo'>
                <img src={Logo} alt="footer logo" />
              </div>
              <div className='footer-made'>
                <p>Made with <img src={heart} width='30px' alt='heart' /> in London & San Francisco.</p>
              </div>
            </div>
            <ul>
              <li><span>Talents</span></li>
              <li>UI / UX Designers</li>
              <li>Django Developers</li>
              <li>React Native Developers</li>
              <li>React JS Developers</li>
              <li>Angular JS Developers</li>
              <li>Web developers</li>
              <li>Python Developers</li>
              <li>iOS Developers</li>
              <li>Flutter Developers</li>
              <li>Android Developers</li>
              <li>Laravel Developers</li>
              <li>Drupal Developers</li>
              <li>Java Developers</li>
              <li>.NET Developers</li>
              <li>C# Developers</li>
              <li>Salesforce Developers</li>
              <li>SAP Developers</li>
            </ul>
            <ul>
              <li><span>Resources</span></li>
              <li>Join Our Pool</li>
              <li>Hire Now</li>
              <li>How We Work</li>
              <li>3D Bay</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
            <ul>
              <li><span>Social</span></li>
              <li>Dribble</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;