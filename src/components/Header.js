import React from 'react';

export const Header = () => {
    
        const tDate = new Date()
        const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        const day = weekDay[tDate.getDay()];
        const month = months[tDate.getMonth()];
        const date = tDate.getDate();
        const year = tDate.getFullYear();
    
    return (
        
        <div className="header">
            <div className="background">
            <h2>Appointment Scheduler</h2>
            <div className="today">Today is <span className="biggerFont">{day},</span> <span className="italic">{month} {date} {year}.</span> </div>
            </div>
        </div>
        
        
    )
}
