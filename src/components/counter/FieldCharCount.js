import React, { useState, useEffect } from 'react';

import { Paper } from '@material-ui/core';


const FieldCharCounter = (props) => {

    const [text, setText] = useState('');

    useEffect(() => {
        // base
        const t = props.text.replace(/ +/g, ' ');
        setText(t);
    }, [props.text]); /// , text, wordStack

    const getCharCount = () => {
        return text.length;
    }

    return (
        <Paper>caracteres: {getCharCount()}</Paper>
    );
}

export default FieldCharCounter;