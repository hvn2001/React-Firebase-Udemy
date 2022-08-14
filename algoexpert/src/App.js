import React, {useRef, useState} from 'react';

    export default function App() {
    const [seconds, setSeconds] = useState(0);
    const [timerID, setTimerID] = useState({current: null});
    // const timerID = useRef(null);

    const startTimer = () => {
        timerID.current = setInterval(() => {
            setSeconds(currSeconds => currSeconds + 1);
        }, 500);
    };

    const stopTimer = () => {
        clearInterval(timerID.current);
    };

    return (
        <>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <p>Seconds: {seconds}</p>
        </>
    );
}