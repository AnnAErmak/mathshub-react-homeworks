import React from 'react';
import './style.css'

export const Counter = ({count, incrementCount, decrementCount}) => {
    return (
        <div className="counter-wrapper">
            { `Cчетчик: ${count < 0 ? "Вы не можете опускаться ниже нуля!" : count}`}
            <div className="btn-wrapper">
                <button onClick={incrementCount}> + </button>
                <button onClick={decrementCount}> - </button>
            </div>
        </div>
    );
};