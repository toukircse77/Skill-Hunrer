import React from 'react';
import './Break.css'

const Break = ({ onClickBreakHandler }) => {
    return (
        <div className='break'>
            <button onClick={() => onClickBreakHandler(10)} >10s</button>
            <button onClick={() => onClickBreakHandler(20)}>20s</button>
            <button onClick={() => onClickBreakHandler(30)} >30s</button>
            <button onClick={() => onClickBreakHandler(40)} >40s</button>
        </div>
    );
};

export default Break;