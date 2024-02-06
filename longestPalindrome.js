function longestPalindrome(str) {
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substr = str.slice(i, j);
      if (substr === substr.split("").reverse().join("")) {
        if (substr.length > longest.length) {
          longest = substr;
        }
      }
    }
  }
  return longest;
}
console.log(longestPalindrome("forgeeksskeegfor")); //geeksskeeg
