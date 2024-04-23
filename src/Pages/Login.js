import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
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
              <div className="d-flex align-items-center justify-content-center mt-5">
              <button
                onClick={() => {
                  if (email && password) {
                    // processLogin(email, password);
                  }
                }}
                type="submit"
                className="btn btn-primary w-50 py-2"
              >
                Sign in
              </button>
              </div>
            </form>
            <div className="row row-cols-2 g-3 mt-2">
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
              New user?{" "}
              <Link to="/register" className="text-decoration-none fw-bold">
                Register Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
