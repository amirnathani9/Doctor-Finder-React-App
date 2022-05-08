import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase-config";
import { useAuth } from "../../context/auth-context";
import "./Navbar.css";
export function Navbar() {
  const {
    authState: { user },
    authDispatch,
  } = useAuth();
  const logoutBtnHandler = async () => {
    await signOut(auth);
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <nav className="navbar-container sticky z-5">
        <div className="navbar-logo-container">
          <Link to="/">
            <h3 className="navbar-logo">Doctor Finder</h3>
          </Link>
        </div>
        <div className="navbar-items-container">
          <div className="navbar-search-container">
            <input
              type="text"
              className="navbar-search"
              placeholder="What you are looking for?"
            />
            <i className="fas fa-search navbar-search-btn"></i>
          </div>

          <ul className="navbar-links">
            {user && (
              <Link to="/">
                <li>Hi, {user.displayName}</li>
              </Link>
            )}
            {user ? (
              <Link to="/login" onClick={logoutBtnHandler}>
                <i className="fas fa-user"></i>Logout
              </Link>
            ) : (
              <li>
                <Link to="/login">
                  <i className="fas fa-user"></i>Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
