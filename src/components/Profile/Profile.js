import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <img src="https://images.wsj.net/im-471356?width=1280&size=1" alt="" srcset="" />
            <h2>Neymar Jr.</h2>
            <p><small>Brasels,Brazil</small> </p>
            <div className='profile-info'>
                <p> 26  Age</p>
                <p> 5.9"  height</p>
                <p> 75kg  Weight</p>
            </div>
            
        </div>
    );
};

export default Profile;