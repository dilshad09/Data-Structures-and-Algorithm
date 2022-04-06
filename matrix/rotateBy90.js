
function runProgram(input) {
  input = input.trim().split("\n")
  let n = +input[0] 
  let mat = []
  let line = 1;
  for(let i=0; i<n; i++){
      mat.push(input[line++].trim().split(" ").map(Number))
  }
  rotateBy90(mat,n)



  function rotateBy90(mat, n){
      for(let i=n-1; i>=0; i--){
          let ans = ""
          for(let j=0; j<n; j++){
            ans += " " + mat[j][i]
          }
          console.log(ans.trim())
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
  

  