import React, { useState, useEffect } from 'react';


const Counter = (props) => {

    const [text, setText] = useState(props.text);
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    useEffect((pepe) => {
        console.log(pepe);
        let t = props.text.replace(/  /g,' ');
        setText(t)
        setCharCount(text.length);
        setWordCount(text.split(' ').length);

        return function cleanup(){
            // aca borro
        }
    },[props.text]);

    return (
        <div>
            <div>{text}</div>
            <p>
                caracteres: {charCount}.<br/>
                palabras: {wordCount}
            </p>
        </div>
    );
}

export default Counter;