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
// let 
const newSentence = countries.reduce((acc, curr, idx) => idx === (countries.length - 1) ? `${acc}, and ${curr} are north European countries` : acc + ', ' + curr, 'Estonia')
console.log(newSentence)











































































































































































