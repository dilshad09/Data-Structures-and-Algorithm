
function runProgram(input) {
  input = input.trim().split("\n");
  let [row, col] = input[0].trim().split(" ").map(Number);
  let matrix =[]
  for(let i=0; i<row; i++){
      matrix.push(input[i+1].trim().split(" ").map(Number));
  }
  productOfOddInColumns(matrix,row, col)

  function productOfOddInColumns(matrix, row, col){

    for(let i=0; i<col; i++){
        let oddProd = 1;
        for(let j=0; j<row; j++){
            if(matrix[j][i] % 2 === 1){
               
                oddProd *= matrix[j][i];
            }
        }
        console.log(oddProd)
    }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`3 4
    10 5 12 11
    7 5 2 10
    3 10 2 4`);
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
  

  