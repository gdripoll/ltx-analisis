import React, { useState, useEffect } from 'react';

import { Paper, Select } from '@material-ui/core';


const FieldWords = (props) => {

	const [wordStack, setWordStack] = useState([]);
	const [selectedWord, setSelectedWord] = useState('');

	useEffect(() => {
		// base
		const t = props.text.replace(/ +/g, ' ').replace(/\.|,|:|;|\?|¿|!|¡/g, '');
		let wu = {};
		t.split(' ').map((e) => {
			// console.log(e, wu[e])
			if (wu[e]) {
				wu[e]++
			} else {
				wu[e] = 1
			}
			return false;
		})
		// let result = '';
		// for (var i in wu) {
		// 	result += i + '[' + wu[i] + ']';
		// }
		setWordStack(wu);


	}, [props.text]); /// , text, wordStack

	// const getUniqueCount = () => {
	// 	// console.log('showUnique', wordUnique)
	// 	let wu = {};
	// 	wordStack.map((e) => {
	// 		// console.log(e, wu[e])
	// 		if (wu[e]) {
	// 			wu[e]++
	// 		} else {
	// 			wu[e] = 1
	// 		}
	// 		return false;
	// 	})
	// 	let result = '';
	// 	for (var i in wu) {
	// 		result += i + '[' + wu[i] + ']';
	// 	}
	// 	return result;
	// }

	const handleChange = event => {
		setSelectedWord(event.target.value);
	};

	const showWords = () => {
		let result = [];
		for (var i in wordStack) {
			result.push(<option key={i} value={i}>{i} [{wordStack[i]}]</option>);
		}
		return result;
	}

	return (
		<Paper elevation={2}>
			{/* {wordStack} */}
			<Select
				native
				value={selectedWord}
				onChange={handleChange}
			>
				{showWords()}
			</Select>
		</Paper>
	);
}

export default FieldWords;