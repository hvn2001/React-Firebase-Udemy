import React from "react";

export default function MyButton(props) {
    console.log('Redering MyButton');

    const startTime = new Date();
    while (new Date() - startTime < 1000) {
    }
    return <button {...props} style={{color: 'red'}}/>
}