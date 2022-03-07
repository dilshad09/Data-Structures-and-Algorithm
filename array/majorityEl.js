
// function runProgram(input) {
//   input = input.trim().split("\n");
//   let line = 1;
//   let test = +input[0]
//   for(let i=0; i<test; i++){
//       let n = +input[line++];
//       let arr = input[line++].trim().split(" ").map(Number);
//       console.log(majorityElement(n, arr))
//   }
//     function majorityElement(n, arr){
//         let majorityEl = Math.floor(n/2);
        
//         let obj = {}
//         for(let i=0; i<n; i++){
//           if(obj[arr[i]] == undefined){
//               obj[arr[i]] = 1;
//           }else{
//               obj[arr[i]]++;
//           }
//         }
        
//        for(let k in obj){
//            let maxEl = obj[k]
          
//            if(maxEl > majorityEl){
            
//                return k;
//            }
//        }
//      return -1
//     }
// }
  
//   if (process.env.USERNAME === 'd') {
//     runProgram(`2
//     6
//     1 1 1 1 2 3
//     5
//     1 2 2 2 3`);
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
    let line = 1;
    let test = +input[0]
    for(let i=0; i<test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(majorityElement(n, arr))
    }
      function majorityElement(n, arr){
         let majority = arr[0];
         let cnt = 1;

         for(let i=1; i<n; ++i){
             if(arr[i] == majority){
                 cnt++;
             }else{
                 cnt--;
                 if(cnt==0){
                     majority = arr[i];
                     cnt = 1;
                 }
             }
         }
         cnt = 0;
         for(let j=0; j<n; j++){
             if(majority== arr[j]){
                 cnt++;
             }
         }
         if(cnt <= Math.floor(n/2)){
             return -1;
         }else{
             return majority;
         }
      }
  }
  2a1c1a1df12a69a
  fd7a6f3572f4952baedbc5e8ac34a8ae73c671ac
    if (process.env.USERNAME === 'd') {
      runProgram(`2
      6
      1 1 1 1 2 3
      5
      1 1 2 2 3`);
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
    
  
    