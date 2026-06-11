const nums = [1,2,3,4]

// const total = nums.reduce(function(acc,currval) {
//     console.log(`acc : ${acc}  , currval : ${currval}`)
//     return acc + currval
// },0)                                                 // here 0 is initial value of accumulator



// another smart way 
const total = nums.reduce((acc,currval) => acc+currval , 0)
console.log(total)