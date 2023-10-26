import { useFormik } from "formik";
import * as Yup from "yup";
import "./form.css";

export const ForgetForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      id: "",
      password: "",
      confirmpw: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
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
      window.alert("Congratulations");
      console.log(values);
    },
  });

  return (
    <section>
      <div className="wrapper">
        <div className="inforform">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="title"> Find Your Account </h2>
            <div className="inputbox">
              <label htmlFor="email"> Confirm your Email</label>
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

            <div className="inputbox">
              <label htmlfor="password">Password</label>
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                placeholder="Enter your Password"
                id="password"
                name="password"
              />
              {formik.errors.password && (
                <p className="errorMsg"> {formik.errors.password} </p>
              )}
            </div>

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

            <button type="submit" className="btn">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetForm;
