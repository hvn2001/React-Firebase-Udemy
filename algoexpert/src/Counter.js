import React, {useEffect, useState} from 'react';
// Mount (initial render) -> update (re-render) -> unmount
export default function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        console.log('count changed')
        return () => console.log('cleanup count change');
    }, [count]);

    useEffect(() => {
        console.log('render')
    });

    return (
        <div className="counter">
            <button onClick={() => setBool(!bool)}>Re-render</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <p>Count: {count}</p>
        </div>
    );
}