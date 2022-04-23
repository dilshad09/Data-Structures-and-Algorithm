
function runProgram(input) {
  input = input.trim().split("\n");

  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let [n, m] = input[line++].trim().split(" ").map(Number);
      let mat = [];
      for(let j=0; j<n; j++){
          mat.push(input[line++].trim().split(" ").map(Number));
      }
      findDistinct(mat, n, m)
  }

  function findDistinct(mat, n, m){
      
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
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
  

  