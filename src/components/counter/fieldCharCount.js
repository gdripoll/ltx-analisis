import React, { useState, useEffect } from 'react';

import { Box, Paper } from '@material-ui/core';


const fieldCharCounter = (props) => {

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
        <Paper elevation={2}>caracteres: {getCharCount()}</Paper>
    );
}

export default fieldCharCounter;