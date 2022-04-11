
function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for(let i=0; i<test; i++){
      let n = +input[line++];
      let arr1 = input[line++].trim().split(" ").map(Number)
      let arr2 = input[line++].trim().split(" ").map(Number)
      let res = findCommonElem(n, arr1, arr2)
      console.log(res)
  }

  function findCommonElem(n, arr1, arr2){
      let cnt = 0;
      let i=0;
      let j = n-1;
      while(i<n && j >=0){
        if(arr1[i] == arr2[j]){
            cnt++;
            i++;
            j--;
        }else if(arr1[i] > arr2[j]){
            j--;
        }else{
            i++;
        }
      }
      return cnt;
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
  

  