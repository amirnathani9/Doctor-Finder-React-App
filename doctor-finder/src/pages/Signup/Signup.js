import { useDocumentTitle } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useReducer } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useAuth } from "../../context/auth-context";

export function Signup() {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const initialSignUpValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const signUpReducer = (state, action) => {
    switch (action.type) {
      case "FIRST_NAME":
        return { ...state, firstName: action.payload };
      case "LAST_NAME":
        return { ...state, lastName: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "CONFIRM_PASSWORD":
        return { ...state, confirmPassword: action.payload };
      case "CLEAR":
        return {
          ...state,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };

      default:
        return state;
    }
  };

  const [signUpState, signUpDispatch] = useReducer(
    signUpReducer,
    initialSignUpValue
  );

  const { firstName, lastName, email, password, confirmPassword } = signUpState;

  const signUpBtnHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        firstName
      );
      await updateProfile(auth.currentUser, {
        displayName: firstName,
      });

      authDispatch({ type: "AUTH_SUCCESS", payload: response.user });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useDocumentTitle("Doctor Finder - Signup");
  return (
    <>
      <section className="signup-section section-center flex justify-center items-center">
        <div className="signup-main-container flex flex-col items-center border-radius-2">
          <h1 className="section-heading font-bold border-radius-1 p-2 my-2">
            Signup
          </h1>
          <form>
            <label className="input-label my-2">
              First Name*
              <input
                type="text"
                placeholder="Enter your first name"
                className="input border-radius-1"
                required
                value={firstName}
                onChange={(e) => {
                  signUpDispatch({
                    type: "FIRST_NAME",
                    payload: e.target.value,
                  });
                }}
              />
            </label>
            <label className="input-label my-2">
              Last Name*
              <input
                type="text"
                placeholder="Enter your last name"
                className="input border-radius-1"
                required
                value={lastName}
                onChange={(e) => {
                  signUpDispatch({
                    type: "LAST_NAME",
                    payload: e.target.value,
                  });
                }}
              />
            </label>
            <label className="input-label my-2">
              Email*
              <input
                type="email"
                placeholder="Enter your email"
                className="input border-radius-1"
                required
                value={email}
                onChange={(e) => {
                  signUpDispatch({ type: "EMAIL", payload: e.target.value });
                }}
              />
            </label>
            <label className="input-label my-2">
              Password*
              <input
                type="password"
                placeholder="Enter your password"
                className="input border-radius-1"
                required
                value={password}
                onChange={(e) => {
                  signUpDispatch({ type: "PASSWORD", payload: e.target.value });
                }}
              />
            </label>
            <label className="input-label my-2">
              Confirm Password*
              <input
                type="password"
                placeholder="Enter your password again"
                className="input border-radius-1"
                required
                value={confirmPassword}
                onChange={(e) => {
                  signUpDispatch({
                    type: "CONFIRM_PASSWORD",
                    payload: e.target.value,
                  });
                }}
              />
            </label>
            <label className="flex items-center font-bold my-4 letter-spacing-zero">
              <input type="checkbox" /> I accept all the Terms & Conditions
            </label>
            <button
              className="btn primary-outline-btn font-size-6 border-radius-1 py-3"
              onClick={(e) => {
                signUpBtnHandler(e);
              }}
            >
              Signup
            </button>
          </form>
          <Link to="/login" className="new-account-btn">
            Already have an account{" "}
            <i className="fas fa-long-arrow-alt-right mx-1"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
