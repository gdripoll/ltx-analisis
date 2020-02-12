import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Box } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
    },
    textField: {
        marginTop: theme.spacing(1),
    }
}));


const Trayin = (props) => {

    const [input, setInput] = useState(props.text);

    const handleInputChange = e => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        props.handleText(input)
    }

    const styles = useStyles()
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