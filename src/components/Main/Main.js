import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './Main.css'

const Main = () => {
    const [time, setTime] = useState(0)
    const btnOnClickHandler = id =>{
        setTime(time + parseInt(id));
    };
    return (
        <div>
            <div className='body-container'>
                 <div>
                 <Header></Header>
                 <h1>Select Today's Best Skills</h1>
                 <Cart btnOnClickHandler={btnOnClickHandler} ></Cart>
                 </div>
                 <div className='Skill-info'>
                <SideBar time = {time} ></SideBar>

                 </div>
            </div>
            
        </div>
    );
};

export default Main;