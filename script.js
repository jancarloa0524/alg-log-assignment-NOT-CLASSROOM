/***********************************************************************************************************
GOOGLE SHEET LOG:
https://docs.google.com/spreadsheets/d/1BlCQtCxJ9s1yQbXvuXbfY5ek3gsvdBdYGhbb6FGYocE/edit#gid=1135070982
************************************************************************************************************/





// https://github.com/jancarloa0524/algorithms-log-assignment/blob/main/scripts/duplicates.html
// INPUT: A string of characters
// ALG:
  //  1. Declares variables and splits the string into an array of characters
  //  2. The duplicates are plucked and put into a new array 
  //  3. New array has all the duplicates of duplicates removed and put into a final set of characters, since the previous process does not do this. 
// OUTPUT: The number of duplicate characters in a string
function duplicateCount(text){
    // Declare variables, most are set empty since they will be used later
    text = text.toLowerCase(); // In case there are upper/lowercase letters, this will include them
    var charArr = []; // Array holds all characters
    var dupArr = [];// Array holds all duplicate characters
    var charID = ''; // Used to identify the current character being tested
    charArr = text.split("");
    // The following creates TWO for loops
    // The FIRST selects a character in charArr
    // The SECOND takes that character, checks the rest of the code AFTER selected character, for duplicates.
    // When a duplicate is found, it adds selected character to an array of duplicates.
    for (var select = 0; select < charArr.length; select++){
      for (var test = select + 1; test < charArr.length; test++) {
        if (charArr[select] == charArr[test]) {
          dupArr.push(charArr[select]); // Add selected character to dupArr
          test = charArr.length - 1; // Ends the loop here, since a duplicate was found; moves on to next character
        }
      }
    }
    let finalSet = [...new Set(dupArr)]; // This removes duplicates of duplicates, created by the second for loop
    return finalSet.length;
  }
  
  // console.log(duplicateCount("abcdeaabb"));
  // 2, length 9
  //  console.log(duplicateCount("abcdeaabbcccccddd"));
  // 4
  // console.log(duplicateCount("aabBcde"));
  // 2, should ignore case
  // console.log(duplicateCount("abbbbbbccccccdeaabbcccccddd"));
  // 4
  // console.log(duplicateCount("Indivisibilities"));
  // 2





// INPUT: A string
// ALG: 
  //  1. Set up variables/turn string to lower case and split into an array
  //  2. Use two for loops to select a character, then test that character in the second array. 
  //  3. If the selected character is equal to a tested character, then the function returns false; if not, the loops runs until completed (Might want to improve this, since it runs many, many times).
// OUTPUT: Whether or not the string is an isogram
function isIsogram(str){
  var testStr = true // Initialized as true, will be false if duplicate 
  var charArr = []; // Initilized as an empty array
  str = str.toLowerCase(); // Sends the string to lower case
  charArr = str.split('') // Splits the string into an array of the characters in it
  // The following first selects a character, in the second loop it tests that character to see if it has any duplicates. If true, it sets testStr to false, if false, it keeps it true. Once these loops are done, it returns testStr.
      for (var select = 0; select < charArr.length; select++){
          for (var test = select + 1; test <charArr.length; test++) {
              if (charArr[select] == charArr[test]) {
              testStr = false
              }
          }
      }
      return testStr
  }
// testing
// console.log(isIsogram("Dermatoglyphics"))
// true
// console.log(isIsogram("aba"))
// false
// console.log(isIsogram("Let's Go"))
// true
// console.log(isIsogram("LET'S GOOOOOOOOOOOO"))
// false





  // INPUT: Starting price of old car; Starting price of new car; Savings per month; Percent loss per month of both cars
  // ALG: 
      // 1: First, I need to establish the values of some variables used to assist in calculations
      // 2: Run a "for" loop which performs calculations for each month.
          // 1. Check if the old car costs more then/equal to new car.
          // 2. Check if month is divisible by 2, and not equal to zero (to exlude 0th month)
          // 3. If month is 0, set final answer to (CALCULATION 1). If not, set final answer to (CALCULATION 2)
      // 3: Return the final answer, which is the OUTPUT
  // OUTPUT: Number of months, difference between savingsPerMonth and startPriceNew, ONLY when the car is affordable
  function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    var savingsPlusOld = savingperMonth; // Savings + Old Price (total savings) is created, due to the fact that the car will be sold to assist payment of new car. Set to savingsPerMonth, so that the "for" loop works as intended
    var finalAnswer; // This will be returned later on
    percentLossByMonth = percentLossByMonth / 100 // Finds decimal value of percentage
    for (var month = 0; savingsPlusOld < startPriceNew; month++) { // Repeats until total savings > the price of the New Car, now affordable
        if (startPriceOld => startPriceNew) { // If the price of the old car > new car, there is no need to save and thus the payment is made in first month
            savingsPlusOld = startPriceOld; // Sets total savings to Old Price, so that the loop does not repeat
        }
        if (month % 2 == 0 && month != 0) { // Every two months, +0.5%
            percentLossByMonth = percentLossByMonth + 0.005; 
        }
        // The following is a ternary that calculates differently if the month is or isn't 0.
        // IF 0, simply Old Price - New Price. No savings or percentages are applied until the end of the first month. These are the initial values and matter when the Old Price > New Price. 
        // IF NOT 0, apply percentages to Old and New Price, find total savings, and total savings - New Price to find difference. 
            // Note: These cannot be put into one equation due Old/New car changing prices. So every month must be less then the last. Total saivngs also increases every month. 
        month == 0 ? (finalAnswer = [month, Math.round(startPriceOld - startPriceNew)]) : (startPriceOld = startPriceOld - (startPriceOld * percentLossByMonth), startPriceNew = startPriceNew - (startPriceNew * percentLossByMonth), savingsPlusOld = (savingperMonth * month) + startPriceOld, finalAnswer = [month, Math.round(savingsPlusOld - startPriceNew)])

        // The following is an easier to undersatand if/else statement. It is the exact same code as the ternary.
        /* if (month == 0) {
            finalAnswer = [month, Math.round(startPriceOld - startPriceNew)];
        } else {
        startPriceOld = startPriceOld - (startPriceOld * percentLossByMonth);
        startPriceNew = startPriceNew - (startPriceNew * percentLossByMonth);
        savingsPlusOld = (savingperMonth * month) + startPriceOld;
        finalAnswer = [month, Math.round(savingsPlusOld - startPriceNew)];
        }
        */
    }
    return finalAnswer;
}
// Testing
// console.log(nbMonths(2000, 8000, 1000, 1.5)); // should return [6, 766]
// console.log(nbMonths(12000, 8000, 1000, 1.5)); // should return [0, 4000]
// console.log(nbMonths(8000, 8000, 1000, 1.5)); // should return [0, 0]
// console.log(nbMonths(2500, 3600, 1000, 1.2)); // should return [2, 932]