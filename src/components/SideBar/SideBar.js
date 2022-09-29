import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import './SideBar.css'

const SideBar = ({time}) => {
    console.log(time)
    const [breakTimes, setBreakTimes] = useState(0);
    const onClickBreakHandler = selectedBreakTimes =>{
        localStorage.setItem("breakTimes", selectedBreakTimes);
        setBreakTimes(selectedBreakTimes);
    };
    useEffect(()=>{
        const BreakFromLs = localStorage.getItem("breakTimes");
        setBreakTimes(BreakFromLs);
    },[]);

    return (
        <div>
            <Profile></Profile>
            <h3>Add A Break</h3>
            <Break onClickBreakHandler={onClickBreakHandler}></Break>
            <h3>Practise Details</h3>
            <div className='exercise'>
                <p>Practise time: {time} seconds</p>
            </div>
            <div className='exercise'>
                <p>Break time: {breakTimes} seconds</p>
            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default SideBar;