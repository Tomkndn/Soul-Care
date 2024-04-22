import React from "react";
import Doctor from "../Assets/image.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" style={{ borderRadius: "50%" }}/>
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Health Plus, We're a comprehensive online resource dedicated to 
          supporting your mental health journey. Here, you'll find the tools and guidance 
          you need to understand your wellbeing, explore potential concerns, and connect 
          with the right support.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Offer Self-Assessment Tools"
          description="Take advantage of our confidential and non-diagnostic mental health tests. These tests can serve as a starting point for further exploration and self-awareness."
        />

        <SolutionStep
          title="Deliver Personalized Recommendations"
          description="Based on your test results, we offer tailored resources and suggestions. This might include educational materials, relaxation techniques, or recommendations for scheduling a consultation with one of our expert mental health professionals."
        />

        <SolutionStep
          title="Connect You with Expert Care"
          description="If indicated by your test results or personal needs, we offer a seamless way to schedule an appointment with a qualified mental health professional who can provide personalized support."
        />
      </div>
    </div>
  );
}

export default About;
