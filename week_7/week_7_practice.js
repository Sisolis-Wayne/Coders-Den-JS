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





const newRGB = () => {
    let newarr = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10))
    let rgbColors = `rgb(${newarr[0]}, ${newarr[1]}, ${newarr[2]})`
    // console.log(newarr)
    return rgbColors
}

console.log(newRGB())
                                                
const arrayOfNewRGB = () => {
    let arr = []

    for (let i = 0; i < 3; i++) {
        let rgbColors = ``
        let newarr = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10))
        rgbColors = `rgb(${newarr[0]}, ${newarr[1]}, ${newarr[2]})`
        // console.log(newarr)
        arr.push(rgbColors)
    }

    return arr
}

console.log(arrayOfNewRGB())


console.log(`The sum of 2 and 3\nis 5`)

let a = 20
let b = 3
console.log(`The sum of ${a} and ${b} is \n${a + b}`)

console.log(parseInt('1f4', 16))


let cc = 'c'
console.log(`0${cc}`)

let g = 12
console.log(g.toString(16))
console.log(`0${g.toString(16)}`)















