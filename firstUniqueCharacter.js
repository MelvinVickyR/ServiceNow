function nonRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    let j = str.charAt(i);
    if (str.indexOf(j) === str.lastIndexOf(j)) {
      return i;
    }
  }
  return -1;
}

console.log(nonRepeated("aabcbd")); // 3
