import React, { useState, useEffect } from 'react';


const Counter = (props) => {

    const [text, setText] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [wordStack, setWordStack] = useState([]);
    const [wordUnique, setWordUnique] = useState([]);

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

    const conso = ()=>{
        console.log('render!!!')
        return 'Render!'
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

    const fecha = new Date().toJSON();

    return (
        <div>
            {conso()} {fecha}
            <p>caracteres: {getCharCount()} | palabras: {getWordCount()}</p>
            <div style={{ 'backgroundColor': 'azure', 'border': 'solid 1px blue' }}>{props.text}</div>
            <div style={{ 'border': 'solid 1px red' }}>{wordStack.join(', ')}</div>
            <div style={{ 'border': 'solid 1px green' }}>uniques: {getUniqueCount()}</div>
        </div>
    );
}

export default Counter;