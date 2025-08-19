import { useState, useEffect } from "react";
import "./InputBox.css";
import { previewText } from "./PreviewText";

function InputBox({ onSendData }) {
    const [markdown, setMarkdown] = useState("");

    // Handle text input
    const handleChange = (event) => {
        const newMarkdown = event.target.value;
        setMarkdown(newMarkdown);
        onSendData(newMarkdown); // Immediately send data to parent
    };

    // useEffect to provide preview text on first load
    useEffect(() => {
        setMarkdown(previewText);
        onSendData(previewText); // Immediately send data to parent
    }, []);

    return (
        <textarea
            onChange={handleChange}
            value={markdown}
            id="editor"
            class="form-control"
        ></textarea>
    );
}

export default InputBox;
