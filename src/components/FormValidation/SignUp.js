import React from "react";
import "./SignUp.css";
import { useFormik } from "formik";
import { object, string } from "yup";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: object({
      name: string().min(3, "name mast have 3 characters.").required().trim(),
      email: string().email().required("email is missing"),
      password: string().min(6, "password mast have 6 characters.").required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  console.log(formik.errors);

  return (
    <div>
      <h1>User signUp</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          value={formik.values.name}
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
        />
        <br />
        {formik.touched.name && formik.errors.name && (
          <p>{formik.errors.name}</p>
        )}
        <input
          name="email"
          value={formik.values.email}
          type="email"
          placeholder="email"
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}

        <br />
        <input
          name="password"
          value={formik.values.password}
          type="password"
          placeholder="password"
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}

        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
