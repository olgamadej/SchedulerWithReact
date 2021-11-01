export default (state, action) => {
    switch(action.type){
        case 'DELETE_APPOINTMENT':
            return {
                ...state,
                appointments: state.appointments.filter(appointment => 
                    appointment.id !== action.payload)
            }
        case 'ADD_APPOINTMENT':
            return {
                ...state,
                appointments: [action.payload, ...state.appointments]
            }
        default:
            return state;
    }
}