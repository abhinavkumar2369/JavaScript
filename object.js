const user = {
    name : "abhinav",
    rollno : 0000,
    location :'farhan ka ghar',
    email:'abhinavkumar@billgates.com'
    // [key1]:hawbj    for sysmbol as key

}

const mySym = Symbol("Key1")
console.log(user.location)
console.log(user.email)

console.log('key1'==mySym,mySym.toString().slice(7,-1))

