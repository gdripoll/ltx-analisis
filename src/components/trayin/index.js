import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Paper, Box } from '@material-ui/core';


const styles = makeStyles(theme => ({
    root: {
    },
    textField: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginTop: theme.spacing(10),
    }
}));


const Trayin = (props) => {

    const [input, setInput] = useState(props.text);
    let textArea = React.createRef();

    const handleInputChange = e => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        props.handleText(input)
    }

    return (
        <Box m={1}>
            {/* <Paper variant="outlined" p={12}> */}
            <TextField
                id="outlined-multiline-static"
                label="Párrafo"
                multiline
                fullWidth
                rows="6"
                defaultValue={input}
                variant="outlined"
                onChange={handleInputChange}
                className={styles.textField}
            />
            <Box m={1}>
            <Button variant="contained" onClick={handleClick}>Analizar</Button>
            {/* </Paper> */}
            </Box>
        </Box>
    );
}


export default Trayin;