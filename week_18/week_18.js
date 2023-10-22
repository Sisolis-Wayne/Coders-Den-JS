const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// level 1
// 1
// using FETCH METHOD
const getCountries = fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    console.log(data)
    let arr = []
    for (const countries of data) {
        let obj = {}
        obj.name = countries.name 
        obj.capital = countries.capital
        obj.population = countries.population
        obj.languages = countries.languages
        obj.area = countries.area
        arr.push(obj)
    }
    return arr
})
.catch(error => {
    error = 'Nkan ti mo ri Olohun mi o so tan o. Many many listening; Holy water upon my head and my feet'
    console.log(error)
})
const countries = await getCountries
console.log(countries)

// level 2
// 1
// using PROMISE METHOD
const getCatNames = async () => {
    try {
        const response = await fetch(catsAPI)
        const catData = await response.json()
        console.log(catData)
        // console.log(catData[1].weight.metric)
        // console.log(catData[1].weight.metric[0])
        // console.log(catData[1].weight.metric[])
        let arr = []
        for (const cat of catData) {
            arr.push(cat.name)
        }
        return arr
    } catch (error) {
        console.log('You see the rhythm plenty gan ni')
    }
}

const catNames = await getCatNames()
console.log(catNames)

// level 3
// 1
const getCatWeight = async () => {
    try {
        const response = await fetch(catsAPI)
        const catData = await response.json()
        let arr = []
        for (const cat of catData) {
            let w1 = +cat.weight.metric[0]
            let w2 = +cat.weight.metric[cat.weight.metric.length - 1]
            avgWeight = (w1 + w2) / 2
            let obj = {}
            obj.name = cat.name
            obj.averageWeight = avgWeight
            arr.push(obj)
        }
        return arr
    } catch (error) {
        console.log('well well well')
    }
}

const catWeight = await getCatWeight()
console.log(catWeight)

// 2
const sortedCountries = countries.slice().sort((a, b) => {
    if (a.population < b.population) return 1
    else return -1
})

console.log(sortedCountries)

const tenLargestCountries = sortedCountries.slice().splice(0, 10)
console.log(tenLargestCountries)

// 3
const totalLanguages  = countries.reduce((acc, curr) => acc + curr.languages.length, 0)
console.log(totalLanguages)




