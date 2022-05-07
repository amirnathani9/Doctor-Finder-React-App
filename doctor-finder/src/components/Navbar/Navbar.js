import { Link } from "react-router-dom"
import "./Navbar.css"
export function Navbar() {
    return (<>
      <nav className="navbar-container sticky z-5">
            <div className="navbar-logo-container">
                <Link to="/"><h3 className="navbar-logo">Doctor Finder</h3></Link>
            </div>
            <div className="navbar-items-container">
                <div className="navbar-search-container">
                    <input type="text" className="navbar-search" placeholder="What you are looking for?" />
                    <i className="fas fa-search navbar-search-btn"></i>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/login"><i className="fas fa-user"></i>Login</Link></li>
                </ul>
            </div>
        </nav>
        
    </>)
};
