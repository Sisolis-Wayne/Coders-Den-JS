const url = 'https://restcountries.com/v2/all' // countries api

fetch(url)
  .then(response =>  
    // console.log(response);
    // response.formData()
    response.json()
  ) /**
    * accessing the API data as JSON. It should be noted that
    * when I used curly braces as in a function expression, it kept
    * throwing an error. I don't know why but I hope to find out soon
    */
  .then(data => {
    // getting the data
    let testingData = []
    for (data of data) {
        testingData.push(data.name)
    }
    console.log(testingData)
    // console.log(data)
    })
  .catch(error => {
    error = "I don't know what's happening undereneath"
    console.error(error)
  }) // handling error if something wrong happens

const square = async function (n) {
    return n * n
}

console.log(square(2))

const finalResult = await square(2)
console.log(finalResult)


// 
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        return countries
    } catch (err) {
        console.error(err)
    }
}

const ans = await fetchData()
console.log(ans)


