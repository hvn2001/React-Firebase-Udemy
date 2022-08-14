import React, {forwardRef} from 'react';
import Counter from "./Counter";
import CustomInput from "./CustomInput";

export default function App() {
    return (
        <>
            <Counter/>
            <CustomInput placeholder="Type something..."/>
            <button>
                Reset
            </button>

        </>
    )
}
