import React, { useState } from 'react';

import Trayin from '../../components/trayin';
import Counter from '../../components/counter';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const styles = makeStyles(theme => ({
    root: {
        margin: 30
    },
}));

export default function Analisis() {

    const [text, setText] = useState('inicial papa pepe popo pipi papa pa pepito');

    const handleTextChange = txt => {
        setText(txt)
    }

    return (
        <Container className={styles.root}>
            <Trayin text={text} handleText={handleTextChange} />
            <Counter text={text} />
        </Container>
    );

}