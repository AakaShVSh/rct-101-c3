import {React,useState} from "react";
import { Link } from "react-router-dom";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const [count,setcount] = useState(0);
  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">logo</Link>
      <span data-cy="navbar-cart-items-count">cart:({count})</span>
      <button data-cy="navbar-login-logout-button"><Link to="/login" >login</Link></button>
    </div>
  );
};

export default Navbar;
