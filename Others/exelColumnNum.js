
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      exelColumnNum(input[line++].trim())
  }


  function exelColumnNum(char){
      let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let mapChar = {}
      for(let i=0;i<alphabet.length; i++){
        mapChar[alphabet[i]] = i + 1;
      }
      let pow = 0
      let sum = 0;
      for(let j=char.length-1; j>=0; j--){
          
          if(char[j] in mapChar){
              sum += (+mapChar[char[j]] * (26 **pow))

          }
          pow++;
      }
      
      console.log(sum)
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`3
    A
    AB
    ZY`);
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
  

  