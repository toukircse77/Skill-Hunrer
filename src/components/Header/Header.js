import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFootballBall } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className='header'>
            <div className='title'><FontAwesomeIcon icon={faFootballBall} />
            <h1>Best football Skills</h1></div>
            <div className='blog'>
                <h1><a href="/">Blog</a></h1>
            </div>
            
        </nav>
    );
};

export default Header;