const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkButtonClick() {
  const getInputText = document.getElementById("text-input").value;

  if (getInputText === "") {
     alert("Please input a value");
  } 
  
  else if (
    getInputText.replace(/[^a-zA-Z0-9]/g, '') === "") {
    alert ("Please input a value with letters or numbers");
  } 
  
  else {
    const reversedInputText = getInputText
       .toLowerCase()
       .replace(/[^a-zA-Z0-9]/g, '')
       .split("")
       .reverse()
       .join("");
    const clearInputText = getInputText
       .toLowerCase()
       .replace(/[^a-zA-Z0-9]/g, '');

  if (clearInputText === reversedInputText) {
      result.style.color = 'rgb(76, 175, 80)';
      result.style.backgroundColor = 'rgb(234, 245, 234)';
      result.innerHTML = `<p>${getInputText} is a palindrome</p>`;
    } 
    
  else {
      result.style.color = 'rgb(208, 42, 72)';
      result.style.backgroundColor = 'rgb(247, 224, 233)';
      result.innerHTML = `<p>${getInputText} is not a palindrome</p>`;
    }
  }
}

checkButton.addEventListener("click", checkButtonClick);




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