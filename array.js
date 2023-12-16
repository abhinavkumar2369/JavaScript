// array

// const myArr = [0,1,2,3,4,5,6,7]
// console.log(myArr[2])

arr = []
arr.push(1,2,3)
// console.table([arr,arr.length])
console.log(arr)
arr[5]= 'new'
console.log(arr)
console.log(Object.keys(arr))
console.log(arr.length)
console.log(arr.unshift(9))

// returns length
console.log(arr)
console.log(arr.length)
// arr.shift()
// arr.shift()
// console.log(arr)
// console.log(arr.length)
// arr.unshift()
// console.log(arr)

// console.log("A",arr)

// const m = arr.slice(1,5)
// Do not take the last index
// console.log(m)
// console.log(arr)
// const n = arr.splice(1,4)
// console.log(arr)
// console.log(n)

console.log("-------")

myarr = [1,2,3,4,5,6,7,8,9]
const myarr1 = ["a","b","c"]

console.log(typeof myarr)
console.log(typeof myarr1)
console.log(myarr + myarr1)

const git = new Array(myarr + myarr1)
console.log(typeof git)
console.log(git)
