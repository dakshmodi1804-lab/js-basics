// function defination

function sayname(){
    console.log('d')
    console.log('a')
    console.log('k')
    console.log('s')
    console.log('h')

}



// execution                                   // for only reference-- sayname
//sayname()


function add2no(num1,num2){
    if(typeof num1 ==="number" && typeof num2 === "number"){
    console.log(num1+num2)
    }
    else{
        console.log("invalid")
    }
}

//add2no(4,'5')

function loginmsg(username){
    // console.log(`${username} logged in`)
    return (`${username} logged in`)
}


//loginmsg("akanksha")
const result=loginmsg("akanksha")               // if no argument is passes in place of parameter then that argument is replaced by undefined

console.log(result)


function loginmsg2(username="daksh"){                     // if no argument passed then daksh is the argument here
    // console.log(`${username} logged in`)
    return (`${username} logged in`)
}






// use of rest operator(similar to spread)
function calculatecartprice(...num){                               // is converts the arguments in array if multiple arguments arise and then array operations can be applied
    return num;
}

console.log(calculatecartprice(2233,234,543,54))



