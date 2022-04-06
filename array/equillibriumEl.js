
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  console.log(findEquillibrium(n,arr))

  function findEquillibrium(n, arr){
      let first = 0;
      for(let i=0; i<n; i++){
          first += arr[i];
          let second = 0;
          for(let j=i+2; j<n; j++){
              second += arr[j];
          }
         
          if(first === second){
             return i+2;
          }
      }
      return -1;
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`5
    3 3 5 5 1`);
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
  

  