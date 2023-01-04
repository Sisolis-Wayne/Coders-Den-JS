// Higher order function returning another function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

// const numbers = [1, 2, 3, 4, 5]

const sumArray = arr => {
  let sum = 0
  arr.forEach((element, index, arr) => sum += element)
  return sum

}
// console.log(sumArray(numbers))



function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 5000) // it prints hello in every second, 1000ms is 1s



/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
let sum = 0
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => {
    sum += num
    return sum
})

const usingForEach = numbers.forEach((num) => console.log(num))

console.log(sum)
console.log(numbersSquare)
// console.log(usingForEach)


// const names = ['Mathias', 'Elias', 'Brook', 'Akoreyde']
// const result = names.find((name) => name.length > 7)
// console.log(result)

const names = ['Asabeneh', 'Mathias', 'Elias', 90]
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) => b === true)

console.log(areSomeTrue) //true

const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false


const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]

users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users)




























































