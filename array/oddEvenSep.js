
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      let q = +input[line++];
      console.log(oddEvenSeparate(n,arr,q).join(" "))
  } 
     function oddEvenSeparate(n, arr, q){
         let odd = []
         let even = [];
         for(let i=0; i<n; i++){
             if(arr[i]%2 ==0){
                 even.push(arr[i]);
             }else{
                 odd.push(arr[i]);
             }
         }
         even.sort((a,b)=>{
            return a - b
        });
        odd.sort((a,b)=>{
            return a - b
        });
         if(q==1){
            return even.concat(odd)
         }else{
            return odd.concat(even)
         }
     }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
    2`);
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
  

  