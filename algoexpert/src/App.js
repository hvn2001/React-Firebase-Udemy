import React, {useState} from "react";

export default function App() {
    return (
        <>
            <Counter initialValue={5}/>
            <Counter/>
        </>
    );
}

function Counter({initialValue = 0}) {
    const [count, setCount] = useState(initialValue);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <p>Count: {count}</p>
        </>
    )
}
