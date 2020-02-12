import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
    },
    textField: {
        marginTop: theme.spacing(1),
    }
}));

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
        //return function cleanup(){ // aca borro  }
    }, [props.text]); /// , text, wordStack



    const getCharCount = () => {
        return text.length;
    }
    const getWordCount = () => {
        return wordStack.length;
    }

    const getUniqueCount = () => {
        console.log('showUnique', wordUnique)
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

    const styles = useStyles()
    return (
        <Grid container className={styles.root} spacing={16}>
            <Grid item xs={12}>
                <Grid container className={styles.demo} justify="center" spacing={2}>
                    <Grid key={1} item>
                        <Paper elevation={2}>caracteres: {getCharCount()} | palabras: {getWordCount()}</Paper>
                    </Grid>
                    <Grid key={2} item>
                        <Paper elevation={2}>{props.text}</Paper>
                    </Grid>
                    <Grid key={3} item>
                        <Paper elevation={2}>{wordStack.join(', ')}</Paper>
                    </Grid>
                    <Grid key={4} item>
                        <Paper elevation={2}>uniques: {getUniqueCount()}</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default Counter;