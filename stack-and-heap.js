// Stack (Primitive)  Heap (Non-Primitive)

let myYoutubeName = "1st name"

let anothername = myYoutubeName;
console.log(anothername)

anothername = '2nd name'
console.log(anothername)

console.log(myYoutubeName)

let user = {
    name:'patel bhaiya',
    upi:'aa'
}

console.log(user.name,user.upi)

user.name = 'sharma'
console.table(user)
console.table(['patel','sharma','verma'])
console.log(user)
console.log(user.name)
