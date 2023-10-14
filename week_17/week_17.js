// easy peasy tasks.....to be done later
// level 1
// 1
class studentObj {
    constructor(firstName, lastName, age, country, enrolledkeys) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.enrolledkeys = enrolledkeys;
        this.skills = [];
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

const student1 = new studentObj('Akorede', 'Mohammed', '2X', 'Nigeria', 'AKMO1315')
console.log(student1)

student1.setSkill = 'HTML';
student1.setSkill = 'CSS';
student1.setSkill = 'JavaScript';

localStorage.setItem('student1', JSON.stringify(student1));
localStorage.removeItem('student1');
console.log(localStorage);
localStorage.removeItem('debug');

// localStorage.clear(); // It is actually a function. I don't know what's wrong with quokka
console.log(localStorage)

localStorage.setItem('student1', JSON.stringify(student1));
console.log(localStorage);