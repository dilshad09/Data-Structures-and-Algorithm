
// function runProgram(input) {
//   input = input.trim().split("\n");
//   let test = +input[0];
//   let line = 1;

//   for(let i=0; i<test; i++){
//       let n = +input[line++];
//       let arr = input[line++].trim().split(" ").map(Number);
//       findUnique(n,arr)
//   }
//     function findUnique(n, arr){
//         let obj = {};
//         for(let i=0; i<n; i++){
//             if(obj[arr[i]] == undefined){
//                 obj[arr[i]] = 1;
//             }else{
//                 obj[arr[i]]++;
//             }
//         }
//         for(let k in obj){
//             if(obj[k] == 1){
//                 console.log(k)
//             }
//         }
//     }
// }
  
//   if (process.env.USERNAME === 'd') {
//     runProgram(`2
//     1
//     5
//     5
//     1 2 1 3 2`);
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
  

  
function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
  
    for(let i=0; i<test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        findUnique(n,arr)
    }
      function findUnique(n, arr){
         
          for(let i=0; i<n; i++){
             
          }
         
      }
  }
    
    if (process.env.USERNAME === 'd') {
      runProgram(`2
      1
      5
      5
      1 2 1 3 2`);
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
    
  
    