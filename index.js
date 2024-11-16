////////////// 1-masala

///////// 2-masala

// function myFunc(arr,num) {
//     let first = []
//     let secound = []

//     for (let i = 0; i < arr.length; i++) {
//         if (i > num -1) {
//             secound.push(arr[i])
//         }else{
//             first.push(arr[i])
//         }
//     }

//     return [...secound, ...first]
// }
// console.log(myFunc([1,2,3,4,5,6,7,8], 3));


/////////// 3-masala

// function myFunc(arr, num) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] != arr[i] && arr[j] + arr[i] == num) {
//                 res.push([i,j].sort((a,b) => a-b))
//             }        
//         }
//     }
//     let dubRes = new Set(...res)
//     return [...dubRes]
// }
// console.log(myFunc([0,1,2,3,4,5,6,7,8,9],15));


//////////// 4-masala

// function myFunc(arr,num) {
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]        
//     }

//     if (sum == num) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(myFunc([2,4,2], 7));


///////////// 5-masala

// function myFunc(arr1,arr2) {
//     let res = []
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] != arr2[i]) {
//                 if (arr1[i] != undefined && arr2[i] != undefined) {
//                     res.push(arr1[i])
//                     res.push(arr2[i])
//                 }else if (arr1[i] != undefined && arr2[i] == undefined) {
//                     res.push(arr1[i])
//                 }else{
//                     res.push(arr2[i])
//                 }
//             }      
//         }
//     return res
// }

// console.log(myFunc([1,2,3,4, 5], [1,3,3,4]));


//////////// 6-masala

// function myFunc(arr) {
//     let a = 0
//     let index = 0
//     for (let i = 0; i < arr.length; i++) {
//         let b = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 b += 1
//             }            
//         }
//         if (b >= a) {
//             a = b
//             index = i
//         }
//     }
//     return arr[index]
// }

// console.log(myFunc([1,2,3,2,3,3,3,3,1,1,5]));


/////////// 7-masala

