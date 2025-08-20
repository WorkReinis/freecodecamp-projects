import InputBox from "./components/InputBox";
import PreviewBox from "./components/PreviewBox";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [input, setInput] = useState("");

    // Update the input from InputBox, so it can be sent PreviewBox
    const handleDataChange = (newInput) => {
        setInput(newInput);
    };

    return (
        <div className="App container mx-0">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-6">
                    <h1 className="mt-4 mb-3">Text Editor</h1>
                    <InputBox onSendData={handleDataChange} />
                </div>
                <div className="col-12 col-lg-6">
                    <h1 className="mt-4 mb-3">Markdown Preview</h1>
                    <PreviewBox input={input} />
                </div>
            </div>
            <div className="d-flex justify-content-end mt-2">
                <div className="text-black-50 fs-6 fw-light">
                    Designed and Developed by{" "}
                    <a
                        className="text-black-50 fs-6 fw-semibold text-decoration-none"
                        href="https://github.com/WorkReinis"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Reinis
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
