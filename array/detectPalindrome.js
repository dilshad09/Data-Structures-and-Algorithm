
function runProgram(input) {
  input = input.trim()
  console.log(detectPalindrome(input))


  function detectPalindrome(input){
      if(input.length == 1) return "Yes"
      let i =0;
      let j= input.length - 1;
      let bool = false;
      while(i<j){
          if(input[i] == input[j]){
              bool = true;
              i++;
              j--;
          }else{
              return "No";
          }
      }
      if(bool){
          return "Yes";
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1121`);
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
  

  