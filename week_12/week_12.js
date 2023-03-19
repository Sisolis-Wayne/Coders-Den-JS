// level 1
// 1
const txt = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
const result = txt.match(/\d+/g)
const sumResult = result.reduce((acc, curr) => acc + +curr, 0)
console.log(result)
console.log(sumResult)

// 2
const sentence = `The position of some particles on the horizontal x - axis -1, 2, -4, -3 and - 1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.`

const numberFromSentence = sentence.match(/-?\d+/g)
console.log(numberFromSentence)

const sortedPoints = numberFromSentence.reduce((acc, curr) => {
    acc.push(+curr)
    return acc
}, []).sort((a, b) => a - b)
console.log(sortedPoints)
const distance = sortedPoints.slice(-1) - sortedPoints[0]
console.log(distance)



const is_valid_variable = (str) => {
    const pattern = /^[\d+]/g
    const pattern1 = /[-]/g

    if (pattern.test(str) || pattern1.test(str)) return false
    else return true
}

console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('firstname'))