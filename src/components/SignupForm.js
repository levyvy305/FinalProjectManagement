import { useFormik } from "formik";
import * as Yup from "yup";
import "./form.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePassswordToggle from "../../demo-project/src/hooks/usePassswordToggle";*/

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  /*const [PasswordInputType, ToggleIcon] = usePassswordToggle;*/
  const [action, setAction] = useState("Login");

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      id: "",
      password: "",
      confirmpw: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      id: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z\\d*]{8,20}$/, "Please enter a valid student ID"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Please enter the password"
        ),
      confirmpw: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      console.log(values);
    },
  });

  return (
    <section>
      <div className="wrapper">
        <div className="inforform">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <h1 className="title"> {action}</h1>
            </div>
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="inputbox">
                <label htmlFor="name">Your name</label>
                <input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
                {formik.errors.name && (
                  <p className="errorMsg"> {formik.errors.name} </p>
                )}
              </div>
            )}

            <div className="inputbox">
              <label htmlFor="email">Email address</label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                placeholder="Youremail@gmail.com"
                id="email"
                name="email"
              />
              {formik.errors.email && (
                <p className="errorMsg"> {formik.errors.email} </p>
              )}
            </div>

            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="inputbox">
                <label htmlfor="text">Student ID</label>
                <input
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Enter your Student ID"
                  id="id"
                  name="id"
                />
                {formik.errors.id && (
                  <p className="errorMsg"> {formik.errors.id} </p>
                )}
              </div>
            )}


      <div className="inputbox">
      <label htmlFor="password">Password</label>
      <div className="password-input">
        <input
         className="password-input-field"
          value={formik.values.password}
          onChange={formik.handleChange}
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Enter your Password"
          id="password"
          name="password"
        />
        <button
          className="toggle-password"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? 'Hide' : 'Show'}
        </button>
      </div>
              {formik.errors.password && (
                <p className="errorMsg"> {formik.errors.password} </p>
              )}
            </div>

            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="inputbox">
                <label htmlfor="password">Confirm Password</label>
                <input
                  value={formik.values.confirmpw}
                  onChange={formik.handleChange}
                  type="password"
                  placeholder="Confirm your Password"
                  id="confirmpw"
                  name="comfirmpw"
                />
                {formik.errors.confirmpw && (
                  <p className="errorMsg"> {formik.errors.confirmpw} </p>
                )}
              </div>
            )}

            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/forget"> Forgot Password?</Link>
              </div>
            )}

            <div className="btn-submit">
              {action === "Sign Up" ? (
                <div></div>
              ) : (
                <div>
                  <button type="submit" className="btn">
                    Login
                  </button>
                </div>
              )}
              {action === "Login" ? (
                <div> </div>
              ) : (
                <div>
                  <button type="submit" className="btn">
                    Register
                  </button>
                </div>
              )}
            </div>

            {/* <div className="login-register">
              <button
                className={
                  action === "Login" ? "submit gray transform" : "submit"
                }
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign Up
              </button>
              <button
                className={action === "Sign Up" ? "submit gray" : "submit"}
                onClick={() => {
                  setAction("Login");
                }}
              >
                Login
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
