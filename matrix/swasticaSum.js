
function runProgram(input) {
  input = input.trim().split("\n");
  let [row, col] = input[0].trim().split(" ").map(Number);
  let mat = []
  for(let i=0; i<row; i++){
      mat.push(input[i+1].trim().split(" ").map(Number))
  }
  swasticaSum(mat, row,col)


  function swasticaSum(mat, row, col){
        let sum1 = 0;
        let sum2 = 0;
        let r1 = Math.ceil(row/2)
        let c1 = Math.ceil(col/2)
       
        for(let i=0; i<r1; i++){
            sum1 += mat[i][0]
            
        }
        for(let j=1; j<col; j++){
            sum1 += mat[r1-1][j]
            
        }
        for(let k=r1; k<row; k++){
            sum1 += mat[k][col-1]
           
        }

        for(let i=col-1; i>=c1-1; i--){
            sum2 += mat[0][i]
          
            
        }
        for(let j=1; j<row; j++){
            sum2 += mat[j][c1-1]
           
        }
        for(let k=c1-2; k>=0; k--){
            sum2 += mat[row-1][k]
           
          
           
        }
         console.log(Math.abs(sum1 - sum2))
  }




}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`3 5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    `);
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
  

  