import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="p-5 shadow-lg rounded-3 mb-4"> {/* Added mb-4 for bottom margin */}
            <h1 className="text-primary mb-4 text-center">Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  onBlur={(e) => setEmail(e.target.value)}
                  type="email"
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
                  onBlur={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  style={{ width: "100%" }}
                  required
                />
              </div>
              <button
                onClick={() => {
                  if (email && password) {
                    // processLogin(email, password);
                  }
                }}
                type="submit"
                className="btn btn-primary w-100"
              >
                Sign in
              </button>
            </form>
            <div className="row row-cols-2 g-3 mt-4">
              <div className="col text-center">
                <button type="button" className="btn btn-primary">
                  <i className="fab fa-google text-white"></i>
                </button>
              </div>
              <div className="col text-center">
                <button type="button" className="btn btn-primary">
                  <i className="fab fa-github text-white"></i>
                </button>
              </div>
            </div>
            <div className="mt-4 text-center">
              New user?{" "}
              <Link to="/register" className="text-decoration-none fw-bold">
                Register Here
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
