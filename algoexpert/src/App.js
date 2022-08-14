import React, {useRef, useState} from 'react';

export default function App() {
    const [seconds, setSeconds] = useState(0);
    // const [timerID, setTimerID] = useState({current: null});
    let timerID;
    // const timerID = useRef(null);
    console.log('timerID', timerID);

    const startTimer = () => {
        console.log('startTimer');
        timerID = setInterval(() => {
            setSeconds(currSeconds => currSeconds + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerID);
    };

    return (
        <>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <p>Seconds: {seconds}</p>
        </>
    );
}