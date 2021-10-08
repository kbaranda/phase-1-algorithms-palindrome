function isPalindrome(word) {
  let a = word.split("")
  let reverseA = a.reverse()
  let reverseWord = reverseA.join("")
  if (word == reverseWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  take the word that is written in the function
  break down the word
  */
 
 /*
 Add written explanation of your solution here
 make "word" into an array - word.split("")
 reverse the array - word.reverse()
 turn back into a string - word.join("")
 use if then for true or false
 */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
