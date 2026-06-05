let score=undefined

//console.log(typeof(score));

let valueInNumber=Number(score)
//console.log(typeof valueInNumber)

//console.log(valueInNumber)


//"33" --  33
//"33abc" -- Nan (not in number)
//true -- 1
// undefined -- Nan





//boolean conversion
//1 -- true     0 -- false
// "" -- false
// "daksh" -- true



let str1 = "Hello"
let str2 = " Daksh"
let str3 = str1 + str2
console.log(str3)


// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2+2)            // it also converts into string and give 122
// console.log(1 + 2 + "2")          // it gave 32



console.log(+true)       // it gave 1 as + tycasted boolean into number
console.log(+"")        //similarly 0 for false