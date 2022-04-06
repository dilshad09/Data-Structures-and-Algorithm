
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let mat = []
      let [row, col] = input[line++].trim().split(" ").map(Number)
      for(let j=0; j<row; j++){
        let rows = input[line++].trim().split("");
        mat.push(rows)
      }
      let string = input[line++].trim()
      isStringPossible(mat, row, col, string)
  }

   function isStringPossible(mat, row, col, string){
       let cnt = 0;
       let obj = {}
       for(let i=0; i<row; i++){
           for(let j=0; j<col; j++){
            //   mat[j][i]
            if(mat[j][i] === undefined && cnt < string.length){
                i = i%row;
            }
            if(obj[mat[j][i]] === undefined){
                obj[mat[j][i]] = 1;
            }else{
                obj[mat[j][i]]++
            }
            //   (obj[mat[j][i]] === undefined) ? 1 : obj[mat[j][i]]++
           }
           
       }
       let bool = true;
       for(let i=0; i<string.length; i++){
           if(string[i] in obj){
               bool = true;
           }else{
               console.log(string[i])
               bool = false;
               break;
           }
       }
       if(bool){
           console.log("Yes")
       }else{
           console.log("No")
       }
   }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    3 3
    aba
    xyz
    bdr
    axbaydb
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
  

  