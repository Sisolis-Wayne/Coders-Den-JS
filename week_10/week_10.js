        // level 1
        // 1
const newSet = new Set()
console.log(newSet)

        // 2
for (let i = 0; i <= 10; i++) {
    // console.log(i)
    newSet.add(i)
}

console.log(newSet)

        // 3
newSet.delete(4)
console.log(newSet)

        // 4
newSet.clear()
console.log(newSet)

        // 5
const newCountries = ['Afghanistan', 'Djibouti', 'Maldives', 'Cuba', 'United Kingdom']
const newSet2 = new Set()

for (const country of newCountries) {
    newSet2.add(country)
}

console.log(newSet2)

        // 6
const countries = ['Finland', 'Sweden', 'Norway']
const newMap = new Map()
// newMap.set('Afghanistan', 'Afghanistan'.length)

for (const country of countries) {
        newMap.set(country, country.length)
}

console.log(newMap)

        // level 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

        // 1
let c = [...a, ...b]
const C = new Set(c) // union of a and b
console.log(C)

        // 2
const A = new Set(a)
const B = new Set(b)
let d = a.filter((item) => B.has(item))
const D = new Set(d) // intersection of a and b
// console.log(d)
console.log(D)

        // 3
let e = a.filter((item) => !B.has(item)) // difference between a and b i.e a - b
const E = new Set(e)
console.log(E)

        // level 3
import { Countries } from "../week_9/countries_data.js"
console.log(Countries)

        // 1
// let nameOfCountries = []
// for (const country of Countries) {
//         nameOfCountries.push(country.languages)
// }  another method as below with 'map'

const languages = Countries.map((item) => item.languages).reduce((acc, curr) => acc.concat(curr), [])
console.log(languages)

const newSet3 = new Set(languages)
console.log(newSet3)

        // 2
// let mostSpokenLanguages = []

// for (const lang of newSet3) {
//         const filteredLang = languages.filter((item) => item === lang)
//         // console.log(filteredLang)
//         mostSpokenLanguages.push({[lang]: filteredLang.length})
// }

// console.log(mostSpokenLanguages)

const mostSpokenLanguages = (arr, index) => {
        const languages = arr.map((item) => item.languages).reduce((acc, curr) => acc.concat(curr), [])
        // console.log(languages)
        const newSet3 = new Set(languages)
        let langArr = []

        for (const lang of newSet3) {
                const filteredLang = languages.filter((item) => item === lang)
                // console.log(filteredLang)
                langArr.push({ [lang]: filteredLang.length })
        }

        return langArr

       
}

// console.log(mostSpokenLanguages(Countries, 5).Pashto)



console.log(mostSpokenLanguages(Countries, 5))













































































