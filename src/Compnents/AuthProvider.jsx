import { createContext, useState } from "react";
import PropTypes from 'prop-types'
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";
import { set } from "react-hook-form";
export const AuthContext = createContext(null);
const googoleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
console.log(user)
const registerUser = (email,password) =>{
   return createUserWithEmailAndPassword(auth,email,password)
}
const googleLogin = () =>{
    return signInWithPopup(auth,googoleProvider);
}
const faceBookLogin = () =>{
    return signInWithPopup(auth,facebookProvider);
}
const loginUser = (email,password) =>{
   return signInWithEmailAndPassword(auth,email,password);
}
const logOut = () =>{
   return signOut(auth)
}
const unsubscirbe = onAuthStateChanged(auth,(currentUser)=>{
    if(currentUser){
        setUser(currentUser)
    }else{
        setUser(null);
    }
    return ()=>{
        unsubscirbe();
    }
},[])
const authInfo = {registerUser,loginUser,setUser,user,googleLogin,faceBookLogin,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes ={
    children:PropTypes.node,
}
export default AuthProvider;