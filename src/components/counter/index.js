import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import FieldCharCount from './FieldCharCount';
import FieldWordCount from './FieldWordCount';
import FieldWords from './FieldWords';

const useStyles = makeStyles(theme => ({
    root: {
    },
    textField: {
        marginTop: theme.spacing(1),
    }
}));

const Counter = (props) => {

    const [text, setText] = useState('');
    // const [wordStack, setWordStack] = useState([]);
    // const [wordUnique] = useState([]);

    useEffect(() => {
        // base
        const t = props.text.replace(/ +/g, ' ');
        setText(t);
        // setWordStack(t.split(' '));
        //return function cleanup(){ // aca borro  }
    }, [props.text]); /// , text, wordStack

    const styles = useStyles()
    return (
        <Grid container className={styles.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container className={styles.demo} justify="center" spacing={2}>
                    <Grid key={1} item><FieldCharCount text={text} /></Grid>
                    <Grid key={2} item><FieldWordCount text={text} /></Grid>
                    <Grid key={3} item><FieldWords text={text} /></Grid>
                    <Grid key={6} item><Paper dangerouslySetInnerHTML={{ __html: props.text }} /></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Counter;