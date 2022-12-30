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
    return `${m}, ${a}`
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



























































