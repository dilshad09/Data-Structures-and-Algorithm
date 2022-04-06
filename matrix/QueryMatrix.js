
function runProgram(input) {
  input = input.trim().split('\n');
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let [n, m, q] = input[line++].trim().split(' ').map(Number);
      let matrix = []
      for(let i=0; i<n; i++){
          let rows = input[line++].trim().split(" ").map(Number);
          matrix.push(rows)
      }
      queryMatrix(matrix,n,m,q)
  }

  
  function queryMatrix(matrix, n, m, q){
    let ans = []
    if(q === 1){
      for(let i=0; i<n; i++){
          if(i%2 === 0){
              for(let j =0; j<m; j++){
                  ans.push(matrix[i][j])
              }
          }else{
              for(let j =m-1; j>=0; j--){
                  ans.push(matrix[i][j])
              }
          }
      }
    }else{
      for(let i=0; i<n; i++){
          if(i%2 === 0){
              for(let j =m-1; j>=0; j--){
                  ans.push(matrix[i][j])
              }
              
          }else{
              for(let j =0; j<m; j++){
                  ans.push(matrix[i][j])
              }
          }
      }
    }
    console.log(ans.join(" "))
}
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9
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
  

  