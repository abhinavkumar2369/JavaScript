const name = 'patel'
// const repoCount = 50
// console.log(name + repoCount + "value")
// console.log(`Hello ${name}`)

const gameName = new String("patel")
console.log(name)
console.log(typeof name)
console.log(gameName)


// console.log(gameName[1])
// console.log(`${gameName}`)
// console.log(typeof gameName)

// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3))
// Will return the element at first index if provided 

console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "  abhinav     "
console.log(newStringOne)
console.log(newStringOne.trimStart())

let url = String("shaksham@gmail.com")
console.log(url)
console.log(typeof url)

console.log(url.includes("@"))

console.log(url.charAt(4))
console.log(url.at(4))
console.log(url.replace("@","--"))
// only returns
console.log(url)
