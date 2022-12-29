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


let text = "ABCDEFG"
console.log(text.split(''))

const myArr = Array.from(text);
console.log(myArr)

// const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
// console.log(array);

const array = Array(10) // array size is 10
    .fill()
    .map(() => Math.floor(50 * Math.random())); // numbers from 0-50 (exclusive)

console.log(array);

function longest_str_in_array(arra) {
    let max_str = arra[0].length;
    let ans = arra[0];
    for (let i = 1; i < arra.length; i++) {
        const maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}

console.log(longest_str_in_array(["ab", "abcde", "abcd"]));
console.log(longest_str_in_array(["ab", "abcde", "abcd", "abcdefg"]));
console.log(longest_str_in_array(["ab", "abc", "abcd"]));
