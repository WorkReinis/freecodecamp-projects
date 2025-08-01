const button = document.getElementById("checkButton");

function anagramChecker() {

    let getInputTextOne = document.getElementById("inputTextOne").value;
    let getInputTextTwo = document.getElementById("inputTextTwo").value;

    const inputTextOne = getInputTextOne
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, '')
        .split("")
        .sort()
        .join("");

    const inputTextTwo = getInputTextTwo
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, '')
        .split("")
        .sort()
        .join("");

    const resultText = document.getElementById("resultText");

    if (inputTextOne === inputTextTwo) {
        resultText.textContent = `${getInputTextOne} and ${getInputTextTwo} are anagrams!`;
        resultText.style.color = 'green';
    } else {
        resultText.textContent = `${getInputTextOne} and ${getInputTextTwo} are not anagrams.`;
        resultText.style.color = 'red';
    }
};


button.addEventListener("click", anagramChecker);
