
function runProgram(input) {
  input = input.trim().split("\n");
  let [n1,str1,n2,str2] = input
    n1 = +n1;
    n2 = +n2;
    str1 = str1.trim()
    str2 = str2.trim()
    bagOfLetters(n1,n2,str1, str2)
    
    function bagOfLetters(n1,n2,str1,str2){
        let obj = {}
  
        for(let i=0; i<n1; i++){
            if(obj[str1[i]] === undefined){
                obj[str1[i]] = 1;
            }else {
                obj[str1[i]]++
            }
        }
        let bool = false;
        for(let i=0; i<n2; i++){
            if(str2[i] in obj){
           
                bool = true;
            }else{
      
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
    runProgram(`5
    aabbc
    3
    abc`);
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
  

  