import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Appointment = ({appointment}) => {
    const {deleteAppointment} = useContext(GlobalContext);

    const zero = appointment.time < 10 ? '0' : '';

    return (
        <li className={appointment.time < 12 ? 'morning' : 'evening'}>
            {appointment.text} <span>{zero}{appointment.time}:00</span><button onClick={() => deleteAppointment(appointment.id)} className="delete-btn">X</button>
        </li>
    )
}
