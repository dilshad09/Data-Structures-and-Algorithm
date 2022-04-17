// const obj = {
//     a:{
//         b:{
//             c:{
//                 d:"Dilshad"
//             },
//             e:"Ahmad"
//         },
//         f:{
//             g:[1,2,3],
//         }
//     },
//     h:{
//         i:{
//             k:["hi", "how","are","you"]
//         }
//     }
// }

//  console.log(flatten(obj, "", {}))
// function flatten(obj, parentKey, result){
//     for(let key in obj){
//        let newKey = (parentKey) ? parentKey + "-" + key : key;
//        if(typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !==null){
//            flatten(obj[key], newKey, result)
//        }else{
//            result[newKey] = obj[key]
//        }
//     }
//     return result;
// }


// let arr = [1,11,[2,[3,[4,[10,5,[6]]]]]]

// console.log(flatten(arr));
// function flatten(arr){
//     let res = arr.reduce((acc, elem)=>{
//         if(Array.isArray(elem)){
//             // acc = acc.concat(flatten(elem))
//             acc = [...acc, ...flatten(elem)]
//         }else{
//             // acc.push(elem)
//             acc = [...acc, elem]
//         }
//         return acc;
//     },[])
//     return res;
// }

// let arr = [1,11,[2,[3,[4,[10,5,[6]]]]]]

// console.log(flatten(arr));
// function flatten(arr){
//     let stack = [...arr];
//     let res = [];
//     let n = stack.length;
//     while(stack.length){
//         let pop = stack.pop()
//         if(Array.isArray(pop)){
//             stack.push(...pop);
//         }else{
//             res.push(pop)
//         }
//     }
//     return res.reverse();
// }








// function flatten(arr){
//     let stack = [...arr];
//     let res = []
//     while(stack.length){
//         let pop = stack.pop()
//         if(Array.isArray(pop)){
//             stack.push(...pop)
//         }else{
//             res.push(pop)
//         }
//     }
//     return res.reverse();
// }


// input = "grrrabcdepghijhdiwhohfbvadsdabcdepghij"
// output = ["abcdepghij"]
// // find string which has length 10 and its repeating itself more than one time.
// let obj = {};
// let bool = true;
// for(let i=0; i<input.length; i++){
//     let s = "";
//     for(let k=i; k<input.length; k++){
//         s += input[k]
//         if(s.length === 10){
//             if(obj[s] === undefined){
//                 obj[s] = 1;
//             }else{
//                 obj[s]++;
//             }
           
//         }
        
//     }
// }
// console.log(obj)


let obj = {
    a:{
        b:{
            c:{
                d:{
                    e:{
                        f:{
                            g:{
                                h:{
                                    i:[1,2,3]
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    b:{
        c:{
            d:{
                e:{
                    f:{
                        g:{
                            h:{
                                i:"Great"
                            }
                        }
                    }
                }
            }
        }
    },
    
}

console.log(flattenObject(obj, "", {}))

function flattenObject(obj, parentKey, result){

    for(let key in obj){
        let refreshKey = parentKey ? parentKey+ "-"+ key : key;
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key] && obj[key])){
            flattenObject(obj[key], refreshKey, result)
        }else{
            result[refreshKey] = obj[key]
        }
    }
    return result;
}