
function runProgram(input) {
  input = +input;
  let dp = new Array(input + 1).fill(0)

  console.log(stair(input,dp));

  function stair(n){
      if(n == 0) return 1
      if(n < 0) return 0;
      if(dp[n] !=0){
          return dp[n]
      }
      let s =  stair(n-1) + stair(n-2) + stair(n-3)
      dp[n] = s;
      return dp[n]
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
  

  