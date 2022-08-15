import React, {useEffect, useState} from "react";

let renderCount = 0;

export default function App() {
    useEffect(() => {
        renderCount++;
    })
    return (
        <>
            <Counter initialValue={5}/>
            <Counter/>
            <p>Render count: {renderCount}</p>
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
