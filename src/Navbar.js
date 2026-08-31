
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
         <nav>
                <div className="nav_1">
                    <a href="">About</a>
                    <a href="">Store</a>
                </div>
                <div className="nav_2">
                    <a href="">Gmail</a>
                    <a href="">Images</a>
                    <Link to="/Sign" className="Sign_in">Sign in</Link>
                </div>
            </nav>    
    );
}
 
export default Navbar;