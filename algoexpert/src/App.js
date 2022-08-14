import React, {useState} from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Counter counter={count} setCount={setCount}/>
        </>
    );
}

const Counter = (props) =>
    <>
        <button onClick={() => {
            // props.counter = props.counter + 1;
            props.setCount(props.counter + 1);
            // console.log('counter = ', props.counter);
        }}>Increment
        </button>
        <p>Count: {props.counter}</p>
    </>
