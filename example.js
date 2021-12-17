/***********************************************************************************************************
GOOGLE SHEET LOG:
https://docs.google.com/spreadsheets/d/1Xp6zKu1ZjR_AhIALSF5iwUyxtMLR8Kvcxzs7FE0EoGQ/edit#gid=765869514
************************************************************************************************************/





// https://github.com/hstatsep-js/loops/blob/main/longest-words.html
// INPUT: a string containing a phrase
// ALGORITHM: split string into array of words, then loop through each word to find the "reigning champ" length, then loop again to find all words of that length
// OUTPUT: an array containing all of the words with the longest length
function getLongestWords(phrase){
  var phraseArr = phrase.split(" "); // splits the phrase at each space (and save in an array) in order to loop word-by-word
  var longestWordLength = 0;
  var longestWords = [];

  // first loop through to find the "reigning champ" (i.e. at first maybe it's 3, then the loops finds that 5 is bigger, etc)
  for(var i = 0; i < phraseArr.length; i++){ // goes through every single element/word in the array
      if(phraseArr[i].length > longestWordLength){ // the current word breaks the record
          longestWordLength = phraseArr[i].length; // overwrite the reigning champ
      }
  } // now we know that longestWordLength is the max

  // second loop is to collect all of the words that are the max length
  for(var i = 0; i < phraseArr.length; i++){
      if(phraseArr[i].length == longestWordLength){ // the current word's length matches the max
          longestWords.push(phraseArr[i]); // add to array to be returned
      }
  }
 return longestWords;
}
// var phrase1 = "You know youre in love when you cant fall asleep because reality is finally better than your dreams";
// console.log(getLongestWords(phrase1)); // ["because", "reality", "finally"]
// var phrase2 = "From there to here and here to there funny things are everywhere";
// console.log(getLongestWords(phrase2)); // ["everywhere"]   





// https://the-winter.github.io/codingjs/exercise.html?name=squirrelPlay&title=Logic-1
// INPUT: a number temperature, and a boolean representing whether or not it's summer time
// ALGORITHM: check for summer or not, then check within the min/max temperature range
// OUTPUT: a boolean representing whether or not squirrels are playing
function squirrelPlay(temp, isSummer){
    if(isSummer){
        // between 60 and 100
        if(temp >= 60 && temp <= 100){
            return true; // exits early
        }
    } else { // NOT summer
        // between 60 and 90
        if(temp >= 60 && temp <= 90){
            return true; // exits early
        }
    }
    return false; // we know squirrels aren't playing       
}
// console.log(squirrelPlay(70, false)); // true
// console.log(squirrelPlay(95, false)); // false
// console.log(squirrelPlay(95, true)); // true
