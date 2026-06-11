const nums = [1,2,4,5,67,7]

// const newnums = nums.map((item) => item = item+10)                   // its implicit return so without keyword also itwill return automatically
// console.log(newnums)                                                  

// const newnums = nums.map((item) =>{
//     return item = item+10})                                         // if scope opens using {} then we have to use return keyword
// console.log(newnums)



////------------chaining-----------

const newnums = nums
                .map((item)=>item=item*10)
                .map((item) => item=item+20)
                .filter((item)=> item>40)
console.log(newnums)