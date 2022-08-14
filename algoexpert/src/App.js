import React, {useRef, forwardRef} from 'react';

export default function App() {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <MyInput ref={inputRef}/>
            <button onClick={focusInput}>Focus</button>
        </>
    )
}

const MyInput = forwardRef(function (props, ref) {
    return <input ref={ref} {...props} style={{color: 'red'}}/>
})