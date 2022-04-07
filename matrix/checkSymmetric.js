
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let matrix = []
      let n = +input[line++];
      for(let j=0; j<n; j++){
        matrix.push(input[line++].trim().split(""))
      }
      checkSymmetric(matrix,n)
  }

  function checkSymmetric(matrix, n){
      let bool = true;
      let binary = 1;
      for(let i=0; i<n; i++){
         let j = 0;
         let k = n-1;
         while(j<k){
             if(matrix[i][j++] == matrix[i][k--] && bool){
                
                bool = true;
               
             }else{
                 bool = false;
             }
             if(matrix[j++][i] == matrix[k--][i] && binary){
               
                binary = 1;
                
             }else{
                 binary = 0;
             }
         }
      }
      if(bool && binary){
          console.log("BOTH")
      }else if (bool){
          console.log("HORIZONTAL")
      }else if(binary){
          console.log("VERTICAL")
      }else{
          console.log("No")
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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
  

  