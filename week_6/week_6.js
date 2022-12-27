            // level 1
            // 1
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let j = 0;
// while (j <= 10) {
//     console.log(j)
//     j++
// }

// let k = 0;
// do {
//     console.log(k)
//     k++
// } while (k <= 10)

            // 2
for (let l = 10; l >= 0; l--) {
    console.log(l)
}

let m = 10;
while (m >= 0) {
    console.log(m)
    m--
}

let p = 10
do {
    console.log(p)
    p--
} while (p >= 0)

            // 3
let n = 20
for (let a = 0; a <= n; a++) {
    console.log(a)
}

            // 4
const arr = Array(7).fill('#')
console.log(arr)

for (let q = 1; q < arr.length; q++) {
    console.log(arr[q].repeat(q))
}

            // 5
for (let g = 0; g <= 10; g++) {
    console.log(`${g} x ${g} = ${g * g}`)
}

            // 6
for (let w = 0; w <= 10; w++) {
    console.log(`${w} ${w ** 2} ${w ** 3}`)
}


            // 7
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i)
// }

            // 8
for (let j = 0; j <= 100; j++) {
    if (j % 2 !== 0) {
        console.log(j)
    }
}

            // 9
for (let counter = 0; counter <= 100; counter++) {
    let notPrime = false;

    for (let v = 2; v <= counter; v++) {
        if (counter % v === 0 && v !== counter) {
            notPrime = true;
        }
    }

    if (notPrime === false) {
        console.log(counter);
    }
}

            // 10
for (let j = 0; j <= 100; j++) {
    console.log(j)
}

