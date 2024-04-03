import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet";
const Register = () => {
  const { registerUser,setUser } = useContext(AuthContext);
  console.log(setUser);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(email, name, password, photo, confirmPassword);
    if (password.length < 6) {
      setError("Your password added at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Your password Not matching");
      return;
    }
    if (!/.*\d{2,}$/.test(password)) {
      setError("password must end at least two number");
      return;
    }
    setError("");
    
    registerUser(email, password)
    .then(result =>{setUser(result.user)
    if(result.user){
        form.reset();
    }})
    .catch(error => setError(error.message))
    
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className=" lg:w-1/2 mx-auto border border-green-300 p-3 rounded-lg">
          <div>
            <p className="font-bold">Your name</p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <p className="font-bold">Your Photo</p>
            <input
              type="text"
              name="photo"
              placeholder="Your photo"
              required
              className="input input-bordered w-full "
            />
          </div>
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
          <div className="relative">
            <p className="font-bold">Password</p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your password "
              required
              className="input input-bordered w-full "
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="lg:absolute top-10 right-4"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div>
            <p className="font-bold">Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Your password "
              required
              className="input input-bordered w-full "
            />
          </div>
          <button className="btn btn-secondary w-full mt-3">Rigister</button>
          {<small className="text-red-600">{error}</small>}
          <br />
          <button className="btn btn-link">
            <Link to="/login">Please Login</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
