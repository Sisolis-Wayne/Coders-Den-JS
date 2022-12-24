// let number = prompt('Enter number', 'number goes here')
// let number1 = prompt('Enter number1', 'number goes here')
// console.log(number * number1)

// // let me = 'mine';
// // console.log(me)

// // alert('Welcome to 30DaysOfJavaScript')

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog bo

            // 1
let firstName = 'Korede';
let lastName = 'Mohammed';
let country = ' Nigeria';
let city = 'Lagos';
let age = '250';
let isMarried = true;
let year = 2022;

console.log(typeof (firstName));
console.log(typeof (lastName));
console.log(typeof (country));
console.log(typeof (city));
console.log(typeof (age));
console.log(typeof (isMarried));
console.log(typeof (year));

            // 2
console.log(typeof ('10') === 10);

            // 3
console.log(parseInt('9.8') === 10);

            // 4
let me = 'pronoun'; //truthy
let is = 'verb';    //truthy
let cr7 = 7;        //truthy

let meat;           //falsy
let nnn1 = 0;       //falsy
let iss = false;    //falsy

            // 5
4 > 3;      //true
4 >= 3;     //true
4 < 3;      //false
4 <= 3;     //false
4 == 4;     //true
4 === 4;    //true
4 != 4;     //false
4 !== 4;    //false
4 != '4';   //false
4 == '4';   //true
4 === '4';  //false
let python = console.log('python'.length)
let jargon = console.log('jargon'.length)
console.log(python != jargon)

            // 6
4 > 3 && 10 < 12;                                       //true
4 > 3 && 10 > 12;                                       //false
4 > 3 || 10 < 12;                                       //true
4 > 3 || 10 > 12;                                       //true
!(4 > 3);                                               //false
!(4 < 3);                                               //true
!(false);                                               //true
!(4 > 3 && 10 < 12);                                    //false
!(4 > 3 && 10 > 12);                                    //true
!(4 === '4');                                           //true
'dragon'.includes('on') !== 'python'.includes('on');    //false

            // 7
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

            // level 2
//             // 1
// let base = prompt('Enter base:');
// let height = prompt('Enter height:');
// let result = 0.5 * base * height;
// console.log(`The area of the triangle is ${result}`)

            // 2
// let sideA = prompt('Enter side a:');
// let sideB = prompt('Enter side b:');
// let sideC = prompt('Enter side c:');
// let result1 = Number(sideA) + Number(sideB) + Number(sideC);
// console.log(`The perimeter of the triangle is ${result1}`);

            // 3
// let length = prompt('Enter the length:');
// let width = prompt('Enter the width:');
// let result2 = length * width;
// let result3 = 2 * (Number(length) + Number(width));
// console.log(`The area of the rectangle is ${result2}`)
// console.log(`The perimeter of the rectangle is ${result3}`);

            // 4
// let PI = 3.14
// let r = prompt('Enter the radius of the circle:');
// let result4 = PI * r * r;
// let result5 = 2 * PI * r;
// console.log(`The area of the circle is ${result4}`);
// console.log(`The circumference of the circle is ${result5}`);

            // 5
// console.log(-(+2))
// let y = prompt('Enter the coefficient of y:');
// let x = prompt('Enter the coefficient of x:');
// let c = prompt('Enter the coefficient of c:');
// let m = x / y;
// let xIntercept = (-c) / m;
// let yIntercept = +c / y;
// console.log(`Slope is ${m}`);
// console.log(`The x-intercept is ${xIntercept}`);
// console.log(`The y-intercept is ${yIntercept}`);

            // 6
// let x1 = prompt('Enter x1:');
// let y1 = prompt('Enter y1:');
// let x2 = prompt('Enter x2:');
// let y2 = prompt('Enter y2:');
// let slope_m = (y2 - y1) / (x2 - x1);
// console.log(`The Slope is ${slope_m}`);

            // 7
// console.log(m === slope_m);

            // 8
// to be done later......

            // 9
// let hours = prompt('Enter hours:');
// let ratePerHour = prompt('Enter rate per hour:');
// let weeklyEarnings = hours * ratePerHour;
// console.log(weeklyEarnings)

            // 10
let myName = 'Akorede';
console.log(myName.length);
console.log(`my name, ${myName} is neither short nor long`);

            // 11
console.log(`Your first name is, ${firstName} is longer than your family name, ${lastName}`)

            // 12
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`)

            // 13
// let yearOfUser = prompt('Enter birth year:');
// let trueYear = 2022 - yearOfUser;
// trueYear >= 18 ? console.log(`You are ${trueYear}. You are old enough to drive.`) : console.log(`You are ${trueYear}. You will be allowed to drive after ${18 - trueYear}.`);

            // 14
let numberOfYears = prompt('Enter the number of years you live:');
console.log(`You lived ${numberOfYears * 31536000} seconds`);

            // 15
const currentYear = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

            // level 3
// to be done later