class pers {
    'code goes here' 
}
const dog = new pers()
console.log(dog)

class Person {
    constructor (
        firstName = 'Sodiq',
        middleName = 'Akorede',
        lastName = 'Mohammed' //adding default values to the class constructor
    ) {
        console.log(this)
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.country = 'Nigeria'
        this.tribe = 'Yoruba'
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person = new Person()
const person1 = new Person('Asabeneh', 'Yetayeh', 'Joseph')
const person2 = new Person('Lidiya', 23, 'Amos')
const person3 = new Person('Abraham', 'Yetayeh', 'Samson')

console.log(person.country)
console.log(person1['firstName'])
console.log(person2)
console.log(person3)



const date = new Date()
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.now)


console.log(Date.now());

const newArr = {nu: 2};
console.log(newArr)
console.log(typeof (newArr))

class parson {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 23
        this.fullName = function() {
            return `${this.firstName} ${this.lastName}`
        }
    }
    get getScore() {
        return this.score
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const parson1 = new parson('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const parson2 = new parson('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(parson1)
console.log(parson1.fullName())
console.log(parson2)
console.log(parson2.getFullName())
console.log(parson2.getScore)



class poisson {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getpoissonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''
        // let formattedSkills = skills && `He knows ${skills}`
        // console.log(formattedSkills)

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}

const poisson1 = new poisson('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const poisson2 = new poisson('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const poisson3 = new poisson('John', 'Doe', 50, 'Mars', 'Mars city')

poisson1.setScore = 1
poisson1.setSkill = 'HTML'
poisson1.setSkill = 'CSS'
poisson1.setSkill = 'JavaScript'

poisson2.setScore = 1
// poisson2.setSkill = 'Planning'
// poisson2.setSkill = 'Managing'
// poisson2.setSkill = 'Organizing'

console.log(poisson1.getScore)
console.log(poisson2.getScore)

console.log(poisson1.getSkills)
console.log(poisson2.getSkills)
console.log(poisson3.getSkills)

console.log(poisson1.getpoissonInfo())
console.log(poisson2.getpoissonInfo())
console.log(poisson3.getpoissonInfo())

class Student extends poisson {
    // saySomething() {
    //     console.log('I am a child of the poisson class')
    // }
}

const s1 = new Student('Asa', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
// console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getpoissonInfo())


const norton = ['me', 'i', 'else', 'them', 'us']
const newNorton = norton.slice(0, norton.length - 1).join(', ') + ` and the last element which is ${norton[norton.length - 1]}`
console.log(newNorton)