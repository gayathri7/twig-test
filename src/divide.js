/** divideArrayIntoNEqualParts function Start*/
function divideArrayIntoNEqualParts(arr, n) {
  const returnValue = [];
  const numberOfSubArrs = Math.ceil(arr.length / n); //get the no of sub arrays
  if (n <= 0) return { error: "Please provide valid N value" } //return 
  for (let i = 0; i < n; i++) {
    let subArr = [];
    for (let j = 0; j < numberOfSubArrs; j++) {
      let z = arr[j + i * numberOfSubArrs];
      if (z !== undefined) {
        subArr.push(z);
      }
    }
    returnValue.push(subArr);
  }
  return returnValue;
}
/** divideArrayIntoNEqualParts function End*/
module.exports = divideArrayIntoNEqualParts;