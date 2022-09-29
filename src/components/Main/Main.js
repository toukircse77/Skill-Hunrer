import React from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
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
                    <h2>mui Info</h2>

                 </div>
            </div>
            
        </div>
    );
};

export default Main;