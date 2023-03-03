console.log('me')

const companies = new Set()
console.log(companies)
console.log(companies.size)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
    'Finnish'
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for (const language of setOfLanguages) {
    console.log(language)
}



let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b] // spread is another way to concat two arrays

let C = new Set(c)

console.log(C)
console.log(c)

console.log(a.concat(b)) // same result using concat









