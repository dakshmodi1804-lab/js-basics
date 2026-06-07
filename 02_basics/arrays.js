// declare arrays

const myArr = [1,2,3,4,5]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[2])
// console.log(myArr2[3])



// Array methods

// myArr.push(12)
// myArr.pop()


// myArr.unshift(3)                                     //inserts element at start
// myArr.shift()                           // deletes first



//console.log(myArr.includes(4))


// const newArr=myArr.join()                       // adds all element of arrays into a string
// console.log(newArr)




// Slice and Splice

// console.log("A" ,myArr)

// const myn1=myArr.slice(1,3)
// console.log(myn1)
// console.log("B",myArr)


// const myn2=myArr.splice(1,3)               // splice is diffeerrent from slice as it includes last parameter index also and also changes the orignal array by trimming them

// console.log(myn2)
// console.log("C",myArr)





const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,0]

// arr1.push(arr2)
// console.log(arr1)                              // take whole array as data

// let arr3 = arr1.concat(arr2);
// console.log(arr3);                                 // concat return new array 



// const arr3=[...arr1,...arr2]                              // spread operation same as concate
// console.log(arr3)




console.log(Array.isArray("daksh"))
console.log(Array.from("daksh"))                              // .from conveert any string or object to array


let a=1
let b=33
let c=3
console.log(Array.of(a,b,c))