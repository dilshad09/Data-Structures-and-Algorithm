
// function runProgram(input) {
//   input = input.trim().split("\n");
//   let test = +input[0];
//   let line = 1;

//   for(let i=0; i<test; i++){
//       let n = +input[line++]
//         let arr = input[line++].trim().split(" ").map(Number);
//         findNextGreater(n, arr);

//   }

//   function findNextGreater(n, arr){
//       let ans = []
//     let stack = [];
//     for(let i=arr.length-1; i>=0; i--){
//         while(stack.length !=0 && arr[i] >= stack[stack.length-1]){
//             stack.pop()
//         }
//         if(arr[i]<stack[stack.length-1]){
//             ans.push(stack[stack.length-1])
//         }else{
//             ans.push(-1)
//         }
//         stack.push(arr[i])
//     }
//     console.log(ans.reverse())
//   }
// }
  
//   if (process.env.USERNAME === 'd') {
//     runProgram(`1
//     4
//     1 3 2 4`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
//   }
  

//   // next greater 




function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
     let n = +input[line++];
     let arr = input[line++].trim().split(" ").map(Number);
    let x =  nextGreaterElement(n, arr)
    console.log(x)
  }

  function nextGreaterElement(n, arr){
    let ans = []
    // for(let i=0; i<n; i++){
    //   let bool = true;
    //   for(let j=i; j<n; j++){
    //     if(arr[i] < arr[j]){
    //       ans.push(arr[j])
    //       bool = false;
    //       break;
    //     }
    //   }
    //   if(bool){
    //     ans.push(-1)
    //   }
    // }

    let stack = []
    while(n--){
      while(arr[n] >= stack[stack.length-1] && stack.length){
        stack.pop()
      }
      if(arr[n] <stack[stack.length -1]){
        ans.push(stack[stack.length -1])
      }else{
        ans.push(-1)
      }
      stack.push(arr[n])
    }
    return ans.reverse().join(" ");
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    4
    1 3 2 4`);
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
  

  