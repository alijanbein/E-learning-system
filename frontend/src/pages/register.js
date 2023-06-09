import { useContext, useRef } from "react";
import UseHttp from "../hooks/http-hook";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const passwordRef = useRef("");
  const emailRef = useRef("");
  const Register = async () => {
    const first_name = firstNameRef.current.value;
    const last_name = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = {
      first_name,
      last_name,
      email,
      password,
    };

    
   try {
    const Response = await UseHttp("auth/register","POST",data,{
      "Content-Type": "application/json"
    });
    if(Response.status == "succes"){
      
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/login")
      }
   } catch (error) {
    console.error();
   }
  };

  return (
    <div className="reg-container">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <div className="register-form">
          <div className="name-container">
            <div className="small">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="First Name"
                ref={firstNameRef}
              />
            </div>
            <div className="small">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Last Name"
                ref={lastNameRef}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="email" ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password">Enter your Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>

          {/* <div>
          <label htmlFor="image">Upload your image</label>
          <input id="image" type="file" ref={imageRef}/>
        </div> */}

          <button
            onClick={Register}
            className="register-button"
            id="register-button"
          >
            Register
          </button>
          <div className="register-link">
            Already registered? <a href="/login">Login Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
