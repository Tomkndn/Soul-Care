import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Doctors from "./Pages/Doctors";
import About from "./Components/About";
import Footer from "./Components/Footer";
function App() {

  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
