import React from 'react';
import Ucart from '../Pages/Ucart.js';

const PatientCard ={
    name:"Yash Goyal",
    appointmentTime:"2024-4-24",
    preferMode:"voice",
    symptomsLevel:"Moderate",
    mentalTestScore:45
} 

function History(){
    return (
        <div>
            <Ucart 
                name={PatientCard.name}
                appointmentTime={PatientCard.appointmentTime}
                preferMode={PatientCard.preferMode}
                symptomsLevel={PatientCard.symptomsLevel}
                mentalTestScore={PatientCard.mentalTestScore} 
            />
            <Ucart 
                name={PatientCard.name}
                appointmentTime={PatientCard.appointmentTime}
                preferMode={PatientCard.preferMode}
                symptomsLevel={PatientCard.symptomsLevel}
                mentalTestScore={PatientCard.mentalTestScore} 
            />
            <Ucart 
                name={PatientCard.name}
                appointmentTime={PatientCard.appointmentTime}
                preferMode={PatientCard.preferMode}
                symptomsLevel={PatientCard.symptomsLevel}
                mentalTestScore={PatientCard.mentalTestScore} 
            />
            <Ucart 
                name={PatientCard.name}
                appointmentTime={PatientCard.appointmentTime}
                preferMode={PatientCard.preferMode}
                symptomsLevel={PatientCard.symptomsLevel}
                mentalTestScore={PatientCard.mentalTestScore} 
            />
        </div>
    );
};

export default History;