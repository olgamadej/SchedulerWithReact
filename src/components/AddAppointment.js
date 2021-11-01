import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AppointmentList } from './AppointmentList';

export const AddAppointment = () => {
    const [text, setText] = useState('');
    const [time, setTime] = useState(0);

    const {addAppointment} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newAppointment = {
            id:   Math.floor(Math.random()*100000000), 
            text,
            time
        }

        addAppointment(newAppointment);
    }

    return (
        <div>
            <div className="form">
                <h3>Add a new appointment:</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="text">Specification</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter new..."/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="time">Time</label>
                        <input type="number" value={time} onChange={(e)=> setTime(e.target.value)} placeholder="Enter time..."/>
                    </div>
                    <button className="btn">Add the appointment</button>
                </form>
            </div>
        </div>
    )
}
