import React from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './Main.css'

const Main = () => {
    return (
        <div>
            <div className='body-container'>
                 <div>
                 <Header></Header>
                 <h3>Select Today's Best Skills</h3>
                 <Cart></Cart>
                 </div>
                 <div className='Skill-info'>
                <SideBar></SideBar>

                 </div>
            </div>
            
        </div>
    );
};

export default Main;