import React, { useState } from 'react';

import Trayin from '../../components/trayin';
import Counter from '../../components/counter';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 30,
        backgroundColor: theme.palette.grey[50],
        background: 'linear-gradient(45deg, ' + theme.palette.common.white + ' 50%, ' + theme.palette.grey[100] + ' 90%)',
    },
}));

export default function Analisis() {

    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis purus hendrerit eros posuere bibendum. Sed sit amet mauris sit amet lectus vehicula blandit. Maecenas aliquet a diam at sodales. Ut in ex eleifend, tempus mauris fermentum, tincidunt sem. Aliquam suscipit lacus eget felis cursus pharetra non et libero. Nam consectetur convallis nibh, in placerat orci vehicula sit amet. Donec sodales urna eget convallis pulvinar. Aenean vel sem finibus, pulvinar tortor sit amet, congue orci. Integer facilisis urna pretium lorem gravida posuere. Phasellus dictum mi massa, ac tincidunt justo sollicitudin sed. Aliquam non consequat tellus.');

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