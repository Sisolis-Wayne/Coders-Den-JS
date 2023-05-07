            // level 1
            // 1
const fulName = () => 'Mohammed, Sodiq Akorede'
console.log(fulName())

            // 2
const fullName = (firstName, lastName) => `${lastName}, ${firstName}`
console.log(fullName('Sodiq Akorede', 'Mohammed'))

            // 3
const addNumbers = (num1, num2) => num1 + num2
console.log(addNumbers(2, 3))
console.log(addNumbers(4, 3))

            // 4
const areaOfRectangle = (length, width) => `Area of rectangle = ${length * width} sq. unit`
console.log(areaOfRectangle(2, 3))

            // 5
const perimeterOfRectangle = (length, width) => `Perimeter of rectangle = ${2 * (length + width)} unit`
console.log(perimeterOfRectangle(2, 3))

            // 6
const volumeOfRectPrism = (length, width, height) => `Volume of rectangular prism = ${length * width * height} cube unit`
console.log(volumeOfRectPrism(2, 3, 4))

            // 7
const areaOfCircle = (r) => `Area of circle = ${Math.PI * r} sq. unit`
console.log(areaOfCircle(2))

            // 8
const circumOfCircle = (r) => `Circumference of circle = ${2 * Math.PI * r} unit`
console.log(circumOfCircle(2))

            // 9
const density = (mass, volume) => `Density of the substance = ${mass / volume}`
console.log(density(20, 10))

            // 10
const speed = (totalDistance, totalTimeTaken) => `Speed = ${totalDistance / totalTimeTaken}`
console.log(speed(20, 10))

            // 11
const weight = (mass, gravity = 9.81) => `Weight = ${mass * gravity} N`
console.log(weight(100))
console.log(weight(100, 1.62))

            // 12
const convertCelsiusToFahrenheit = (C, F) => `${(1.8 * C) + 32} degree Fahrenheit`
console.log(convertCelsiusToFahrenheit(10))

            // 13
const bmi = (weight, height) => {
    let BMI = weight / (height * height)
    if (BMI < 18.5) return 'Underweight'
    if (BMI < 24.9) return 'Normal weight'
    if (BMI < 29.9) return 'Overweight'
    if (BMI >= 30) return 'Obese'
}

console.log(bmi(20, 2))
console.log(bmi(90, 2))
console.log(bmi(100, 2))
console.log(bmi(500, 2))

            // 14
const checkSeason = (enterSeason) => {
    let season = enterSeason.toLowerCase()
    if (season === 'september' || season === 'october' || season === 'november') {
        return 'the season is Autumn.'
    }
    if (season === 'december' || season === 'february' || season === 'january') {
        return 'the season is Winter.'
    }
    if (season === 'march' || season === 'april' || season === 'may') {
        return 'the season is Spring'
    }
    if (season === 'june' || season === 'july' || season === 'august') {
        return 'the season is Summer.'
    }
}

console.log(checkSeason('december'))

            // 15
const findMax = (...args) => {
    let ans = args[0]

    for (let i = 1; i < args.length; i++) {
        if (args[i] > ans) {
            ans = args[i]
        }
    }

    return ans
}

console.log(findMax(0, 10, 11, 5, -3))
console.log(findMax(0, -10, -2))
console.log(findMax(1, 2, 3, 4))
console.log(findMax(10, 20, 13, 40, 10))
console.log(findMax(15, 20, 30, 60, 25, 10, 33, 40))

            // level 2
            // 1
// to be done later

            // 2
const solveQuadEquation = (a, b, c) => {
    const ans1 = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
    const ans2 = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
    return `${ans1}, ${ans2}`
    // console.log(ans1, ans2)
}


console.log(solveQuadEquation(1, -1, -2))
console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, 7, 12))
console.log(solveQuadEquation('1', '0', '-1'))

            // 3
const printArray = (arr) => {
    let result = ``

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (i !== (arr.length - 1)) {
            result += `${arr[i]}, `
        }
        if (i === (arr.length - 1)) {
            result += `${arr[i]}.`
        }
    }

    return result
}

