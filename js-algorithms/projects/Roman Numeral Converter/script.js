const checkButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const getInputText = document.getElementById("number");

function checkButtonClick() {
  if (getInputText.value.trim() === "") {
    output.innerHTML = `<p>Please enter a valid number</p>`;
    return;
  }

  if (parseInt(getInputText.value.trim(), 10) < 1) {
     output.innerHTML = `<p>Please enter a number greater than or equal to 1`;
    return;
  }

  if (parseInt(getInputText.value.trim(), 10) > 3999) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
    return;
  }

  let inputNumber = parseInt(getInputText.value.trim(), 10); 
  const finalString = [];
  let secondToLastCheck = 0;

  while (inputNumber >= 1000) {
    inputNumber -= 1000;
    finalString.push("M");
  }

  while (inputNumber >= 500 && inputNumber < 1000) {
    inputNumber -= 500;
    finalString.push("D");
    secondToLastCheck += 1;
  }

  while (inputNumber >= 100 && inputNumber < 500) {
    inputNumber -= 100;
    finalString.push("C");
    secondToLastCheck += 2;
  }

  if (secondToLastCheck === 9) {
    finalString.splice(-5);
    finalString.push("CM");
    secondToLastCheck = 0;

  } else if (secondToLastCheck === 8) {
    finalString.splice(-4);
    finalString.push("CD");
    secondToLastCheck = 0;
  }

  secondToLastCheck = 0;

  while (inputNumber >= 50 && inputNumber < 100) {
    inputNumber -= 50;
    finalString.push("L");
    secondToLastCheck += 1;
  }

  while (inputNumber >= 10 && inputNumber < 50) {
    inputNumber -= 10;
    finalString.push("X");
    secondToLastCheck += 2;
  }

  if (secondToLastCheck === 9) {
    finalString.splice(-5);
    finalString.push("XC");
    secondToLastCheck = 0;

  } else if (secondToLastCheck === 8) {
    finalString.splice(-4);
    finalString.push("XL");
    secondToLastCheck = 0;
  }

  secondToLastCheck = 0;

  while (inputNumber >= 5 && inputNumber < 10) {
    inputNumber -= 5;
    secondToLastCheck += 1;
    finalString.push("V");
  }

  while (inputNumber > 0 && inputNumber < 5) {
    inputNumber -= 1;
    secondToLastCheck += 2;
    finalString.push("I");
  }

  if (secondToLastCheck === 9) {
    finalString.splice(-5);
    finalString.push("IX");
    secondToLastCheck = 0;

  } else if (secondToLastCheck === 8) {
    finalString.splice(-4);
    finalString.push("IV");
    secondToLastCheck = 0;
  }

  output.innerHTML = `<p>${finalString.join("")}</p>`;
}

checkButton.addEventListener("click", checkButtonClick);

getInputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkButtonClick();
  }
});

/*BELLOW IS AN EASIER ALGORITH THAT I SHOULD HAVE FIGURED OUT

let inputNumber = 1999;
const finalString = [];
let displayAnswer = inputNumber;

const numerals = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" }
];

for (const numeral of numerals) {
  while (inputNumber >= numeral.value) {
    inputNumber -= numeral.value;
    finalString.push(numeral.symbol);}
}

console.log(`Input number ${displayAnswer} in Roman numerals is: ${finalString.join("")}`);

*/