import React from 'react';
import {Header} from './components/Header';
import {AppointmentList} from './components/AppointmentList';
//import {Appointment} from './components/Appointment';
import { AddAppointment } from './components/AddAppointment';
import {Footer} from './components/Footer';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider >
      <div className="container">
        <Header/> 
        <div className="main">
          <div className="left-container">
            <AddAppointment/>
          </div>
          <div className="right-container">
            <AppointmentList/>
          </div>
        </div>  
        <Footer/>
      </div>
    </GlobalProvider>
  );
}

export default App;
