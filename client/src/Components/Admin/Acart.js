import React from 'react';
import "./Astyle/Aappointment.css";

function Acart(props) {
    const { name, number, gender, appointmentTime, preferMode, symptomsLevel, mentalTestScore } = props;
    
    return (
        <div className="patient-card" style={{ marginBottom: '20px' }}>
            <div className="info">
                <p><span className="label">Name:</span> {name}</p>
                <p><span className="label">Patient Number:</span> {number}</p>
                <p><span className="label">Gender:</span> {gender}</p>
                <p><span className="label">Appointment Time:</span> {appointmentTime}</p>
                <p><span className="label">Preferred Mode:</span> {preferMode}</p>
                <p><span className="label">Level of Symptoms:</span> {symptomsLevel}</p>
                <p><span className="label">Mental Test Score:</span> {mentalTestScore}</p>
                
            </div>
            <div className="button-container">
                <button className="button">Accept</button>
                <button className="button reject-button">Reject</button>
            </div>
        </div>
    );
};

export default Acart;
