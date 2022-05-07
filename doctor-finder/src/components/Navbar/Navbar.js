import "./Navbar.css"
export function Navbar() {
    return (<>
      <nav className="navbar-container fixed z-5">
            <div className="navbar-logo-container">
                <a href="./index.html"><h3 className="navbar-logo">Doctor Finder</h3></a>
            </div>
            <div className="navbar-items-container">
                <div className="navbar-search-container">
                    <input type="text" className="navbar-search" placeholder="What you are looking for?" />
                    <i className="fas fa-search navbar-search-btn"></i>
                </div>
                <ul className="navbar-links">
                    <li><a href="./navbar.html"><i className="fas fa-user"></i>Login</a></li>
                </ul>
            </div>
        </nav>
    
    </>)
};
