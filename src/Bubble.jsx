import React from 'react';
import './Bubble.css';
import bubble from './bubbles2.png'
function Bubble({ onClick }) {
    return <img src={bubble} alt='bubble' onClick={onClick} className='bubble'/>;
}

export default Bubble;