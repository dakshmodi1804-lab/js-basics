// object literals

const user={
    name:"Daksh",
    age:21,
    location:"jaipur",
    lastlogin:["monday","Friday"]
}

// to access
// console.log(user.lastlogin)
// console.log(user["name"])               //key as string because systeam treats key as string only

//Object.freeze(user)                    //no changes in object can be made after this

// user.name="akanksha"
// user.email="akanksha@gmail.com"

// user.greeting=function(){
//     console.log("hello user")
// }
// user.greeting2=function(){
//     console.log(`hello ${this.name}`)
// }

// console.log(user.greeting2())                         // if only greeting is used instead of greeting() then only get refernce call back



const tinderuser=new Object()

tinderuser.id="123ih"
tinderuser.name="Bhavya"
tinderuser.loggedin="false"
//console.log(tinderuser)




const reguser ={
    email:"daksh@gmail.com",
    fullname:{
        username:{
            firstname:"Daksh",
            lastname:"Modi"
        }
    }
}
//console.log(reguser.fullname.username.firstname)






//combining objects

const obj1={1:"a",2:'b'}
const obj2={3:"a",4:'b'}

//const obj3=Object.assign(obj1,obj2)                         // good practice for perfect result  const obj3=Object.assign({},obj1,obj2) 
//-------------------or spread operator---------
const obj3={...obj1,...obj2}
//console.log(obj3)







// important concept for future

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))






// destructuree    (important)

const {name} = tinderuser
//or if think that name is big and we have to short the varieble name
const{name:n}=tinderuser
//console.log(name)
console.log(n)

