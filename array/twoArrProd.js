
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let n = +input[line++];
      let arr1 = input[line++].trim().split(" ").map(Number);
      let arr2 = input[line++].trim().split(" ").map(Number);
      twoArrProd(n,arr1,arr2)
  }

  function twoArrProd(n,arr1,arr2){
      let total = 1;
      for(let i=0; i<n; i++){
          total *= arr1[i]* arr2[i]
      }
      console.log(total)
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    3
    1 2 3
    2 3 1`);
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
  

  