import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import TotalItems from '../CartContent/TotalItems';

const Navbar = () => {
    const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
        <nav className="navbar">
            <Link to="/" className="navbar-logo">HarryHardShop</Link>
            <Link className='trolley' to={"/cart"}>
            <MdOutlineAddShoppingCart size={50} style={{ color: "#470302" }} />
            {cart.length > 0 ? <TotalItems/> : null}
            </Link>
        </nav>
    </div>
    )
}



export default Navbar; 