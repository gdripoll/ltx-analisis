import React, { useState } from 'react';


const Trayin = (props) => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState(props.text);

    const handleInputChange = e => {
        console.log('Trayin', e.target.value)
        setInput(e.target.value)
        props.handleText(e)
    }

    return (
        <div>
            <p>You clicked {count} times <button onClick={() => setCount(count + 1)}>Click me</button></p>
            <p>Text={input}</p>
            <p><textarea defaultValue={ input } onChange={handleInputChange}></textarea></p>
        </div>
    );
}


export default Trayin;