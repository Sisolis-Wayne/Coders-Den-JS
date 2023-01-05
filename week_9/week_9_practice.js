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


const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

const petCounts = pets.reduce(function (obj, pet) {
    if (!obj[pet]) {
        // if the pet doesn't yet exist as a property of the accumulator object,
        //   add it as a property and set its count to 1
        obj[pet] = 1;
    } else {
        // pet exists, so increment its count
        obj[pet]++;
    }

    return obj; // return the modified object to be used as accumulator in the next iteration
}, {}); // initialize the accumulator as an empty object

console.log(petCounts);
/*
{
  dog: 2, 
  chicken: 3, 
  cat: 1, 
  rabbit: 1 
}
*/

const entries = new Map([
    ['foo', 'bar']
]);

console.log(entries)

const obj = Object.fromEntries([['foo', 'bar']]);

console.log(obj);


const cou = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

console.log(cou)

const me = Object.entries(cou)
console.log(me)

let cereal = []

for (let j = 0; j < me.length; j++) {
    console.log(me[j])
    let milk = []
    milk.push(me[j])
    cereal.push(Object.fromEntries(milk))
}

console.log(cereal)



const red = me.reduce((acc, curr) => {
    let milk = []
    milk.push(curr)
    acc.push(Object.fromEntries(milk))
    return acc
}, [])

console.log(red)

























































