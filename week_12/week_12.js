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

// 3
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

// level 2
// 1
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
// const arrPgh = paragraph.replace(/[.]/g, '').split(' ')
// console.log(arrPgh)

const tenMostFrequentWords = (para, index) => {
    const arr = para.replace(/[%@&;$#!?.]/g, '').split(' ')

    return Object.entries(arr.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr]++;
        }
        return acc;
    }, {})).reduce((acc, curr) => {
        let obj = {};
        obj.word = curr[0]
        obj.count = curr[1]
        acc.push(obj)
        return acc;
    }, []).slice().sort((a, b) => {
        if (a.count > b.count) return -1
        if (a.count < b.count) return 1
        return 0
    }).slice(0, index)
}


console.log(tenMostFrequentWords(paragraph, 10))

// 3
const sentence1 = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

// const cleanedSentence = sentence1.replace(/[%@&;$#!?]/g, '').split(' ')
// console.log(cleanedSentence)

// // console.log(cleanText(sentence))
console.log(tenMostFrequentWords(sentence1))