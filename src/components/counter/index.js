import React, { useState, useEffect } from 'react';

import { Box, Paper } from '@material-ui/core';


const Counter = (props) => {

    const [text, setText] = useState('');
    // const [charCount, setCharCount] = useState(0);
    // const [wordCount, setWordCount] = useState(0);
    const [wordStack, setWordStack] = useState([]);
    const [wordUnique] = useState([]);

    useEffect(() => {
        // base
        const t = props.text.replace(/ +/g, ' ');

        setText(t);
        setWordStack(t.split(' '));
        // console.log('useEffect |', t,' | ', text)

        //return function cleanup(){ // aca borro  }
    }, [props.text]); /// , text, wordStack



    const getCharCount = () => {
        return text.length;
    }
    const getWordCount = () => {
        return wordStack.length;
    }

    const getUniqueCount = () => {
        console.log('showUnique',wordUnique)
        let wu = {};
        wordStack.map((e) => {
            console.log(e, wu[e])
            if (wu[e]) {
                wu[e]++
            } else {
                wu[e] = 1
            }
            return false;
        })
        let result = '';
        for (var i in wu) {
            result += i + '[' + wu[i] + ']';
        }
        return result;
    }

    return (
        <Box m={1}>
            <Paper elevation={2}>caracteres: {getCharCount()} | palabras: {getWordCount()}</Paper>
            <Paper elevation={2}>{props.text}</Paper>
            <Paper elevation={2}>{wordStack.join(', ')}</Paper>
            <Paper elevation={2}>uniques: {getUniqueCount()}</Paper>
        </Box>
    );
}

export default Counter;