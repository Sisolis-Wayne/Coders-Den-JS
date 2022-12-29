// function square() {
//     let num = 2
//     let sq = num * num
//     console.log(sq)
// }

// square()
// square()



// function sumNums() {
//     console.log(arguments)
// }

// sumNums(1, 2, 3)


// // function declaration

// function sumAllNums() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

// console.log(sumAllNums(1, 2, 3, 4)) // 10
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// console.log(typeof(1, 2, 3))



// // Let us access the arguments object

// const sumAlNums = (...args) => {
//     // console.log(arguments), arguments object not found in arrow function
//     // instead we use a parameter followed by spread operator (...)
//     console.log(args)
// }

// sumAlNums(1, 2, 3, 4)
// // [1, 2, 3, 4]


// const anonymousFun = function () {
//     console.log(
//         'I am an anonymous function and my value is stored in anonymousFun'
//     )
// }

// anonymousFun()

// const Square = (n) => {
//     return n * n
// }


// console.log(Square(2))




(function (n) {
    console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
    return n * n
})(10)

console.log(squaredNum)


function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon