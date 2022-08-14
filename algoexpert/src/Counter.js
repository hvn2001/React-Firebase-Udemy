import React, {forwardRef, useImperativeHandle, useState} from 'react';
// Mount (initial render) -> update (re-render) -> unmount
export default forwardRef(function Counter(props, ref) {
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => {
        return {
            reset: () => setCount(0)
        };
    });
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <p>Count: {count}</p>
        </>
    );
});