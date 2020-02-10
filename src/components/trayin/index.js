import React, { useState } from 'react';


const Trayin = (props) => {

    const [input, setInput] = useState(props.text);

    const handleInputChange = e => {
        setInput(e.target.value)
        props.handleText(e)
    }

    return (
        <div>
            <p><textarea defaultValue={ input } onChange={handleInputChange} style={ {height:'300px', width:'600px'}}></textarea></p>
        </div>
    );
}


export default Trayin;