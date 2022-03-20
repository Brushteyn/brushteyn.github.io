import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li><NavLink className={navData => navData.isActive ? 'active' : ''} to="/">Home</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? 'active' : ''} to="/Posts">Posts</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? 'active' : ''} to="/About">About</NavLink></li>
        <li><NavLink className={navData => navData.isActive ? 'active' : ''} to="/Contacts">Contacts</NavLink></li>
      </ul>
    </div>
  );
}

export default Nav;
