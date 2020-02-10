import React, { useState, useEffect } from 'react';


const Counter = (props) => {

    const [text, setText] = useState(props.text);

    useEffect(() => {
        setText(props.text)
        return function cleanup(){
            // aca borro
        }
    },[props.text]);

    return (
        <div>
            <i>{props.text}</i>
            <p>Text length: {props.text.length}.</p>
            <i>{text}</i>
        </div>
    );
}

export default Counter;