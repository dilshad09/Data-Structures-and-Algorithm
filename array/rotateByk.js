
// function runProgram(input) {
//   input = input.trim().split("\n");
//   let test = +input[0];
//   let line = 1;

//   for(let i=0; i<test; i++){
//       let [n,k] = input[line++].trim().split(" ").map(Number);
//       let arr = input[line++].trim().split(" ").map(Number);
//       console.log(rotateByK(n,k,arr))
//   }
//     function rotateByK(n,k,arr){
//       k = n%k;
//        reverse(arr, 0, n-k);
//        reverse(arr,n-k,n)
//        reverse(arr,0, n)


//       function reverse(arr, start,end){
//          let i=start;
//          let j = end-1;
//          while(i<j){
//           swap(arr,i,j)
//           i++;
//           j--;
//          }
        
//       }

//       function swap(arr, i, j){
//         return [arr[i], arr[j]] = [arr[j], arr[i]]
//       }
//       return arr;
//     }
// }
  
//   if (process.env.USERNAME === 'd') {
//     runProgram(`3
//     3 1
//     1 2 3
//     2 2
//     1 2
//     2 3
//     1 2`);
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
      let [n,k] = input[line++].trim().split(" ").map(Number);
      let arr = input[line++].trim().split(" ").map(Number);
      console.log(rotateByK(n,k,arr))
  }
    function rotateByK(n,k,arr){
      k = k%n;
       reverse(arr, 0, n-k);
       reverse(arr,n-k,n)
       reverse(arr,0, n)


      function reverse(arr, start,end){
         let i=start;
         let j = end-1;
         while(i<j){
          swap(arr,i,j)
          i++;
          j--;
         }
        return arr;
      }

      function swap(arr, i, j){
        return [arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr;
    }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2`);
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
  

  