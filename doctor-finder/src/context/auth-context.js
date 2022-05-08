import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../config/firebase-config";

const initialAuthValue = {
  user: null,
};

const AuthContext = createContext(initialAuthValue);

const AuthProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "AUTH_SUCCESS":
        return { ...state, user: action.payload };
      case "LOGOUT":
        return { ...state, user: null };
      default:
        return state;
    }
  };
  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      if(user){
          authDispatch({ type: "AUTH_SUCCESS", payload: user });
      }
    })
},[])

  const [authState, authDispatch] = useReducer(authReducer, initialAuthValue);
 


  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
