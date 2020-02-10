import React, { useState } from 'react';

import Trayin from '../../components/trayin';
import Counter from '../../components/counter';

export default function Analisis() {

    const [text, setText] = useState('inicial');

    const handleTextChange = e => {
        console.log('Analisis',e.target.value)
        setText(e.target.value)
    }

    return (
        <div style={ {border: 'solid 1px red'} }>
            <Trayin text={text} handleText={handleTextChange}/>
            <Counter text={text}/>
        </div>
    );

}