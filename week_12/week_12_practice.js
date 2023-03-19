// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result)
// const me = 'now'


// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt.match(pattern)
// console.log(matches)  // ["12", "2020"], this is not what we want
// console.log(matches[0])  // ["12", "2020"], this is not what we want

// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ["an", "an", "an", "a ", "ar"]



// const pattern = /[a].*/g  //. any character, + any character zero or more times
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']


// const txt = 'I am not sure if there is a convention how to write the word e-mail. \
// Some people write it email others may write it as Email or E-mail.'
// const pattern = /[Ee]-?mail/g  // ? means optional
// matches = txt.match(pattern)

// \\   ||  special characters...


// console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]


// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']


// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d+/g  // a number and more
// const pattern1 = /\d{4}/g  // a number and exactly four digits
// const matches = txt.match(pattern)
// const matches1 = txt.match(pattern1)
// console.log(matches)  // ['2019']
// console.log(matches1)  // ['2019']

// let pattern = /[A-Z][a-z]{3,12}/m;
// let name = 'Asabeneh';
// let result = pattern.test(name)

// console.log(result) // true

// const txt = 'This regular expression example was made in December'
// const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
// const matches = pattern.test(txt)
// console.log(matches)  // ["6", "2019"]


const text = 'first_name'
const pattern1 = /[^A-Za-z-_\d,. ]+/g
const res = pattern1.test(text)
console.log(res)

const str = 'I JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)

