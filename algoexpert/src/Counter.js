import React, {useState} from 'react';
// Mount (initial render) -> update (re-render) -> unmount
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <p>Count: {count}</p>
        </>
    );
}