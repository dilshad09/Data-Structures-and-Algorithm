let arr = [1,0,5,-4,-8,0,1,6];
console.log(mergeSort(arr));

function mergeSort(arr){
    if(arr.length ==0 || arr.length ==1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left, right){
    let ans = [];
    let i =0;
    let j=0;
    while(left.length > i && right.length > j){
        if(left[i] > right[j]){
            ans.push(right[j])
            j++;
        }else{
            ans.push(left[i]);
            i++;
        }
    }
    while(i < left.length){
        ans.push(left[i])
        i++;
    }
    while(j < right.length){
        ans.push(right[j]);
        j++;
    }
    return ans;
}