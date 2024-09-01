import React from 'react'
import '../styles/SimpleCounterStyle.css';
import {useState, useEffect} from 'react';

const SimpleCounter = () => {
    const [num, setNum] = useState(() => {
        const savedNum = window.localStorage.getItem('MY_NUM');
        return savedNum !== null ? JSON.parse(savedNum) : 0;
    });
    
    useEffect(() => {
        localStorage.setItem('MY_NUM', JSON.stringify(num));
    }, [num]);

    const DCounter = () => {
        setNum(num - 1);
    };

    const RCounter = () => {
        if (num === 0){
            alert("Num is already 0")
        }else{
            setNum(0);
        }
    };

    const ICounter = () => {
        setNum(num + 1)
    };

    return (
        <div className="counter">
            <h1>Simple Counter</h1>
            <div className="counter_container">
                <button onClick={DCounter}>-</button>
                <h1>{num}</h1>
                <button onClick={ICounter}>+</button>
            </div>
            <button onClick={RCounter}>Reset</button>
        </div>
    )
}

export default SimpleCounter