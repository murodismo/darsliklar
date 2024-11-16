
////////////// 1-masala

// function myFunc(s) {
//     let start = 0, maxLength = 0

//     function expandAroundCenter(left, right) {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--
//             right++
//         }
//         return right - left - 1
//     }

//     for (let i = 0; i < s.length; i++) {
//         let len1 = expandAroundCenter(i, i)
//         let len2 = expandAroundCenter(i, i + 1)
//         let len = Math.max(len1, len2)

//         if (len > maxLength) {
//             maxLength = len;
//             start = i - Math.floor((len - 1) / 2)
//         }
//     }

//     return s.substring(start, start + maxLength)
// }

// console.log(myFunc("babad"))

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

// function myFunc(str) {
//     let res = ''
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== ' ') { 
//             res += (parseInt(str[i]) + 1)
//         } else {
//             res += str[i]
//         }
//     }
//     return res
// }

// console.log(myFunc("Hello1234"))


////////////// 8-masala

// function myFunc(arr) { 
//     let big = 0   
//     let a = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[i + 1]) {
//             a += 1
//         }else if(big < a){
//             big = a
//             a = 0
//         }
//     }
//     return big + 1
// }
// console.log(myFunc([12,22, 30, 5,6,7,8,9, 9]));


///////// 9-masala

// function myFunc(arr) {
//     let res = {}
//     for (let num of arr) {
//         res[num] = (res[num] || 0) + 1
//     }
//     return res
// }

// console.log(myFunc([1, 2, 2, 3, 4, 4, 4, 5]))


//////////// 10-masala

// function myFunc(arr) {
//     let sum = []
//     let res = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum.push(...arr[i])        
//     }

//     for (let i = 0; i < sum.length; i++) {
//         res += sum[i]        
//     }

//     return res
// }

// console.log(myFunc([[23,43,23], [32,11,4], [13,22,4]]));
