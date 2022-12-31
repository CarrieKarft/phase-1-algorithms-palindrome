// Problem rewrite
// create a function that outputs true or false depending on weather the inpust string has the same letters reading it from front to back or back to front
function reverseString(word) {
  return word.split('').reverse().join('');
}
function isPalindrome(word) {
  // Write your algorithm here
  return reverseString(word) === word;
  
}
console.log(isPalindrome("robot"))
/* 
  Add your pseudocode here
  change string input to array
  iterate over string array backwards and place into new array
  create an if statement or a ternery operator
  statement will determine weather or not original string array is === to backwards string array
  if all indexe valuses are equal in mirror image then function will return true
  if all index values are not equal in mirror image than function will return false
*/

/*
  Add written explanation of your solution here
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

