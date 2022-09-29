import React, { useState } from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import './SideBar.css'

const SideBar = ({time}) => {
    console.log(time)
    const [breakTimes, setBreakTimes] = useState(0);

    return (
        <div>
            <Profile></Profile>
            <h3>Add A Break</h3>
            <Break></Break>
            <h3>Practise Details</h3>
            <div className='exercise'>
                <p>Practise time: {time}</p>
            </div>
            <div className='exercise'>
                <p>Break time:</p>
            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default SideBar;