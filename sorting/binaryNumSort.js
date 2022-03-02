var threeSum = function(nums) {
    let ans  = []
    
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            for(let k=0; k<nums.length; k++){
                if((i !=j && i !=k && j !=k) && (nums[i] + nums[j]+nums[k]) ==0 ){
                    ans.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    return [...new Set(ans)]
};
let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))