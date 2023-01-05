            // level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

            // 3
countries.forEach((country) => console.log(country))

            // 4
names.forEach((country) => console.log(country))

            // 5
numbers.forEach((country) => console.log(country))

            // 6
const countriesUppercase = countries.map((country) => country.toUpperCase())
console.log(countriesUppercase)

            // 7
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)

            // 8
const numSquared = numbers.map((num) => num ** 2)
console.log(numSquared)

            // 9
const namesUpperCase = names.map((n) => n.toUpperCase())
console.log(namesUpperCase)

            // 10
const productPrices = products.map((item) => `${item.product} -> ${item.price}`)
console.log(productPrices)

            // 11
const countriesContainingLand = countries.filter((item) => item.toLowerCase().includes('land'))
console.log(countriesContainingLand)

            // 12
const countriesHavingSixCharacters = countries.filter((item) => item.length === 6)
console.log(countriesHavingSixCharacters)

            // 13
const countriesHavingSixCharactersOrMore = countries.filter((item) => item.length >= 6)
console.log(countriesHavingSixCharactersOrMore)

            // 14
const countriesThatStartWithE = countries.filter((item) => item.startsWith('E'))
console.log(countriesThatStartWithE)

            // 15
const pricesThatHaveValues = products.filter((item) => typeof(item.price) === 'number')
console.log(pricesThatHaveValues)

            // 16
console.log(typeof(products[0]))
const getStringLists = (arr) => arr.filter((item) => typeof(item) === 'string')

let newArray = names.concat(numbers)
console.log(newArray)

console.log(getStringLists(newArray))

            // 17
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum)

            // 18
const newSentence = countries.reduce((acc, curr, idx) => idx === (countries.length - 1) ? `${acc}, and ${curr} are north European countries` : acc + ', ' + curr, 'Estonia')
console.log(newSentence)

            // 19


            // 20
console.log(names)
const someAreSeven = names.some((item) => item.length === 7)
console.log(someAreSeven)

            // 21
const allContainsLand = countries.every((item) => item.includes('land'))
console.log(allContainsLand)

            // 22

            // 23
console.log(countries)
const firstCountryContainingSixLettersOnly = countries.find((item) => item.length === 6)
console.log(firstCountryContainingSixLettersOnly)

            // 24
const indexOfFirstCountryContainingSixLettersOnly = countries.findIndex((item) => item.length === 6)
console.log(indexOfFirstCountryContainingSixLettersOnly)

            // 25
const indexOfNorway = countries.findIndex((item) => item === 'Norway')
console.log(indexOfNorway)

            // 26
const indexOfRussia = countries.findIndex((item) => item === 'Russia')
console.log(indexOfRussia)

            // level 2
            // 1
console.log(products)
const totalPriceOfProducts = products.map((item) => item.price).filter((item) => typeof (item) === 'number').reduce((acc, curr) => acc + curr, 0)
console.log(totalPriceOfProducts)
// console.log(products)

            // 2
const extractedPrices = products.reduce((acc, curr) => {
    if (typeof (curr.price) === 'number') acc.push(curr.price)
    return acc
}, []).reduce((acc, curr) => acc + curr)

console.log(extractedPrices)

            // 3
import { Countries } from "./countries_data.js"
console.log(Countries)

const categorizeCountries = (arr, pattern) => {
    let newArr = []

    for (const select of arr) {
        if (select.name.includes(pattern)) newArr.push(select.name)
    }

    return newArr
}

console.log(categorizeCountries(Countries, 'ia'))

            // 4
const startsWithLetter = Countries.reduce((acc, curr) => {
        console.log(curr.name)
        acc.push(curr.name)
}, [])

console.log(Countries[0].name)
console.log(Countries[0].name[0])
console.log(startsWithLetter)





































































































































































































































































































