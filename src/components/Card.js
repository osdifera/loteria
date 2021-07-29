import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className='card'>
            <img src='img_avatar.png' alt='Avatar' />
            <div className='container'>
                <h4>
                    <b>John Doe</b>
                </h4>
                <p>Software Engineer</p>
            </div>
        </div>
    );
}

export default Card;
