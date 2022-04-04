let arr = [3,5,8,7];
let target = 8;

console.log(targetSumSubset(arr,0,0,target,[]));

function targetSumSubset(arr,i,sum, target,res){
  if(i === arr.length || sum > target) {
      return ;
  }
  if(sum === target){
      console.log(res)
      
  }
  targetSumSubset(arr, i+1,sum, target, res)
  res.push(arr[i])
 targetSumSubset(arr, i+1,sum + arr[i] , target, res) 
 res.pop()
 return
}