import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  console.log(location)
  const navigate = useNavigate();
  const { loginUser ,googleLogin,setUser,user,faceBookLogin} = useContext(AuthContext);

  // console.log(loginUser);
  const handleLongin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const passoword = e.target.password.value;
    setSuccess("");
    setError("");
    loginUser(email, passoword)
      .then((result) => {
        console.log(result.user)
        setSuccess("This page login successfully");
        form.reset()
      })
      .catch((error) => setError(error.message));
    // console.log(email, passoword);
    
  };
  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result =>setUser(result.user))
    .catch(error =>console.error(error))
}
const handleFacebookLogin =() =>{
    faceBookLogin()
    .then(result => setUser(result.user))
    .catch(error =>setError(error.message))
}
useEffect(()=>{
    if(user){
        navigate(location.state)
    }
},[user])
  return (
    <div className=" lg:w-1/2 mx-auto border border-green-400 p-3 rounded-lg">
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <form onSubmit={handleLongin}>
        <div>
          <div>
            <p className="font-bold">Your Email</p>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <p className="font-bold">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Your password "
              required
              className="input input-bordered w-full "
            />
          </div>
          <button className="btn btn-secondary w-full mt-3">Login</button>
          
          {<p>{error}</p>}
          {<p>{success}</p>}
        </div>
      </form>
      <div>
      <button onClick={handleGoogleLogin} className="btn btn-primary mt-3 w-full">Google Login</button>
          <button onClick={handleFacebookLogin} className="btn btn-primary mt-3 w-full">Facebook</button>
          <button className="btn btn-link">
            <Link to="/register">Please Register</Link>
          </button>
      </div>
    </div>
  );
};

export default Login;
