const user={
    name:"Daksh",
    price:323,
    welcomemsg : function(){
        console.log(` Hi ${this.name} , welcome to the website`)                  //this keyword is used in local access
    }
}

// user.welcomemsg()
// user.name="akanksha"
// user.welcomemsg()

// console.log(this)




// function useofthisinfunc(){
//     let username="daksh"
//     console.log(this.username)                // this cant be used inside func only inside obj so it is undefined
// }

// useofthisinfunc()


// const chai=function(){
//      let username="daksh"
//     console.log(this.username)                    // here also same this cant be used in function
// }

// chai()



//---------------------Arrow Function--------------

// const chai=() => {
//      let username="daksh"
//      console.log(this.username) 
// }

// chai()


// const add2 = (num1,num2) =>{
//     console.log(num1+num2)
// }

// add2(5,6)



//-- implicit return

const sub2 = (num1,num2) => (num1-num2)

// suppose object is present then
const name = (num) => ({username:"Daksh"})

console.log(sub2(23,45))
console.log(name(3))