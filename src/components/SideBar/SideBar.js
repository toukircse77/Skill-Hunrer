import React from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import './SideBar.css'

const SideBar = () => {
    return (
        <div>
            <Profile></Profile>
            <h3>Add A Break</h3>
            <Break></Break>
            <h3>Practise Details</h3>
            <div className='exercise'>
                <p>Practise time:</p>
            </div>
            <div className='exercise'>
                <p>Break time:</p>
            </div>
        </div>
    );
};

export default SideBar;