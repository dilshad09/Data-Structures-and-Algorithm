
function runProgram(input) {
  input = +input
  let memo = new Array(input+1).fill(0)
  console.log(fibbonacci(input, memo))

  function fibbonacci(n, memo){
    if(n < 0) return ;
    
    if(n == 0 || n== 1) return n;
    if(memo[n] != 0) return memo[n]
    let fib =  fibbonacci(n-1, memo) + fibbonacci(n-2, memo)
    
    memo[n] = fib;
    
    return fib;
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`4`);
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
  

  