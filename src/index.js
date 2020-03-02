module.exports = function reverse (n) {
  let arr = [];
  const nArr = Math.abs(n).toString().split('');
  for(let i = nArr.length; i >= 0; i--){
    arr.push(nArr[i]);
  }
  return Number(arr.join(''));
}
