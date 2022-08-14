import React, {useEffect, useLayoutEffect, useState} from 'react';
// Mount (initial render) -> update (re-render) -> unmount
export default function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    // useEffect --> async
    useLayoutEffect(() => {
        if (count === 3) {
            setCount(4);
        }
    }, [count]);

    useEffect(() => {
        console.log('render')
    });
    const startTime = new Date();
    while (new Date() - startTime < 100) {
    }

    return (
        <div className="counter">
            <button onClick={() => setBool(!bool)}>Re-render</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <p>Count: {count}</p>
        </div>
    );
}