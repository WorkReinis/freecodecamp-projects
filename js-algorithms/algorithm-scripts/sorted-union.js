function uniteUnique(...arr) {  //Make all function arguments into an array

  //Iterate through all arguments
  let all = [];
  for (let i = 0; i < arr.length; i++) {
    all = all.concat(arr[i])  
  }
  
  //Filter out the duplicate values
  return all.filter((obj, i) => (all.indexOf(obj) == i));

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4]
