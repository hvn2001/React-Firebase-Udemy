import React, {memo} from "react";

export default memo(function MyButton(props) {
    console.log('Rendering MyButton');
    const startTime = new Date();
    while (new Date() - startTime < 1000) {
    }
    return <button {...props} style={{color: 'red'}}/>
});