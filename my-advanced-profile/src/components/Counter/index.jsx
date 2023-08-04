import React, {useState} from 'react';
import './style.css'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }

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