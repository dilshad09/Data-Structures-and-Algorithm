
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1];

  if(arr.includes(42)){
      console.log("Yes")
  }else{
      console.log("No")
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`5
    3 7 0 9 8`);
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
  

  