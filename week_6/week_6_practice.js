for (let i = 100; i >= -100; i -= 10) {
    console.log(i)
}

for (let i = -100; i <= 100; i += 10) {
    console.log(i)
}

for(let i = 0; i <= 12; i++){
  console.log(`2 * ${i} = ${2 * i}`)
}

const numbers = [1, 2, 3, 4, 5]
const newArr = []
const newArr1 = []
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] ** 2)
    newArr1.push(Math.pow(numbers[i], 3))
}

console.log(newArr)
console.log(newArr1)


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech.toUpperCase())
}

for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i][2].toUpperCase())
}

for (const tech of webTechs) {
    console.log(tech[0])
    console.log(tech)
    console.log(tech[tech.length - 1])
    console.log(tech[tech.length - 1].toUpperCase())
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][countries[i].length - 1].toUpperCase())
}

let mine = 'look'
console.log(mine.length)
console.log(mine.length)

