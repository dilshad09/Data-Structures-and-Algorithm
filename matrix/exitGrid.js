
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let grid = []
      let n = +input[line++];
      for(let j=0; j<n; j++){
        grid.push(input[line++].trim().split(""))
      }
      console.log(exitGrid(grid,n))
  }

   function exitGrid(grid,n){
    let cnt = 0;
     let i = 0;
     let j = 0;
    
     while(i>=0 && j>=0 && i<n && j<n){
       if(grid[i][j] === "X"){
         return 0;
       }else{
         if(grid[i][j] === "R"){
           grid[i][j] = "X"
           j++;
         }else   if(grid[i][j] === "L"){
          grid[i][j] = "X"
          j--;
        }else   if(grid[i][j] === "D"){
          grid[i][j] = "X"
          i++;
        }else   if(grid[i][j] === "U"){
          grid[i][j] = "X"
          i--;
        }else{
          return 0;
        }
       }
       cnt++;
     }
    return cnt;
   }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`4
    5
    RRRRD
    DLLLL
    RRRRD
    DLLLL
    RRRRR
    5
    DUDLL
    DLLUR
    LLLRR
    LDDLD
    RLUDL
    1
    D
    4
    UDDL
    RLDR
    RUDU
    LDDR
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
  

