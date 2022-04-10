
function runProgram(input) {
  input = input.trim().split("\n");
  let [n,k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(longestSubArrSum(n,k,arr))

  function longestSubArrSum(n,k,arr){
      let cnt = 0;
      let sum = arr.reduce((c,v)=>{return c+v})
      let i = 0;
      let j = n-1;
       while(i<j){
           if(sum % k !== 0){
               cnt++;
               return cnt;
           }
            
           if( (arr[i] % k !== 0)  && (arr[j] % k !== 0) ){
              cnt++
              cnt++;
              return cnt;
               i++;
               j--;
           }else if((arr[i] % k !== 0)  || (arr[j] % k !== 0)){
               cnt++
               return cnt
               i++;
           }else{
           
               i++;
               j--;
           }
       }
       return cnt;
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`5 3
    2 4 3 5 1`);
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
  

  