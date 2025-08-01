const messageInput = document.getElementById("user-input");
const result = document.getElementById("results-div");
const checkMessageButton = document.getElementById("check-btn");
const checkClearButton = document.getElementById("clear-btn");

const helpRegex = /^(?:\+?1|001)?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please provide a phone number");
    return;
  } else if (helpRegex.test(messageInput.value)) {
    result.style.color = 'rgb(76, 175, 80)';
    result.style.backgroundColor = 'rgb(234, 245, 234)';
    result.innerHTML = `<p>Valid US number: ${messageInput.value}</p>`;
  } else {
    result.style.color = 'rgb(208, 42, 72)';
    result.style.backgroundColor = 'rgb(247, 224, 233)';
    result.innerHTML = `<p>Invalid US number: ${messageInput.value}</p>`;
  }
});

checkClearButton.addEventListener("click", () => {
  result.innerHTML = ``;
  messageInput.value = '';
  result.style.backgroundColor = 'white';
  result.style.color = 'black';
});
