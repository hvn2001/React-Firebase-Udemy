import './App.css';
import React, {useMemo, useState} from "react";
import MyButton from "./MyButton";


export default function App() {
    const [num, setNum] = useState(10);
    const [logValue, setLogValue] = useState('');

    const fibValue = useMemo(() => {
        console.log('calculating fib value');
        return fib(num);
    }, [num]); // fib(num) is depended on num only

    return (
        <>
            <h1>
                Fib {num} is {fibValue}
            </h1>
            <input
                type="number"
                value={num}
                onChange={event => setNum(parseInt(event.target.value))}
            />

            <input
                type="text"
                value={logValue}
                onChange={event => setLogValue(event.target.value)}
            />

            <MyButton onClick={() => {
                console.log(logValue)
            }}>Log Value</MyButton>
        </>
    );
}

function fib(n) {
    if (n === 2) return 1;
    if (n === 1) return 0;
    return fib(n - 1) + fib(n - 2);
}
