
// function runProgram(input) {
//   input = input.trim().split("\n");
//   let test = +input[0];
//   let line = 1;

//   for(let i=0; i<test; i++){
//       let n = +input[line++];
//       let arr = input[line++].trim().split(" ").map(Number);
//       prodOfArray(n,arr)
//   }

//     function prodOfArray(n,arr){
//         let ans = "";
//         for(let i=0; i<n; i++){
//             let prod = 1;
//             for(let j=0; j<n; j++){
//                 if(i !==j){
//                     prod *= arr[j]
                    
//                 }
//             }
            
//             ans += " " + prod;
//         }
//         console.log(ans.trim())
//     }
// }
  
//   if (process.env.USERNAME === 'd') {
//     runProgram(`2
//     5
//     1 2 3 4 5
//     3
//     3 2 7`);
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
      prodOfArray(n,arr)
  }

    function prodOfArray(n,arr){
     
        let prod = 1;
        let print = ""
        for(let i=0; i<n; i++){
            prod *= arr[i]
        }
        for(let j=0; j<n; j++){
           print += " " + (prod/arr[j])
        }
       console.log(print.trim())
    }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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
  

  