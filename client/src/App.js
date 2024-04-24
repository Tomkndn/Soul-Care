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
import Testpage from "./Pages/Testpage";
import Test from "./Pages/Test";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import {useAuth} from './Auth/useAuth'

function App() {
  const { isSign } = useAuth();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={isSign ? <Appointment /> : <Login />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testpage" element={isSign ? <Testpage /> : <Login />} />
          <Route path="/test" element={isSign ? <Test /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer autoClose={3000} limit={1} closeButton={false} />
    </div>
  );
}

export default App;
