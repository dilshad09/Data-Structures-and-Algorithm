
function runProgram(input) {
  input = input.trim();
  let alphabets = "abcdefghijklmnopqrstuvwxyz"
  let obj = {}
  let alphaLen = alphabets.length;
  for(let i=0; i<alphaLen; i++){
      obj[alphabets[i]] = i;
  }

  let newStr = ""
  for(let i=0; i<input.length; i++){
      if(input[i] in obj){
        
          let pos = (obj[input[i]]**2 )%alphaLen;
            newStr += alphabets[pos]
      }
      
    
  }
  console.log(newStr.trim())
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`ilnargjmnu`);
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
  

  