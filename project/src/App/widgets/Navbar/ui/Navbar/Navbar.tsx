import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
import logo from '../../../../shared/assets/png/logo.png';
import { Button } from '../../../../shared/ui/Button/Button';

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.navbar_wrap}>
          <img className={cls.logo} src={logo} alt="" />
          <ul>
            <Link style={{ textDecoration: 'none', color: '#000' }} to="/">
              <li>Home</li>
            </Link>
            <Link style={{ textDecoration: 'none', color: '#000' }} to="/about">
              <li>About Us</li>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: '#000' }}
              to="/services"
            >
              <li>Services</li>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: '#000' }}
              to="/ourteams"
            >
              <li>Our Teams</li>
            </Link>
          </ul>
          <Link to="/contactus">
            <Button className={cls.btn} variant="default" size="medium">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