let countries = [
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

console.log(printArray(countries))

            // 4
const showDateTime = () => {
    let date = new Date()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}

console.log(showDateTime())
console.log(showDateTime())

            // 5
const swapValues = (x, y) => {
    let a = x
    let m = y
    return `x =>  ${m}, y => ${a}`
}

console.log(swapValues(3, 4))
console.log(swapValues(4, 5))

            // 6
const reverseArray = (arr) => {
    let reversedArray = []

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }

    return reversedArray;

}

console.log(reverseArray(countries))
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

            // 7
const capitalizeArray = (arr) => {
    let capitalizedArray = []

    for (let i = 0; i < arr.length; i++) {
        capitalizedArray.push(arr[i].toUpperCase())
    }

    return capitalizedArray;
}

console.log(capitalizeArray(countries))

            // 8
const addItem = (arr, item) => {
    arr.push(item)
    return arr
}

console.log(addItem(countries, 'me'))

            // 9
const removeItem = (arr, index) => {
    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        if (i === index) continue
        newArray.push(arr[i])
    }

    return newArray;
}

console.log(removeItem(countries, 9))

            // 10
const sumOfNumbers = (num) => {
    let sum = 0

    for (let i = 0; i <= num; i++) {
        sum += i
    }

    return sum;
}

console.log(sumOfNumbers(3))
console.log(sumOfNumbers(10))
console.log(sumOfNumbers(100))

            // 11
const sumOfOdds = (num) => {
    let sumOdd = 0

    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            sumOdd += i
        }
    }

    return sumOdd
}

console.log(sumOfOdds(5))
console.log(sumOfOdds(10))

            // 12
const sumOfEven = (num) => {
    let sumEven = 0

    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            sumEven += i
        }
    }

    return sumEven
}

console.log(sumOfEven(5))
console.log(sumOfEven(10))

            // 13
const evensAndOdds = (num) => {
    let count = [0, 0]

    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            count[0]++
        }
        if (i % 2 !== 0) {
            count[1]++
        }
    }

    return `The number of odds are ${count[1]} and The number of evens are ${count[0]}`
}

console.log(evensAndOdds(100));

            // 14
const sum = (...args) => {
    let sumNums = 0

    for (let i = 0; i < args.length; i++) {
        sumNums += args[i]
    }

    return sumNums
}

console.log(sum(1, 2, -3) )
console.log(sum(1, 2, 3, 4) )

            // 15
const randomUserIp = () => {
    const w = Math.floor(Math.random() * 256)
    const x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)

    let userIp = `${w}.${x}.${y}.${z}`
    return userIp
}

console.log(randomUserIp())

            // 16
const randomMacAddress = () => {
    let theRandomMacAddress = ''
    let theRandomMacAddress2 = ''
    let theRandomMacAddress3 = ''
    let theRandomMacAddress4 = ''
    let theRandomMacAddress5 = ''
    let theRandomMacAddress6 = ''
    let charactersAllowed = '0123456789abcdef'

    for (let i = 0; i < 2; i++) {
        theRandomMacAddress += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
    }
    
    for (let j = 0; j < 2; j++) {
        theRandomMacAddress2 += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
    }

    for (let k = 0; k < 2; k++) {
        theRandomMacAddress3 += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
    }

    for (let l = 0; l < 2; l++) {
        theRandomMacAddress4 += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
    }

    for (let m = 0; m < 2; m++) {
        theRandomMacAddress5 += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
    }
    for (let n = 0; n < 2; n++) {
        theRandomMacAddress6 += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
    }

    

    return `${theRandomMacAddress}:${theRandomMacAddress2}:${theRandomMacAddress3}:${theRandomMacAddress4}:${theRandomMacAddress5}:${theRandomMacAddress6}`
}

console.log(randomMacAddress())

            // 17
