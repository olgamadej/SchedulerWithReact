import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    appointments: [
        {id: 1, text: 'Ana', time: 9},
        {id: 2, text: 'Katarina', time: 10},
        {id: 3, text: 'Maria Marta', time: 15},
        {id: 4, text: 'Magdalena', time: 16}
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteAppointment(id) {
        dispatch({   
            type: 'DELETE_APPOINTMENT',
            payload: id         
        });
    }

    function addAppointment(appointment) {
        dispatch({   
            type: 'ADD_APPOINTMENT',
            payload: appointment         
        });
    }

    return(<GlobalContext.Provider value={{
        appointments: state.appointments,
        deleteAppointment,
        addAppointment
    }}>
        {children}
    </GlobalContext.Provider>)
}