
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let [row, col] = input[line++].trim().split(" ").map(Number);
      let matrix = []

      for(let i=0; i<row; i++){
          matrix.push(input[line++].trim().split(" ").map(Number))
      }
      spiralTraverse(matrix, row, col) 
  }

  function spiralTraverse(matrix, row, col){
      let minr = 0;
      let minc = 0;
      let maxr = row-1;
      let maxc = col-1;
      
      let cnt = 0;
      let tne = row*col;
      let ans = [];

      while(cnt<tne){
        for(let r=maxr, c=minc; r>=minr && cnt<tne; r--){
            ans.push(matrix[r][c]);
            cnt++;
        }
        minc++;
        for(let r=minr, c=minc; c<=maxc && cnt<tne; c++){
          ans.push(matrix[r][c]);
          cnt++;
        }
        minr++;
        for(let r=minr, c=maxc; r<=maxr && cnt<tne; r++){
          ans.push(matrix[r][c]);
          cnt++;
        }
        maxc--;
        for(let r=maxr, c=maxc; c>=minc && cnt<tne; c--){
          ans.push(matrix[r][c]);
          cnt++
        }
        maxr--;
      }
      console.log(ans.join(" "))
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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
  

  