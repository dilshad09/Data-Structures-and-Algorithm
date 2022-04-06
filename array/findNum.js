
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let q = +input[2];
 

  for(let i=3; i<q+3; i++){
      let [x, y] = input[i].trim().split(" ").map(Number);
      
      findNumInArray(x,y,arr,n)
  }

    function findNumInArray(x, y, arr, n){
        let less = 0;
        let greater = 0;
        console.log(findNumStatus(x, y, arr))
        function findNumStatus(x, y, arr){
            
            let cnt = 0;
             if(x==0){
                for(let i=0; i<arr.length; i++){
                    if(arr[i] >= y){
                        cnt++;
                    }
                }
             }else{
                 cnt = 0
                for(let i=0; i<arr.length; i++){
                    if(arr[i] > y){
                        cnt++;
                    }
                }
             }
             return cnt;
            }
        }
    }

  
  if (process.env.USERNAME === 'd') {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
  

  