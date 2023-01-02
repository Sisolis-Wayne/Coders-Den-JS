            // level 1
            // 1
const dog = {}

            // 2
console.log(dog)

            // 3
dog.name = 'Nozel'
dog.legs = 'short'
dog.color = 'brown'
dog.age = '2'
dog.bark = function () {
    return `woof woof`
}

console.log(dog)

            // 4
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

            // 5
dog.breed = 'Wolf'
dog.getDogInfo = function () {
    return `The name of my little wolf is ${this.name}. He has a ${this.color} color and is ${this.age} years old.`
}

console.log(dog.breed)
console.log(dog.getDogInfo())

            // level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'brook@brook.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

            // 1
// Not done!!!
const skills = Object.values(users)
console.log(skills)


for (const select of skills) {
    if (select.skills.length === 8) console.log(select)
}

            // 2
// let countFalse = 0
let loggedInUsers = 0
for (const select of skills) {
    // if (select.isLoggedIn === false) {
    //     countFalse++
    // }
    if (select.isLoggedIn === true) {
        loggedInUsers++
    }

}
// console.log(countFalse)
console.log(loggedInUsers)

let UsersWith50pointsPlus = 0
for (const select of skills) {
    if (select.points >= 50) {
        UsersWith50pointsPlus++
    }
}
console.log(UsersWith50pointsPlus)

            // 3
const mern = Object.keys(users)
console.log(mern)

let arr = []
for (const select of mern) {
    if (users[select]['skills'].includes('MongoDB' && 'Express' && 'React' && 'Node')) {
        arr.push(select)
    }
}

console.log(arr)

            // 4
users.Akorede = {
    email: 'mohammedakoredest@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 22,
    isLoggedIn: true,
    points: 90
}

console.log(users)

            // 5
const keys = Object.keys(users)
console.log(keys)

            // 6
const values = Object.values(users)
console.log(values)

            // 7
const countries = {
    name: 'Nigeria',
    capital: 'Abuja',
    population: 250000000,
    languages: 'The major languages are Yoruba, Igbo and Hausa'
}

console.log(countries['name'])
console.log(countries['capital'])
console.log(countries['population'])
console.log(countries['languages'])

















































































































