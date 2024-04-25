import React from 'react';
import Acart from "./Acart.js";
import useGetData from '../../Auth/useGetData'


function Aappointment() {
    const { data } = useGetData('http://localhost:5000/getappointment');
    return (
        <div>
            {data.map((appoint,index) => {
                return (
                  <Acart
                    key={index}
                    id={appoint._id}
                    email={appoint.userEmail}
                    name={appoint.patientName}
                    number={appoint.patientNumber}
                    gender={appoint.patientGender}
                    appointmentTime={appoint.appointmentTime}
                    preferMode={appoint.preferredMode}
                    symptomsLevel={appoint.symptomsLevel}
                    mentalTestScore={appoint.mentalTestScore}
                  />
                );
        })}
        </div>
    );
};

export default Aappointment;
