const tinderUser = {}

tinderUser.Userid = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"abhinav",
            lastname:"kumar"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.userfullname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({10:45}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2,...{10:400}}
console.log(obj3);

const abc = [obj1,obj2]
// const xyz = []
console.log(abc.keys())
console.log(abc.values())
console.log(Object.keys(obj1))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))

