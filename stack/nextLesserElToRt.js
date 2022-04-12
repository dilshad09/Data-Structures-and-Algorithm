// // lesser element to right;
// // brute force
// // let arr = [5,4,1,0,1,1,-5,9,8,-1,-3]

// // let ans  = [];

// // for(let i=0; i<arr.length; i++){
// //     let bool = true;
// //     for(let j=i; j<arr.length; j++){
// //         if(arr[i] > arr[j]){
// //             bool = false;
// //             ans.push(arr[j]);
// //             break;
// //         }
// //     }
// //     if(bool){
// //         ans.push(-1)
// //     }
// // }
// // console.log(ans)

// // optimized solution

// let arr = [5,4,1,0,1,1,-5,9,8,-1,-3]
// let stack = [];
// let ans = []

// let n = arr.length;

// while(n--){
//     if(stack.length == 0){
//         ans.push(-1)
//     }else {
//         while(stack.length !=0 && stack[stack.length - 1] >= arr[n]){
//             stack.pop()
//         }
//         if(stack.length == 0){
//             ans.push(-1)
//         }else{
//             ans.push(stack[stack.length - 1])
//         }
//     }
//     stack.push(arr[n])
// }
// console.log(ans.reverse())




function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  nextSmallerElement(n, arr)


  function nextSmallerElement(n, arr){
      let ans = []

    //   for(let i=0; i<n; i++){
    //       let bool = false;
    //       for(let j=i-1; j>=0; j--){
    //           if(arr[i] > arr[j]){
    //               ans.push(arr[j])
    //               bool = true;
    //               break;
    //           }
    //       }
    //       if(!bool){
    //         ans.push(-1)
    //       }
    //   }
    //   console.log(ans.join(" "))

    // using stack 
    let stack = []
    let i=0;
    while(i<n){
        while(arr[i] <= stack[stack.length-1] && stack.length){
            stack.pop()
        }
        if(stack.length == 0){
            ans.push(-1)
        }else{
            ans.push(stack[stack.length -1])
        }
        stack.push(arr[i])
        i++;
    }
    console.log(ans.join(" "))
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
  

  