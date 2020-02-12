import React, { useState } from 'react';

import Trayin from '../../components/trayin';
import Counter from '../../components/counter';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 30,
        backgroundColor: theme.palette.grey[50],
        background: 'linear-gradient(45deg, '+theme.palette.common.white+' 50%, '+theme.palette.grey[100]+' 90%)',        
    },
}));

export default function Analisis() {

    const [text, setText] = useState('inicial papa pepe popo pipi papa pa pepito');

    const handleTextChange = txt => {
        setText(txt)
    }

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Trayin text={text} handleText={handleTextChange} />
            <Counter text={text} />
        </Container>
    );

}