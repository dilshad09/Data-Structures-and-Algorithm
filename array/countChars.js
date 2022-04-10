
function runProgram(input) {
  input = input.trim()
  let n = input.length;
  let s = ""
  let i = 0;
  while(i<n){
      let j = i+1;
      let cnt = 1;
      
      let bool = false;
    while(input[i]==input[j]){
        // console.log(input[i], input[j])
        cnt++;
        j++;
        bool = true;
    }
    
    if(bool){
      s += input[i] + cnt;
        i = j;
    }else{
      s += input[i] + cnt;
      i++;
    }
   
  }


  console.log(s)
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`aaabbbbcc`);
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
  

  