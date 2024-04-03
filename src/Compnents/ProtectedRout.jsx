import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const ProtectedRout = ({children}) => {
const {user} = useContext(AuthContext);
const location = useLocation();
console.log(location)
if(user){
    return children;
}return <Navigate to='/login' state={location.pathname}></Navigate>
};
ProtectedRout.propTypes ={
    children:PropTypes.node
}
export default ProtectedRout;