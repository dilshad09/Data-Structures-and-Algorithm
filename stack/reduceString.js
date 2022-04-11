
function runProgram(input) {
  input = input.trim();
  reduceString(input)

  function reduceString(str){
      str = str.split("")
     
      let stack = []
        let n = str.length;
      while(n--){
        stack.push(str[n])
        if(stack[stack.length -1] == str[n-1] && stack.length !==0){
            stack.pop()
            str.pop()
            n--;
        }
      }
      if(stack.length){
        console.log(stack.reverse().join(""))
      }else{
          console.log("Empty String")
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`aaabccddd`);
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
  

  