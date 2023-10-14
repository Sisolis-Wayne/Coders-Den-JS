console.log(localStorage)

// let personInfo = {
//     name: 'Akorede',
//     school: 'Unilag',
//     level: 400,
//     department: 'Petroleum and Gas Engineering'
// }

class personInfo {
    constructor(name, school, level, department) {
        this.name = name
        this.school = school
        this.level = level
        this.department = department
    }
}

const personInfo1 = new personInfo('Akorede', 'Unilag', 400, 'Petroleum and Gas Engineering')
console.log(personInfo1)
console.log(typeof personInfo)

const ppersonInfo = JSON.stringify(personInfo1)
console.log(ppersonInfo)

console.log(localStorage.getItem('personInfo'))

localStorage.clear


console.log(localStorage.getItem('personInfo'))

// localStorage