// for of loop

const arr=[1,2,3,4,5,6]

for (const num of arr) {
   // console.log(num)
}

const name="Akanksha"

for (const letter of name) {
    //console.log(letter)
}



// Maps
const map = new Map()                                    //store unique key value pAIR
map.set('in' , "india")
map.set('usa',"unted states")
map.set('in' , "india")                             // duplicate entry but it will not store duplicate
//console.log(map)

for (const [key,value] of map) {
    console.log(key ,'-',value)
}


// for of loop cant be used for object. for in is mainly used for object