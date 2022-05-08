import "./Login.css";
import { useDocumentTitle } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useAuth } from "../../context/auth-context";

export function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });

  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const loginBtnHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        login.email,
        login.password
      );
      authDispatch({ type: "AUTH_SUCCESS", payload: response.user });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useDocumentTitle("Doctor Finder - Login");
  return (
    <div>
      <section className="login-section section-center flex justify-center items-center">
        <div className="login-main-container flex flex-col items-center border-radius-2">
          <h1 className="section-heading font-bold border-radius-1 p-2 my-4">
            Login
          </h1>
          <form>
            <label className="input-label my-4">
              Username*
              <input
                type="text"
                placeholder="Enter your username"
                className="input border-radius-1"
                required
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
              />
            </label>
            <label className="input-label my-4">
              Password*
              <input
                type="password"
                placeholder="Enter your password"
                className="input border-radius-1"
                required
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </label>
            <div className="flex items-center">
              <label className="flex items-center font-bold my-4 letter-spacing-zero">
                <input type="checkbox" /> Remember me
              </label>
              <div className="forget-password letter-spacing-zero ml-8">
                Forget your Password
              </div>
            </div>
            <button
              className="btn primary-outline-btn font-size-6 border-radius-1 py-3"
              onClick={(e) => loginBtnHandler(e)}
            >
              Login
            </button>
          </form>
          <Link to="/signup" className="new-account-btn">
            Create New Account
            <i className="fas fa-long-arrow-alt-right mx-1"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}
