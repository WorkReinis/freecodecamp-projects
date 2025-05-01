let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let purchaseButton = document.getElementById("purchase-btn");
let changeDueText = document.getElementById("change-due");

const numerals = [  
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];

let pennies = document.getElementById("pennies");
let nickels = document.getElementById("nickels");
let dimes = document.getElementById("dimes");
let quarters = document.getElementById("quarters");
let dollars = document.getElementById("dollars");
let fiveDollars = document.getElementById("five-dollars");
let tenDollars = document.getElementById("ten-dollars");
let twentyDollars = document.getElementById("twenty-dollars");
let hundredDollars = document.getElementById("hundred-dollars");

//Display cash in drawer values in HTML
      let denominations = [pennies, nickels, dimes, quarters, dollars, fiveDollars, tenDollars, twentyDollars, hundredDollars];
      for (let i = 0; i < denominations.length; i++) {
        denominations[i].textContent = `$${cid[i][1]}`; 
      }

//Display price in HTML
let priceDisplay = document.getElementById("p-price");
priceDisplay.innerText = "Price: $" + `${price}`;

function cashCheck() {

      //Introduce cash variable that reads the input cash amount
      let cash = Math.round(parseFloat(document.getElementById("cash").value) * 100) / 100;

      //Mirror the input array for modification and keeping track of coins to give out
      let cidAfter = [
          ['PENNY', 0, 0],
          ['NICKEL', 0, 0],
          ['DIME', 0, 0],
          ['QUARTER', 0, 0],
          ['ONE', 0, 0],
          ['FIVE', 0, 0],
          ['TEN', 0, 0],
          ['TWENTY', 0, 0],
          ['ONE HUNDRED', 0, 0]
        ];


      //Perform a check if customer has enough money
      if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        console.log("Customer does not have enough money to purchase the item");
        console.log("Item price: " + price);
        console.log("Cash provided: " + cash);
      }
      else if (cash === price) {
        changeDueText.innerText = "No change due - customer paid with exact cash";
        console.log("No change due - customer paid with exact cash");  
        console.log("Item price: " + price);
        console.log("Cash provided: " + cash);
      }
      else {
          let changeToGive = Math.round((cash - price) * 100) / 100;
          let changeValueCheck = 0;
          console.log("Item price: " + price);
          console.log("Cash provided: " + cash);
          console.log("changeToGive value: " + changeToGive);
          
          //Mirror the array on witch you will perform the check
          for (let i = 0; i < cid.length; i++) {
              cidAfter[i][1] = cid[i][1];
          }
          
          //Calculate total cash in drawer
          let cidSum = 0;
              for (let i = 0; i < cid.length; i++ ) {
                cidSum += cid[i][1];
                cidSum = Math.round(cidSum * 100) / 100;
            }
          
          console.log("cidSum: " + cidSum);
          console.log("cidAfter array: " + cidAfter);
    
          
          //Create a loop that will log value and amount of cash to return
          for (let i = numerals.length - 1; i >= 0; i--) {
            while (changeToGive >= numerals[i][1] && cidAfter[i][1] >= numerals[i][1]) {
              //console.log("changetogive before: " + changeToGive);
              changeToGive -= numerals[i][1];
              cidAfter[i][1] -= numerals[i][1];
              cidAfter[i][2]++;
              //Round up all values to have clean two decimal digits
              changeValueCheck += Math.round(numerals[i][1] * 100) / 100;
              changeToGive = Math.round(changeToGive * 100) / 100;
              changeValueCheck = Math.round(changeValueCheck * 100) / 100;
              cidAfter[i][1] = Math.round(cidAfter[i][1] * 100) / 100;
              //console.log("changetogive after: " + changeToGive);
              }
          }
            
          //Log the changes that the for loop performed on the new array.
          console.log("------");
          console.log("cidAfter array: " + cidAfter);
          console.log("changeTogGive: " + changeToGive);
          console.log("changeValueCheck: " + changeValueCheck);
          
          let multiplication = 0;
          
          //Check the status of cash drawer
          if (changeToGive === 0 && changeValueCheck !== cidSum) {
              let finalString = "";
              for (let i = cidAfter.length - 1; i>= 0; i--) {
                if (cidAfter[i][2] > 0) {
                  multiplication = Math.round((cidAfter[i][2] * numerals[i][1]) * 100) / 100;
                  finalString += cidAfter[i][0] + ": $" + multiplication + " "; 
                }
              }
              console.log("Status: OPEN " + finalString.trimEnd());
              changeDueText.innerText = "Status: OPEN " + finalString.trimEnd();
              finalString = "";
              
              //Display cash in drawer values in HTML
              cid = cidAfter;
              let denominations = [pennies, nickels, dimes, quarters, dollars, fiveDollars, tenDollars, twentyDollars, hundredDollars];
              for (let i = 0; i < denominations.length; i++) {
                denominations[i].textContent = `$${cid[i][1]}`; 
              }
          }
          else if (changeToGive === 0 && changeValueCheck === cidSum){
              //Construct a string displaying change amounts in denominations
              let finalString = "";
              for (let i = cidAfter.length - 1; i>= 0; i--) {
                if (cidAfter[i][2] > 0) {
                  multiplication = Math.round((cidAfter[i][2] * numerals[i][1]) * 100) / 100;
                  finalString += cidAfter[i][0] + ": $" + multiplication + " ";
                }
              }
              console.log("Status: CLOSED " + finalString.trimEnd());
              changeDueText.innerText = "Status: CLOSED " + finalString.trimEnd();  
              finalString = "";
              
              //Display cash in drawer values in HTML
              cid = cidAfter;
              let denominations = [pennies, nickels, dimes, quarters, dollars, fiveDollars, tenDollars, twentyDollars, hundredDollars];
              for (let i = 0; i < denominations.length; i++) {
                denominations[i].textContent = `$${cid[i][1]}`; 
              }
          }
          else {
              console.log("Status: INSUFFICIENT_FUNDS");  
              changeDueText.innerText = "Status: INSUFFICIENT_FUNDS"; 
          }
      }
}
      
console.log("-----------------------------------");
         
//Event listener for checking if customer has enough cash
purchaseButton.addEventListener("click", cashCheck);