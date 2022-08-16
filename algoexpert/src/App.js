import React from "react";

export default function App() {
    return (
        <>
            <h1>Hello World</h1>
            <Buggy/>
        </>
    );
}

function Buggy() {
    throw new Error('error');
    return <h1>Buggy</h1>;
}