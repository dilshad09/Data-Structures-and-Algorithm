
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
    let [n,k] = input[line++].trim().split(" ").map(Number);
    kthBit(n,k)
  }
  function kthBit(n,k){
       if((n & 1 << k) === 0){
         console.log("No");
       }else{
         console.log("Yes")
       }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    5 2
    5 1`);
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
  

  