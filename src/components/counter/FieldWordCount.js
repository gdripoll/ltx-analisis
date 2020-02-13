import React, { useState, useEffect } from 'react';

import { Paper } from '@material-ui/core';


const FieldWordCounter = (props) => {

	const [wordStackCount, setWordStackCount] = useState(0);

	useEffect(() => {
		// base
		const t = props.text.replace(/ +/g, ' ').replace(/\.|,|:|;|\?|¿|!|¡/g, '');
		setWordStackCount(t.split(' ').length);

	}, [props.text]); /// , text, wordStack

	return (
		<Paper>palabras: {wordStackCount}</Paper>
	);
}

export default FieldWordCounter;