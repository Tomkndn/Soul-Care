import React, { useState } from "react";
import '../Styles/Login.css'
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success("Registered Successfully");
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        navigation("/login");
      } else {
        const data = await response.json();
        toast.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="p-5 shadow-lg rounded-3 mb-4 boxx"> {/* Adjusted padding */}
            <h1 className="text-primary mb-4 text-center">Register</h1>
            <form onSubmit={handleSubmit} method="post">
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  onBlur={handleChange}
                  type="text"
                  name="username"
                  className="form-control"
                  id="exampleInputName"
                  style={{ width: "100%" }}
                  required
                />
              </div>
              <div className="mb-7">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  onBlur={handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  style={{ width: "100%" }}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  onBlur={handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  style={{ width: "100%" }}
                  required
                />
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <button
                  type="submit"
                  className="btn btn-primary w-50 py-2"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="row row-cols-7 g-3 mt-2 icon_box">
              <div className="col text-end">
                <button type="button" className="btn btn-primary">
                  <i className="fab fa-google text-white"></i>
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary">
                  <i className="fab fa-github text-white"></i>
                </button>
              </div>
            </div>
            <div className="mt-4 text-center">
              Already Have Account?{" "}
              <Link to="/login" className="text-decoration-none fw-bold">
                Login Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
