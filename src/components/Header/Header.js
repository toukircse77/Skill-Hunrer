import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFootballBall } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className='header'>
            <FontAwesomeIcon icon={faFootballBall} />
            <h1>Best football Skills</h1>
        </nav>
    );
};

export default Header;