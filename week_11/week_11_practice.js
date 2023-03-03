console.log('me')

const rectangle = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
}
let { width, height, area, perimeter = '60', milk } = rectangle
console.log(width, height, area, perimeter, milk) //30 10 200 80


skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
]

const formattedSkills = skills.slice(0, -1).join(', ')
console.log(formattedSkills)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...re] = nums

console.log(num1, num2, num3)
console.log(re)
console.log(re)
// console.log(re[0])

// how to clone an object to a new object...the method below is called Lodash. Read more on it.
const userDetails = {
    name: "John Doe",
    age: 14,
    status: {
        verified: false,
        method: Symbol(),
        title: undefined
    }
};

console.log(_.cloneDeep(userDetails));



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

const newStudent = _.cloneDeep(student)
console.log(newStudent)