function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function multiplyBy2() {
        count *= 2;
        return count
    }
    function divideBy2() {
        count /= 2
        return count
    }

    return {
        plusOne:plusOne,
        minusOne:minusOne,
        multiplyBy2: multiplyBy2,
        divideBy2: divideBy2
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.plusOne())
console.log(innerFuncs.divideBy2())