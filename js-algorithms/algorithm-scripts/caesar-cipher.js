function rot13(str) {
  
  //Create an array of each value
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i))
  }

  // Add 13 to only letters ASCII values
  let shift = arr.map(obj => 
      obj < 65 ? obj : 
      obj > 90 ? obj : 
      obj + 13 > 90 ? obj + 13 - 26 : obj + 13
      );

  //Convert it back to alphabet characters
  return shift.map(obj => String.fromCharCode(obj)).join("")

}

console.log(rot13("URYYB"));       // Outputs: HELLO
console.log(rot13("JBEYQ"));       // Outputs: WORLD
console.log(rot13("SERR PBQR"));   // Outputs: FREE CODE
console.log(rot13("WNINFPEVCG"));  // Outputs: JAVASCRIPT
console.log(rot13("12345!@#"));    // Outputs: 12345!@#
console.log(rot13("EBG13"));       // Outputs: ROT13
console.log(rot13("TVGUBE"));      // Outputs: GITHUB