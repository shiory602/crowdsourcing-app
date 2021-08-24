import '../styles/header.scss';
import logo from '../images/newblue.svg';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Header = () => {
  return (
    <>
      <div className='Header'>
        <nav>
          <div className='Header-logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='navbar'>
            <ul>
              <li>
                <Link to='/about'>
                  How We Work
                </Link>
              </li>
              <li>
                <Link to='/hire'>
                  Hire Designers
                </Link>
              </li>
              <li>
                <Link to='pricing'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to='/faqs'>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to='blog'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/apply'>
                  <Button variant="outlined" color="primary">
                    Apply to Join
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='nav-button'>
            <Link to='/apply'>
              <Button variant="contained" color="primary">
                Hire Now
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;