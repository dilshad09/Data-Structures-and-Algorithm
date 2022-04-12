
function runProgram(input) {
  input = input.trim().split("\n");
  let group = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  arr.sort((a,b)=>a -b)
  let n = arr.length;
  let sum = 0;
  for(let i=0; i<n; i+=2){
    sum += arr[i]
  }
  console.log(sum)

}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    1 3 1 2`);
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
  

  