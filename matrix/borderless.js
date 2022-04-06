
function runProgram(input) {
  input = input.trim().split("\n");
  let [row, col] = input[0].trim().split(' ').map(Number);
  let matrix = []

  for(let i=0; i<row; i++){
      matrix.push(input[i+1].trim().split(" ").map(Number))
  }
  borderlessSum(matrix,row, col)

  function borderlessSum(matrix, row, col){
      let sum = 0;

      for(let i=1; i<row-1; i++){
          for(let j=1; j<col-1; j++){
              sum += matrix[i][j]
          }
      }
      console.log(sum)
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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
  

  