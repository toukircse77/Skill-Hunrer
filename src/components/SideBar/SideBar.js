import React from 'react';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';

const SideBar = () => {
    return (
        <div>
            <Profile></Profile>
            <h3>Add A Break</h3>
            <Break></Break>
        </div>
    );
};

export default SideBar;