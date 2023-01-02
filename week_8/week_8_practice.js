// //scope.js
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10
// c = 11// this is a global scope variable and found in the window object
// function letsLearnScope() {
//     console.log(a, b)
//     if (true) {
//         console.log(a, b)
//     }
// }
// // console.log(a, b) // accessible
// // letsLearnScope()

// // let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// // let b = 10 // is a global scope it will be found anywhere in this file
// // function letsLearnScope() {
// //     console.log(a, b) // JavaScript 10, accessible
// //     if (true) {
// //         let a = 'Python'
// //         let b = 100
// //         console.log(a, b) // Python 100
// //     }
// //     console.log(a, b)
// // }
// // console.log(letsLearnScope())
// // console.log(a, b) // JavaScript 10, accessible



// const rectangle = {
//     length: 20,
//     width: 20
// }
// console.log(rectangle)// {length: 20, width: 20}

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     'phone number': '+3584545454545'
// }

// // accessing values using .
// console.log(person)
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location) // undefined

// // value can be accessed using square bracket and key name
// console.log(person['firstName'])
// console.log(person['lastName'])
// console.log(person['age'])
// console.log(person['age'])
// console.log(person['location']) // undefined

// // for instance to access the phone number we only use the square bracket method
// console.log(person['phone number'])

// console.log(person.getFullName())


// person.nationality = 'Ethiopian'
// person.country = 'Finland'
// person.title = 'teacher'
// person.skills.push('Meteor')
// person.skills.push('SasS')
// person.isMarried = true

// person.getPersonInfo = function () {
//     let skillsWithoutLastSkill = this.skills
//         .splice(0, this.skills.length - 1)
//         .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]
//     console.log(lastSkill)

//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
// }

// console.log(person)
// console.log(person.getPersonInfo())



// const person1 = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//         street: 'Heitamienkatu 16',
//         pobox: 2002,
//         city: 'Helsinki'
//     },
//     getPersonInfo: function () {
//         return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
// }


// const copyPerson = Object.assign({}, person1)
// console.log(copyPerson)

// const keys1 = Object.keys(copyPerson.skills)

// const keys = Object.keys(copyPerson)
// console.log(keys)

// const address = Object.keys(copyPerson.address)
// console.log(address)


// const values = Object.values(copyPerson)
// console.log(values)

// const entries = Object.entries(copyPerson)
// console.log(entries)
// console.log(entries[0][0])

// console.log(copyPerson.hasOwnProperty('name'))
// console.log(copyPerson.hasOwnProperty('score'))
// console.log(copyPerson.hasOwnProperty('firstName'))




// // const user = {

// //     name: 'John Doe',

// //     email: 'john.doe@example.com',

// //     age: 25,

// //     dob: '08/02/1989',

// //     active: true
// // };

// const courses = {
//     java: 10,

//     javascript: 55,

//     nodejs: 5,

//     php: 15
// };

// // convert object to key's array

// const ke = Object.entries(courses);

// // print all keys

// console.log(ke);

// // [ 'java', 'javascript', 'nodejs', 'php' ]

// // iterate over object


// // iterate over the user object

// for (const [k, l] of ke) {

//     console.log(`${k}: ${l}`);
// }



// const courses = {
//     java: 10,

//     javascript: 55,

//     nodejs: 5,

//     php: 15
// };

// // convert object to key's array

// const keys = Object.keys(courses);

// // print all keys

// console.log(keys);

// // [ 'java', 'javascript', 'nodejs', 'php' ]

// // iterate over object

// keys.forEach((key) => {
//     console.log(`${key}: ${courses[key]}`);
// });







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

// 1, 2 and 3 to be done later

// 4
users.Akorede = {
    email: 'mohammedakoredest@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 22,
    isLoggedIn: true,
    points: 90
}

console.log(users)


const skills = Object.values(users)
console.log(skills[0])

console.log(skills[0])
console.log(skills[0]['skills'])
console.log(skills[0].skills.length)


for (const select of skills) {
    if (select.skills.includes('React')) console.log(select)
}


// console.log(skills[0].includes('email'))



const mern = Object.keys(users)
console.log(mern)

for (const select of mern) {
    console.log(select)
}

let arr = []
for (const select of mern) {
    // console.log(`trying to understand object ${select} -> Skills: ${users[select]['skills'].includes('HTML')}`)
    // if (users[select]['skills'].includes('MongoDB' && 'Express' && 'React' && 'Node')) {
    //     arr.push(select)
    // }
    console.log(users[select])
}

console.log(arr)

let test = users['Akorede']['skills']
if (test.includes('HTML') || test.includes('food') && test.includes('CSS')) {
    console.log(true)
} else {
    console.log(false)
}
// console.log(users['Akorede']['skills'].includes('mark'))
// console.log(users['Akorede']['skills'].includes('CSS'))
// ||


































































































//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty






































