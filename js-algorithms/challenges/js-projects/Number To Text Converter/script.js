const checkButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

function checkButtonClick() {
    // Get the number value and parse it as an integer
    let inputNumber = parseInt(document.getElementById("number").value);
    let displayAnswer = inputNumber;

    // Reset the finalString array on each button click
    const finalString = [];

    if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 9999) {
        alert("Please insert a number between 1 and 9999");
        output.innerText = "Please insert a number between 1 and 9999";
    } else {
        const numberNames = [
            { value: 9000, name: "nine thousand" },
            { value: 8000, name: "eight thousand" },
            { value: 7000, name: "seven thousand" },
            { value: 6000, name: "six thousand" },
            { value: 5000, name: "five thousand" },
            { value: 4000, name: "four thousand" },
            { value: 3000, name: "three thousand" },
            { value: 2000, name: "two thousand" },
            { value: 1000, name: "thousand" },
            { value: 900, name: "nine hundred" },
            { value: 800, name: "eight hundred" },
            { value: 700, name: "seven hundred" },
            { value: 600, name: "six hundred" },
            { value: 500, name: "five hundred" },
            { value: 400, name: "four hundred" },
            { value: 300, name: "three hundred" },
            { value: 200, name: "two hundred" },
            { value: 100, name: "hundred" },
            { value: 90, name: "ninety" },
            { value: 80, name: "eighty" },
            { value: 70, name: "seventy" },
            { value: 60, name: "sixty" },
            { value: 50, name: "fifty" },
            { value: 40, name: "forty" },
            { value: 30, name: "thirty" },
            { value: 20, name: "twenty" },
            { value: 10, name: "ten" },
            { value: 9, name: "nine" },
            { value: 8, name: "eight" },
            { value: 7, name: "seven" },
            { value: 6, name: "six" },
            { value: 5, name: "five" },
            { value: 4, name: "four" },
            { value: 3, name: "three" },
            { value: 2, name: "two" },
            { value: 1, name: "one" }
        ];

        // Loop through the numberNames and reduce inputNumber
        for (const numberName of numberNames) {
            while (inputNumber >= numberName.value) {
                inputNumber -= numberName.value;
                finalString.push(numberName.name);
            }
        }

        // Display the result
        console.log(`Input number ${displayAnswer} in words is: ${finalString.join(" ")}`);
        output.innerText = `The number ${displayAnswer} is: ${finalString.join(" ")}`;
    }
}

checkButton.addEventListener("click", checkButtonClick);