const randomHexaNumberGenerator = () => {
    let theRandomHexNum = ''
    let charactersAllowed = 'abcdef0123456789'

    for (let i = 0; i < 6; i++) {
        theRandomHexNum += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
    }

    return `#${theRandomHexNum}`;
}

console.log(randomHexaNumberGenerator())

            // 18
const userIdGenerator = () => {
    let theRandomId = ''

    let charactersAllowed = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    for (let z = 0; z < 7; z++) {
        theRandomId += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length));
    }

    return theRandomId;
}

console.log(userIdGenerator())

            // level 3
            // 1
const userIdGeneratedByUser = () => {
    let numOfId = prompt('Enter your preferred number of Id to be generated')
    let numOfCharacters = prompt('Enter your preferred number of characters to be generated')
    // let result = ``
    let theRandomId = ``
    let charactersAllowed = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`

    for (let y = 0; y < Number(numOfId); y++) {
        if (y < (numOfId - 1)) {
            let result = ``
            
            for (let z = 0; z < Number(numOfCharacters); z++) {
                result += `${charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))}`;
            }
    
            theRandomId += `${result}, `
        }

        if (y === (numOfId - 1)) {
            let result = ``

            for (let z = 0; z < Number(numOfCharacters); z++) {
                result += `${charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))}`;
            }

            theRandomId += `${result}`
        }
    }

    return theRandomId;
}

// console.log(userIdGeneratedByUser(3, 4))

            // 2
// Another method in practice file
const rgbColorGenerator  = () => {
    let color = ``

    const RR = Math.floor(Math.random() * 256)
    const GG = Math.floor(Math.random() * 256)
    const BB = Math.floor(Math.random() * 256)

    color = `rgb(${RR}, ${GG}, ${BB})`
    return color;
}

console.log(rgbColorGenerator())
console.log(rgbColorGenerator())

            // 3
const arrayOfHexaColors = (num) => {
    // let theRandomHexNum = ''
    let charactersAllowed = 'abcdef0123456789'
    let arr = []

    for (let i = 0; i < num; i++) {
        let theRandomHexNum = ''

        for (let i = 0; i < 6; i++) {
            theRandomHexNum += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
        }

        arr.push(`#${theRandomHexNum}`)
    }
    

    return arr
    // return `#${theRandomHexNum}`;
}

console.log(arrayOfHexaColors(4))

            // 4
// Another method in practice file
const arrayOfRgbColors = (num) => {
    let arr = []

    for (let i = 0; i < num; i++) {
        let color = ``
    
        const RR = Math.floor(Math.random() * 256)
        const GG = Math.floor(Math.random() * 256)
        const BB = Math.floor(Math.random() * 256)
    
        color = `rgb(${RR}, ${GG}, ${BB})`
        arr.push(color)
    }

    return arr
}

console.log(arrayOfRgbColors(4))
console.log(arrayOfRgbColors(2))

            // 6
const convertHexaToRgb = (hex) => {
    // let arr = []
    let x = parseInt(`${hex[1]}${hex[2]}`, 16)
    let y = parseInt(`${hex[3]}${hex[4]}`, 16)
    let z = parseInt(`${hex[5]}${hex[6]}`, 16)

    // arr.push(x, y, z)
    // return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
    return `rgb(${x}, ${y}, ${z})`
    // return `rgb(${arr})`
}

console.log(convertHexaToRgb('#86756C'))
console.log(convertHexaToRgb('#AB5429'))
console.log(convertHexaToRgb('#C0C0C0'))

            // 6
const convertRgbToHexa = (r, g, b) => {
    let x = r.toString(16)
    let y = g.toString(16)
    let z = b.toString(16)

    if (r <= 15) x = `0${x}`
    if (g <= 15) y = `0${y}`
    if (b <= 15) z = `0${z}`

    return `#${x}${y}${z}`
}

console.log(convertRgbToHexa(15, 15, 15))

            // 7
