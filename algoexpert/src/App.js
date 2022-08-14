import React, {forwardRef} from 'react';

export default function App() {
    return (
        <>
            <MyInput ref={handleRef}/>
            {/*<button onClick={focusInput}>Focus</button>*/}
        </>
    )
}

function handleRef(domNode) {
    console.log(domNode);
}

const MyInput = forwardRef(function (props, ref) {
    return <input ref={ref} {...props} style={{color: 'red'}}/>
})