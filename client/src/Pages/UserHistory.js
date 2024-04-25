import React from 'react';
import Ucart from '../Pages/Ucart.js';
import useGetData from '../Auth/useGetData.js';
import { useAuth } from '../Auth/useAuth.js';

function History() {
    const { user } = useAuth();
    const { data, error } = useGetData(
      `http://localhost:5000/gethistory?email=${user?.email}`
    );
    console.log(error);
    return (
        <div>
            {data.map((hist, index) => {
                return (
                  <Ucart
                    key={index}
                    name={hist.doctor}
                    appointmentTime={hist.appointmentTime}
                    preferMode={hist.preferredMode}
                    symptomsLevel={hist.symptomsLevel}
                    mentalTestScore={hist.mentalTestScore}
                  />
                );
            })}
        </div>
    );
};

export default History;