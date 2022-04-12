
function runProgram(input) {
  input = input.trim().split("\n");
  let ques = +input[0];
  for(let i=0; i<ques; i++){
     balancedParenthesis(input[i+1].trim())
  }


  function balancedParenthesis(parenthesis){
      let stack = []
      let i =0;
      let n = parenthesis.length;
      let bool = false;
      while(i<n){
          while(parenthesis[i] == "{" || parenthesis[i] == "(" || parenthesis[i] === "["){
            stack.push(parenthesis[i]);
            i++;
          }
          
          if(parenthesis[i] === ')'){
              if(stack[stack.length -1] === '(' && stack.length){   
                bool = true;
                stack.pop()
              }else{
                bool = false;
                break;
              }
          }else if(parenthesis[i] === '}'){
             if(stack[stack.length -1] === '{' && stack.length){   
              bool = true;
              stack.pop()
            }else{
              bool = false;
              break;
            }
          }else if(parenthesis[i] === ']'){
            if(stack[stack.length -1] === '[' && stack.length){   
              bool = true;
              stack.pop()
            }else{
              bool = false;
              break;
            }
          }else{
            bool = false;
            break;
          }
        i++;
      }

      if(bool && stack.length == 0){
          console.log("balanced")
      }else{
          console.log("not balanced")
      }
  }
}
  
  if (process.env.USERNAME === 'd') {
    runProgram(`3
  }(()){}
  (()
  ))))))
    `);
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



// function cipher(str){
//   let ans = ""
//   let n = str.length;
//   let i=0;
//   while(i<n){
//       let j = i+1;
//       let bool = false;
//      let cnt = 1;
//       while(str[i] == str[j]){
//         j++;
//         bool = true;
//         cnt++;
//       }
//       if(bool){
//         ans += str[i]+cnt;
//         i = j;
//       }else{
//         ans += str[i] + cnt;
//         i++;
//       }
//   }
//   return ans;
// }

// console.log(cipher("abcde"))
  

  