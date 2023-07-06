const word = '00000111110101001111100001001';

let currentChainLength = 0;
let maxChainLength = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === '1') {
    // Increment the current chain length if the current character is '1'
    currentChainLength++;
  } else {
   
    currentChainLength = 0;
  }

  // Updating  the maxChainLength if the currentChainLength is greater then maxChainLength
  if (currentChainLength > maxChainLength) {
    maxChainLength = currentChainLength;
  }
}

console.log('Longest chain of letters:', maxChainLength);