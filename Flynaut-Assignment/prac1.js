var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

var duplicates = [];
var sameValues = [];

// logic for Checking  duplicate values 
fullWordList.forEach(function(word) {
  if (wordsToRemove.includes(word) && !duplicates.includes(word)) {
    duplicates.push(word);
  }
});

// logic for Checking  same values
fullWordList.forEach(function(word) {
  if (wordsToRemove.includes(word) && !sameValues.includes(word)) {
    sameValues.push(word);
  }
});
//Printing Duplicate & Same values
console.log('Duplicate values:', duplicates);
console.log('Same values:', sameValues);