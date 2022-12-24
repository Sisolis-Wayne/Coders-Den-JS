let arr = ['frur']
console.log(arr)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

const arrr = Array()
// or
let arry = new Array()
console.log(arrr)
console.log(arry)


const arra = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arra[3].country)
console.log(arra[3].city)
console.log(arra[4].skills[1])

const eightEmptyValues = Array(8)
const sevenEmptyValuess = Array(7)
console.log(eightEmptyValues)
console.log(sevenEmptyValuess) 


// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')
index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array')

let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
if (indexOfAvocado === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}

const numberss = [1, 5, 2, 3, 4, 5, 1, 5]

console.log(numberss.indexOf(5)) // -> 4
console.log(numberss.indexOf(0)) //
console.log(numberss.lastIndexOf(5))

const name = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(name.toString())

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] // List of web technologies

console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))

const numberrs = [1, 2, 3, 4, 5]
console.log(numberrs.slice(1, 4))
console.log(numberrs.includes(2))

console.log(numberrs.splice(1, 3))
console.log(numberrs)
console.log(numberrs.includes(2))

let s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
let punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
console.log(punctuationless)
let finalString = s.replace(/\s{2,}/g, " ");
console.log(finalString)