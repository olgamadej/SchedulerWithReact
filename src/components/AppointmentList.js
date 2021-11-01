import React, {useContext} from 'react'
import { Appointment } from './Appointment';
import { GlobalContext } from '../context/GlobalState'

export const AppointmentList = () => {
    const {appointments} = useContext(GlobalContext);

    return (
        <div>
            <h3>Appointments</h3>
            <ul className="list">
                {appointments.map(appointment => (<Appointment key={appointment.id} appointment={appointment}/>))}
                

            </ul>
        </div>
    )
}