const generateColors = (type, number) => {
    if(type === 'hexa') {
        return arrayOfHexaColors(number)
    }
    if (type === 'rgb') {
        return arrayOfRgbColors(number)
    }
}

console.log(generateColors('hexa', 3))
console.log(generateColors('rgb', 3))

            // 8
// still needs some modification. Objective not yet achieved.
const shuffleArray = (arr) => {
    let arri = []

    for (let j = 0; j < arr.length; j++) {
        arri.push(arr[Math.floor(Math.random() * arr.length)])
    }

    return arri
}

console.log(shuffleArray([1, 2, 3, 4]))
console.log(shuffleArray([1, 6, 5, 4]))

            // 9
const factorial = (r) => {
    if (r === 0 || r === 1) {
        return 1
    }
    if (r > 1) {
        return factorial(r - 1) * r
    }
} 

console.log(factorial(0))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))

            // 10
const isEmpty = (arr) => {
    if (arr.length <= 0) {
        return `It\'s empty`
    } else {
        return `It\'s not empty`
    }
}

let arrrr = []
console.log(isEmpty(countries))
console.log(isEmpty(arrrr))

            // 11
// Done in level 2, 14

            // 12
const sumOfArrayItems = (arr) => {
    let sum = 0

    for (let j = 0; j < arr.length; j++) {
        if (typeof (arr[j]) === 'number') sum += arr[j]
        if (typeof (arr[j]) === 'string') {
            sum = 'No need to sum. Array contains string(s)'
            break
        }
    }

    return sum
}

console.log(sumOfArrayItems([1, 2, 3, 'ant', 5]))
console.log(sumOfArrayItems([1, 2, 3, 5]))

            // 13
const average = (arr) => {
    let sum = 0

    for (let j = 0; j < arr.length; j++) {
        if (typeof (arr[j]) === 'number') sum += arr[j]
        if (typeof (arr[j]) === 'string') {
            sum = 'No need to find average. Array contains string(s)'
            break
        }
    }

    if (typeof (sum) === 'number') sum = sum / arr.length
    return sum
}

console.log(average([1, 2, 3, 5]))
console.log(average([1, 2, 3, 4, 'ant']))

            // 14
const modifyArray = (arry) => {
    let arr = []
    if (arry.length >= 5) {
        for (let j = 0; j < arry.length; j++) {
            if (j !== 4) arr.push(arry[j])
    
            if (j === 4) {
                arr.push(arry[j].toUpperCase())
            }
        }
    }
    if (arry.length < 5) return `Not found`

    return arr
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']))
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']))

            // 15
const isPrime = (num) => {
    for (let j = 2, s = Math.sqrt(num); j <= s; j++) if (num % j === 0) return false
    return num > 1
}

console.log(isPrime(53))

            // 16
const allItemsAreUnique = (arr) => {
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            if (j === k) continue
            if (arr[j] === arr[k]) return `All items are not unique`
        }
    }

    return `All items are unique`
}

console.log(allItemsAreUnique([1, 2, 3, 4]))
console.log(allItemsAreUnique([1, 2, 2, 4]))
console.log(allItemsAreUnique([1, 2, 3, 4, 5]))

            // 17
const allItemsSameDataType = (arr) => {
    for (let j = 1; j < arr.length; j++) {
        if (typeof (arr[0]) !== typeof (arr[j])) {
            return `All the items are not of same data type`
        }
    }

    return `All items are of same data type`
}

console.log(allItemsSameDataType([1, 2, 3, 4]))
console.log(allItemsSameDataType([1, 2, 3, 4, 'ant']))

            // 18
// to be done later

            // 19
const sevenRandomNumbers = (arr) => {
    let arri = Array.from({ length : 7 }, () => Math.floor(Math.random() * 10))
    return arri
}

console.log(sevenRandomNumbers())
console.log(sevenRandomNumbers())
console.log(sevenRandomNumbers())

            // 20
const reverseCountries = (arr) => {
    return arr.slice().reverse()
}

console.log(reverseCountries(countries))











































































