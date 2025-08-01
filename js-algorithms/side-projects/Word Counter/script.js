const button = document.getElementById('countButton')
let resultText = document.getElementById('resultText')

function wordCounter() {
    const getInputTextOne = document.getElementById('inputText').value;

    const inputTextOne = getInputTextOne
        .toLowerCase()
        .replace(/[^0-9a-zA-Z\s]/g, '')
        .replace(/\s+/g, ' ').trim()
        .split(" ");

    const wordCount = inputTextOne.length;

    resultText.innerText = `Total Word Count: ${wordCount}`;
};

button.addEventListener('click', wordCounter);