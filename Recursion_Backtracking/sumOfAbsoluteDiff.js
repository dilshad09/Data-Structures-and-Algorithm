
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number)
      console.log(sumOfAbsoluteDifference( n, arr))
  }

  function sumOfAbsoluteDifference( n, arr){
     let i = 0;
     let sum = 0;
     sumResult(i, n , arr)
     function sumResult(i, n, arr){
        if(i === n-1) return;
        let diff = Math.abs(arr[i] - arr[i+1])
        sum += diff;
  
       return sumResult(i+1, n, arr)

     }
     return sum;
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    5
    3 5 6 1 8`);
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
  

  