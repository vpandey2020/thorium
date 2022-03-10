let arr = [1, 5, 6, 4, -1, 5, 10, 5];
let arr1 = [];
let count = 0;

// const duplicateElement = arr.filter(
//   (item, index) => arr.indexOf(item) !== index
// );

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    let sum = arr[i] + arr[j];
    if (arr.includes(sum)) {
      count++;
      arr1.push([arr[i], arr[j]]);
    }
  }
}
console.log(arr1);


let arr2 = [];

for (let k = 0; k < arr1.length; k++) {
  let ele = arr1[k];
  let c = 0
  for (let z = k + 1; z < arr1.length; z++) {
    let element = arr1[z];
    if (
      (ele[0] == element[0] && ele[1] == element[1]) ||
      (ele[0] == element[1] && ele[1] == element[0]) 
      ) {
        c++
        if(c<=1){
      arr2.push(ele);
        }
    }
  }
}
console.log(arr2);
console.log(arr1.length - arr2.length);