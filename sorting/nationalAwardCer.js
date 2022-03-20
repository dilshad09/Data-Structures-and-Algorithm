// let arr = [1,0,2,0,1,0,2,0];

function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      // sortIt(n,arr)
      console.log(sortIt(arr).join(" "))
  }
    // function sortIt(n, arr){
    //     //
    //     console.log(mergeSort(arr,n).join(" "));

    //     function mergeSort(arr, n){
    //        if(arr.length == 1) return arr;
    //        let mid = Math.floor(arr.length/2);
    //        let left = arr.slice(0,mid);
    //        let right = arr.slice(mid);
    //        return merge(mergeSort(left), mergeSort(right));
    //     }

    //     function merge(left, right){
    //         let ans = [];
    //         let i =0;
    //         let j=0;
    //         while(i<left.length && j<right.length){
    //             if(left[i] > right[j]){
    //                 ans.push(right[j]);
    //                 j++;
    //             }else{
    //                 ans.push(left[i]);
    //                 i++;
    //             }
    //         }

    //         while(i<left.length){
    //             ans.push(left[i]);
    //             i++;
    //         }
    //         while(j<right.length){
    //             ans.push(right[j]);
    //             j++;
    //         }
    //         return ans;
    //     }
    // }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`3
    1
    2
    3
    2 0 1
    4
    2 0 2 1`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
// let arr = [1,0,2,0,1,0,2,0];


function sortIt(arr){
  // console.log(arr)
let zero = 0;
let one = 0;
let two = 0;
for(let i=0; i<arr.length; i++){
  if(arr[i] === 0){
    zero++;
  }else if(arr[i] === 1){
    one++;
  }else if(arr[i] === 2){
    two++;
  }
}

let cnt = 0;

for(let i=0; i<zero; i++){
  arr[cnt++] = 0;
}
for(let j=0; j<one; j++){
  arr[cnt++] = 1;
}

for(let k=0; k<two; k++){
  arr[cnt++] = 2;
}
return arr
}
