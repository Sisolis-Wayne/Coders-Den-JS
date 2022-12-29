            // level 1
            // 1
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let j = 0;
// while (j <= 10) {
//     console.log(j)
//     j++
// }

// let k = 0;
// do {
//     console.log(k)
//     k++
// } while (k <= 10)

            // 2
for (let l = 10; l >= 0; l--) {
    // console.log(l)
}

let m = 10;
while (m >= 0) {
    // console.log(m)
    m--
}

let p = 10
do {
    // console.log(p)
    p--
} while (p >= 0)

            // 3
let n = 20
for (let a = 0; a <= n; a++) {
    // console.log(a)
}

            // 4
const arr = Array(7).fill('#')
// console.log(arr)

for (let q = 1; q < arr.length; q++) {
    console.log(arr[q].repeat(q))
}

            // 5
for (let g = 0; g <= 10; g++) {
    // console.log(`${g} x ${g} = ${g * g}`)
}

            // 6
for (let w = 0; w <= 10; w++) {
    // console.log(`${w} ${w ** 2} ${w ** 3}`)
}


            // 7
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i)
// }

            // 8
for (let j = 0; j <= 100; j++) {
    if (j % 2 !== 0) {
        // console.log(j)
    }
}

            // 9
for (let counter = 0; counter <= 100; counter++) {
    let notPrime = false;

    for (let v = 2; v <= counter; v++) {
        if (counter % v === 0 && v !== counter) {
            notPrime = true;
        }
    }

    if (notPrime === false) {
        // console.log(counter);
    }
}

            // 10
let sum = 0;

for (let j = 0; j <= 100; j++) {
    // console.log(j)
    sum += j
}

// console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

            // 11
let sumEven = 0;
let sumOdd = 0;

for (let r = 0; r <= 100; r++) {
    if (r % 2 === 0) {
        // console.log(r)
        sumEven += r
    }
    if (r % 2 !== 0) {
        // console.log(r)
        sumOdd += r
    }
}

// console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)

            // 12
const arrr = [0, 0]
arrr[0] = `${sumOdd}`
arrr[1] = `${sumOdd}`
console.log(arrr)

            // 13
// console.log(Math.floor(Math.random() * 6))
const randomNumArr = Array(5).fill(Math.floor(Math.random() * 6))
console.log(randomNumArr)            

            // 14
const array = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6));
console.log(array);

            // 15
// function randomId() {
//     let theRandomId = ''
//     let charactersAllowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     for (let z = 0; z < 6; z++) {
//         theRandomId += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length));
//     }
//     return theRandomId
// }

// console.log(randomId())
// console.log(randomId())

            // level 2
            // 1
const randomId = () => {
    let theRandomId = ''
    let charactersAllowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let lengthOfRandom = Math.floor(Math.random() * 30) + 1
    for (let z = 0; z < lengthOfRandom; z++) {
        theRandomId += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length));
    }
    return theRandomId;
}

console.log(randomId())
console.log(randomId())

            // 2
// function randomHexNum()
const randomHexNum = () => {
    let theRandomHexNum = ''
    let theCharactersAllowed = 'abcdef0123456789'
    for (let y = 0; y < 6; y++) {
        theRandomHexNum += theCharactersAllowed.charAt(Math.floor(Math.random() * theCharactersAllowed.length))
    }
    return '#' + theRandomHexNum;
}

console.log(randomHexNum())
console.log(randomHexNum())
console.log(randomHexNum())

            // 3
const rgbColor = () => {
    const RR = Math.floor(Math.random() * 256)
    const GG = Math.floor(Math.random() * 256)
    const BB = Math.floor(Math.random() * 256)
    let color = `rgb(${RR}, ${GG}, ${BB})`
    return color;
} 

console.log(rgbColor())
console.log(rgbColor())


            // 4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
]
console.log(countries.length)

let newCountries = []

for (const country of countries) {
    newCountries.push(country.toUpperCase())
}

// for (let i = 0; i < countries.length; i++) {
//     newCountries.push(countries[i].toUpperCase())
// }

console.log(newCountries)

            // 5
let newCountriesLength = []
for (const country of countries) {
    newCountriesLength.push(country.length)
}

console.log(newCountriesLength)

            // 6
let miniCountry = []
for (const country of countries) {
    miniCountry.push((`${country}, ${country.substring(0, 3).toUpperCase()}, ${country.length}`).split())
}

console.log(miniCountry)
console.log(miniCountry.length)

            // 7
let miniCountryWithLand = []
let miniCountryWithoutLand = []

for (const country of countries) {
    if (country.includes('land')) {
        miniCountryWithLand.push(country)
    } else {
        miniCountryWithoutLand.push(country)
    }
}

console.log(miniCountryWithLand)
console.log(miniCountryWithoutLand)

            // 8
console.log('giaia'.endsWith('ia'))
console.log('albania'.endsWith('ia'))

let miniCountryWithia = []
let miniCountryWithoutia = []

for (const country of countries) {
    if (country.includes('ia')) {
        miniCountryWithia.push(country)
    } else {
        miniCountryWithoutia.push(country)
    }
}

console.log(miniCountryWithia)
console.log(miniCountryWithoutia)

            // 9
const longestCountryCharacter = (country) => {
    let longestLength = country[0].length
    let ans = country[0]

    for (let i = 1; i < country.length; i++) {
        const actualLongestLength = country[i].length
        if (actualLongestLength > longestLength) {
            ans = country[i]
            longestLength = country[i].length
        }
    }
    return ans

    // for (const country of countries) {
    //     const actualLongestLength = country.length
    //     if (actualLongestLength > longestLength) {
    //         ans = country
    //         longestLength = country.length
    //     }
    // }
    // return ans
}

console.log(longestCountryCharacter(countries))

            // 10
let onlyCountriesWithFiveCharacters = []

for (const country of countries) {
    if (country.length === 5) {
        onlyCountriesWithFiveCharacters.push(country)
    }
}

console.log(onlyCountriesWithFiveCharacters)

            // 11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const longestWord = (country) => {
    let theLongestWordLength = country[0].length
    let ans = country[0]

    for (let r = 0; r < country.length; r++) {
        const theActualLongestWordLength = country[r].length
        if (theActualLongestWordLength > theLongestWordLength) {
            theLongestWordLength = theActualLongestWordLength
            ans = country[r]
        }
    }
    return ans
}

console.log(longestWord(countries))
console.log(longestWord(webTechs))

            // 12
let newWebTechs = []
for (const tech of webTechs) {
    newWebTechs.push((`${tech}, ${tech.length}`).split())
}

console.log(newWebTechs)

            // 13
const mernStack = ['MongoDB', 'Express', 'React', 'Node']





console.log(['milk'].toString())









