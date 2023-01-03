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
const productPrices = products.map((item) => item.product, item.price)
console.log(productPrices)







































































































































































































