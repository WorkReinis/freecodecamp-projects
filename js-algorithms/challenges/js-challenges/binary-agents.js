function binaryAgent(str) {
  let lettersArr = str.split(" ");
  let finalString = "";

  // Create a loop that will iterate through each binary letter code
  for (let j = 0; j < lettersArr.length; j++) {
      let letter = lettersArr[j].split("")
      let values = [];
      
      // Transform from array of binary values to array of 2s with the power of i
      for (let i = letter.length - 1; i >= 0; i--) {
        values.push(Math.pow(2, i) * letter[letter.length - 1 - i])
      }
      
      // Sum all values of 2s with the power of i into ASCII digit
      let reduction = values.reduce((obj, accumulator) => accumulator += obj);
      
      // Transform that digit to a char and push it into a string
      finalString += String.fromCharCode(reduction) 
  }    
  return finalString
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
