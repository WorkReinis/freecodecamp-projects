const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function rot13() {
    // Get the input value
    let str = document.getElementById("text-input").value;

    // Create an array of each value
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str.charCodeAt(i));
    }

    // Add 13 to only letters ASCII values
    let shift = arr.map(obj => 
        obj < 65 ? obj : 
        obj > 90 ? obj : 
        obj + 13 > 90 ? obj + 13 - 26 : obj + 13
    );

    // Convert it back to alphabet characters
    let resultText = shift.map(obj => String.fromCharCode(obj)).join("");

    // Display the result
    result.innerHTML = `<p>${resultText}</p>`;
}

checkButton.addEventListener("click", rot13);




/* THIS IS A SIMPLER VERSION THAT I COULD NOT FIGURE OUT

const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkButtonClick() {
  const text = document.getElementById("text-input").value.trim();

  if (!text) {
    alert("Please input a value");
  } else if (!/[a-z0-9]/i.test(text)) {
    alert("Please input a value with letters or numbers");
  } else {
    const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const isPalindrome = cleanText === cleanText.split("").reverse().join("");
    result.innerHTML = `<p>${text} is ${isPalindrome ? "" : "not "}a palindrome</p>`;
  }
}

checkButton.addEventListener("click", checkButtonClick);


*/