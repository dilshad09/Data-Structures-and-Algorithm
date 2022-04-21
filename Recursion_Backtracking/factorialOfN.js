
function runProgram(input) {
  console.log(factorial(+input));

  function factorial(n){
      if(n<0) return ;
      if(n === 0) return 1;
    return n * factorial(n-1)
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`5`);
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
  

  