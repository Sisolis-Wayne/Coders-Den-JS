const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
let age = 250;
let isMarried = true;
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`;

// level 1
// 1
console.log(skills)
const newSkills = JSON.stringify(skills)
console.log(newSkills)

// 2
console.log(age)
console.log(typeof (age))

const newAge = JSON.stringify(age)
console.log(typeof (newAge))

// 3
console.log(typeof isMarried)
const newIsMarried = JSON.stringify(isMarried)
console.log(newIsMarried)
console.log(typeof newIsMarried)

// 4
const newStudent = JSON.stringify(student)
console.log(newStudent)

// level 2
// 1
const newStudentAgain = JSON.stringify(student, ['firstName', 'lastName', 'skills'])
console.log(newStudentAgain)

// level 3
// 1
console.log(typeof txt)
const newTxt = JSON.parse(txt)
console.log(newTxt)
console.log(typeof newTxt)

// 2
// console.log(txt);
// const txtAgain = JSON.parse(txt, (key, value) => {
//     console.log(key)
//     console.log(value)
//     if (typeof key === 'string') return value
// })
// console.log(txtAgain)
let arr = [];
let arr1 = [];
for (select in newTxt) {
    arr.push(newTxt[select].skills)
    arr1.push(newTxt[select].skills.length)
}
console.log(arr1.sort((a, b) => a - b))
console.log(arr.filter((item) => item.length === arr1.sort((a, b) => a - b)[arr1.sort((a, b) => a - b).length - 1])[0])
// to be done later


// to loop through an object
// const myObject = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(myObject))

// Object.keys(myObject).forEach((key) => {
//   const value = myObject[key];
//   console.log(`${key}: ${value}`);
// });
