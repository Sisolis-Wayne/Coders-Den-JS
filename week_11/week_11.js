const constants = [2.72, 3.14, 9.81, 37, 100]

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

// level 1
// 1
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

console.log(constants)

// 2
const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

// 3
const { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter)

// level 2
// 1 & 2
for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age)
    if (skills.length < 2) {
        console.log(name, scores, skills, age)
    }

}

// level 3
// 1
// import { Countries } from "../week_9/countries_data.js"
// console.log(Countries)


// for (const { name, capital, population, languages } of Countries) {
//     console.log(name, capital, population, languages)
// }  correct solution...just uncomment!


// 2
// const theStudent = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// const [name, skills, score] = theStudent
// const reactScore = score[3]
// const jsScore = score[2]
// console.log(name, skills, jsScore, reactScore)  correct solution... just uncomment!

// 3
const convertArrayToObject = (arr) => {
    let newArr = []

    for (const select of arr) {
        const [name, skills, scores] = select
        let obj = {}
        obj.name = name
        obj.skills = skills
        obj.scores = scores
        newArr.push(obj)
    }

    return newArr
}


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))

// 4
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

// const newStudent = _.cloneDeep(student)
// console.log(newStudent)
// Don't know why but this method is showing referenceError in Chrome console.Works in Quokka console though. I instead use the method below 

const newStudent = JSON.parse(JSON.stringify(student))
console.log(newStudent)


const {skills} = newStudent
const addedSkill1 = skills.frontEnd.push({skill: 'Bootstrap', level: 8})
const addedSkill2 = skills.backEnd.push({ skill: 'Express', level: 9 })
const addedSkill3 = skills.dataBase.push({ skill: 'SQL', level: 8 })
const addedSkill4 = skills.dataScience.push('SQL')
console.log(skills)
console.log(newStudent)

