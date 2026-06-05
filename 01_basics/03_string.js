const name ="Daksh"
const repo=20

// outdated method   console.log(name+repocount)


console.log(`My name is ${name} and my repo count is ${repo}`)

//another way to define a string
const game=new String('bgmi-coc-pokem')
console.log(game)

console.log(game.__proto__)    //tells prototype of string here it is object

console.log(game.length)

console.log(game.indexOf('m'))

const newstr=game.substring(0,4)
console.log(newstr)


const exp="     Daksh   "
console.log(exp)
console.log(exp.trim())

console.log(game.replace('coc','cr'))

console.log(game.split('-'))           // split string in array