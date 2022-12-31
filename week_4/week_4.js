                // level 1
                // 1
// let enterYourAge = prompt('Enter your age:');
// enterYourAge >= 18 ? console.log('You are old enough to drive') : console.log(`You are left with ${18 - enterYourAge} years to drive`);

                // 2
/**
 * let yourAge = prompt('Enter your age:');
if (25 < yourAge) {
    console.log(`You are ${yourAge - 25} years older than me`)
} else if (25 > yourAge) {
    console.log(`You are ${25 - yourAge} years younger than me`)
} else {
    console.log(`We are of the same age`)
}
 */

            // 3
let a = 4;
let b = 7;


// using if else
// if (a > b) {
//     console.log(`${a} is greater than ${b}`)
// } else (
//     console.log(`${a} is lesser than ${b}`)
// )

// using ternary operators
// a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is lesser than ${b}`)

            // 4
// let checkNum = prompt('Enter your number:');
// checkNum % 2 == 0 ? console.log(`${checkNum} is an even number`) : console.log(`${checkNum} is an odd number`);

            // level 2
            // 1
let score = 85;
switch (true) {
    case score <= 49:
        console.log('grade F');
        break;
    case score <= 59:
        console.log('grade D');
        break;
    case score <= 69:
        console.log('grade C');
        break;
    case score <= 80:
        console.log('grade B');
        break;
    case score <= 100:
        console.log('grade A');
        break;
    default:
        console.log('No score for the student.')
}

            // 2
let season = 'December';
if (season === 'September' || season === 'October' || season === 'November') {
    console.log('the season is Autumn.');
}
if (season === 'January' || season === 'February' || season === 'December') {
    console.log('the season is Winter.')
}
if (season === 'March' || season === 'April' || season === 'May') {
    console.log('the season is Spring')
}
if (season === 'June' || season === 'July' || season === 'August') {
    console.log('the season is Summer.')
}

            // 3
let dayOfTheWeek = 'FRIDay'
let DOTW = dayOfTheWeek.toLowerCase()
console.log(DOTW)
if (DOTW === 'saturday' || DOTW === 'sunday') {
    console.log(`${DOTW} is a weekend`);
}
if (DOTW === 'monday' || DOTW === 'tuesday' || DOTW === 'wednesday' || DOTW === 'thursday' || DOTW === 'friday') {
    console.log(`${DOTW} is a weekday`)
}

            // 4
let month = prompt('Enter the desired month:');
let smallMonth = month.toLowerCase();
console.log(smallMonth);
if (smallMonth === 'september' || smallMonth === 'april' || smallMonth === 'june' || smallMonth === 'november') {
    console.log(`${smallMonth} has 30 days`)
}
if (smallMonth === 'january' || smallMonth === 'march' || smallMonth === 'may' || smallMonth === 'july' || smallMonth === 'august' || smallMonth === 'october' || smallMonth === 'december') {
    console.log(`${smallMonth} has 31 days`)
}
if (smallMonth === 'february') {
    // console.log(`${smallMonth} has 28 days`)
    let leapYear = prompt('Enter YES or NO if this year is a leap year:');
    let leap = leapYear.toLowerCase();
    if (leap === 'yes') {
        console.log(`${smallMonth} has 29 days`)
    }
    if (leap === 'no') {
        console.log(`${smallMonth} has 28 days`)
    }
}


// syntax
// const arr = Array()
// or
