// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)
console.log(id == anotherId)
console.log(id === anotherId)
// Refernce (Non Primitive)

// Array, Object, Function
const name = ['patel','sharma','verma']
console.log(name)
console.table(name)

let object = {
    name:"abhinav",
    age:'20'
}
const myFunction = function (){
    console.log("hello World")
}

console.log(myFunction)
console.log(typeof myFunction)

console.log(outsideTemp)
console.log(typeof outsideTemp)