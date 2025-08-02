import {useState, useEffect} from 'react'
import './InputBox.css'
import { previewText } from './PreviewText';

function InputBox( {onSendData } ) {
    const [markdown, setMarkdown] = useState('')

    // Handle text input
    const handleChange = (event) => {
        const newMarkdown = event.target.value; // Assign value from textarea
        setMarkdown(newMarkdown) // Schedule a state update after component rerenders (asynchronous)
        onSendData(newMarkdown) // Immediately send data to parent
    }

    // useEffect is here to provide preview text on first load
    useEffect(() => {
        setMarkdown(previewText); // Schedule state update after component rerenders (asynchronous)
        onSendData(previewText); // Immediately send data to parent
    }, []);

    return (
        <>
            <textarea 
                onChange={handleChange} 
                value={markdown}
                id='editor' 
                class='form-control'>
            </textarea>
        </>
    )
}

export default InputBox;
