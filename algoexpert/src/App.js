import React, {useRef, useState} from 'react';

export default function App() {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={focusInput}>Focus</button>
        </>
    )
}