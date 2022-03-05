
// function runProgram(input) {
//   input = input.trim().split("\n");
//   let n = +input[0];
//   let arr = input[1].trim().split(" ").map(Number);
//     console.log(arrayEquil(n,arr))


//     function arrayEquil(n, arr){
        
//         for(let i=0; i<n; i++){
//             let lsum = 0;
//             let rsum = 0;
//             for(let j=0; j<i; j++){
//                 lsum += arr[j]
//             }
//             for(let k=i+1; k<n; k++){
//                 rsum += arr[k];
//             }
//             if(lsum === rsum) return i+1;
//         }
//         return -1;
//     }
// }
  
//   if (process.env.USERNAME === 'd') {
//     runProgram(`5
//     3 3 5 5 1`);
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
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
      console.log(arrayEquil(n,arr))
  
  
      function arrayEquil(n, arr){
          let tSum = 0;
          for(let i=0; i<n; i++){
            tSum += arr[i]
          }
          let lSum =0;
             for(let j=0; j<n; j++){
                tSum -= arr[j]
                if(lSum === tSum) return j+1;
                lSum += arr[j];
             }
             return -1;
      }
  }
    
    if (process.env.USERNAME === 'd') {
      runProgram(`5
      3 3 5 5 1`);
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
    
  
    