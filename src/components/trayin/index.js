import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Trayin = (props) => {

    const [input, setInput] = useState(props.text);
    let textArea= React.createRef();

    const handleInputChange = e => {
        setInput(e.target.value)
    }

    const handleClick = () =>{
        props.handleText(input)
    }

    
    return (
        <div>
            <p><textarea ref={textArea} defaultValue={ input } onChange={handleInputChange} style={ {height:'300px', width:'600px'}}></textarea></p>
            <Button variant="contained" onClick={handleClick}>Analizar</Button>
        </div>
    );
}


export default Trayin;