const lang=["js",'java','cpp','python']

// const values = lang.forEach((item)=>{
//     console.log(item)                                           // for each loop cant return a value
// })

// console.log(values)


// more operations

const nums=[1,2,3,4,5,6,7]

//const arr=nums.filter((num) => num>3)                           //  filter operation return the value unlike foreach

 // orrrrr
const arr=nums.filter((num) =>{
    return num>3})     

 console.log(arr)