import React from 'react';
import Acart from "./Acart.js";

const PatientCard ={
    name:"Yogesh",
    number:7014931904,
    gender:"Male",
    appointmentTime:"2024-4-24",
    preferMode:"voice",
    symptomsLevel:"Moderate",
    mentalTestScore:45
} 

function Aappointment(){
    return (
        <div>
            <Acart 
                name={PatientCard.name}
                number={PatientCard.number}
                gender={PatientCard.gender}
                appointmentTime={PatientCard.appointmentTime}
                preferMode={PatientCard.preferMode}
                symptomsLevel={PatientCard.symptomsLevel}
                mentalTestScore={PatientCard.mentalTestScore} 
            />
            <Acart 
                name={PatientCard.name}
                number={PatientCard.number}
                gender={PatientCard.gender}
                appointmentTime={PatientCard.appointmentTime}
                preferMode={PatientCard.preferMode}
                symptomsLevel={PatientCard.symptomsLevel}
                mentalTestScore={PatientCard.mentalTestScore} 
            />
            <Acart 
                name={PatientCard.name}
                number={PatientCard.number}
                gender={PatientCard.gender}
                appointmentTime={PatientCard.appointmentTime}
                preferMode={PatientCard.preferMode}
                symptomsLevel={PatientCard.symptomsLevel}
                mentalTestScore={PatientCard.mentalTestScore} 
            />
        </div>
    );
};

export default Aappointment;
