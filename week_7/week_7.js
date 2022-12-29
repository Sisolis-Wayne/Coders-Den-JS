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
console.log(bmi(200, 2))

            // 14


































































































































































