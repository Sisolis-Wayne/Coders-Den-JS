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


            // level 3
            // 1
const personalAccount = {
    firstName: 'Akorede',
    lastName: 'Mohammed',
    incomes: {
        salary: 100000000,
        bonus: 3000000,
        roi: 6500000
    },
    expenses: {
        workers: 10000000,
        investment: 20000000,
        family: 3000000,
        charity: 2000000
    },
    totalIncome: function () {
        return `${this['incomes']['salary'] + this['incomes']['bonus'] + this['incomes']['roi']}`
    },
    totalExpense: function () {
        return `${this['expenses']['workers'] + this['expenses']['investment'] + this['expenses']['family'] + this['expenses']['charity']}`
    },
    accountInfo: function () {
        return `${this.firstName} ${this.lastName}`
    },
    addIncome: function () {
        return `${this.totalIncome()}`
    },
    addExpense: function () {
        return `${this.totalExpense()}`
    },
    accountBalance: function () {
        return `${this['incomes']['salary'] + this['incomes']['bonus'] + this['incomes']['roi'] - (this['expenses']['workers'] + this['expenses']['investment'] + this['expenses']['family'] + this['expenses']['charity'])}`
    }
}

console.log(personalAccount.totalIncome())
console.log(personalAccount.totalExpense())
console.log(personalAccount.addIncome())
console.log(personalAccount.addExpense())
console.log(personalAccount.accountInfo())
console.log(personalAccount.accountBalance())

            // 2a
const signUp = (un, em, pw) => {
    // un, em, pw refer to username, email, password respectively
    for (const select of Users) {
        if (select.username === un) return `You already have an account`
    }

    let newAccount = {}
    let charactersAllowed = '0123456789abcdefghijklmnopqrstuvwxyz'
    let generatedId = ``

    for (let j = 0; j < 6; j++) {
        generatedId += charactersAllowed.charAt(Math.floor(Math.random() * charactersAllowed.length))
    }

    newAccount._id = generatedId
    newAccount.username = un
    newAccount.email = em
    newAccount.password = Number(pw)
    newAccount.createdAt = '01/01/2023 08:45 AM'
    newAccount.isLoggedIn = 'false'

    Users.push(newAccount)

    return Users
}

const Users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
]

console.log(signUp('Akorede', 'mohammedakoredest@gmail.com', 123456))
console.log(Users[5].username)
console.log(signUp('Akorede', 'mohammedakoredest@gmail.com', 123456))

            // 2b
const signIn = (un, pw) => {
    for (const select of Users) {
        if (select.username === un && select.password === pw) {
            select.isLoggedIn = true
            return select
        }
    }
}

console.log(Users[4].username.toLowerCase())
console.log(Users[4].isLoggedIn)
Users[4].isLoggedIn = true
console.log(Users[4].isLoggedIn) 

console.log(Users[5].isLoggedIn)
console.log(signIn('Akorede', 123456))
console.log(Users[5].isLoggedIn)

            // 3a
const rateProduct = (id, nameOfProduct, Rate) => {
    let rateInfo = {}

    for (select of products) {
        if (select.name.toLowerCase() === nameOfProduct.toLowerCase()) {
            rateInfo.userId = id
            rateInfo.rate = Rate
            select.ratings.push(rateInfo)
            break
        }
    }

    return products
}

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]


console.log(rateProduct('akmo13', 'TV', 4))
console.log(rateProduct('siwa15', 'TV', 5))
console.log(rateProduct('siwa15', 'Laptop', 5))
console.log(rateProduct('siuu15', 'laptoP', 5))

// console.log(products[2])
// console.log(products[2].ratings[0])
// console.log(products[2].ratings[0].rate)
// console.log(products[2].ratings[1].rate)
// console.log(products[2].ratings[2].rate)

            // 3b
const averageRating = (nameOfProduct) => {
    let result = 0

    for (select of products) {
        if (select.name.toLowerCase() === nameOfProduct.toLowerCase()) {
            for (j = 0; j < select.ratings.length; j++) {
                result += select.ratings[j].rate
            }
            return `${result / select.ratings.length}`
        }
    }
}

console.log(averageRating('lapTOp'))
console.log(averageRating('tv'))

            // 4
// to be done later







































































