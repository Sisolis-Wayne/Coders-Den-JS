//level 1
// 1
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getFullInfo() {
        return `The name of my dog is ${this.name}. He has a ${this.color} color, is of ${this.age} years in age and ${this.legs} legs.`
    }
}

const dog1 = new Animal ('Terry', 4, 'blue', 2);
const dog2 = new Animal ('Terryry', 4, 'green', 2);
const dog3 = new Animal ('Terr', 4, 'blue', 2);

console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(dog3.getFullInfo());

// 2
class Dog extends Animal {
};
// class Cat extends Animal {
// };  // works as intended. Needed it somewhere down.

const dog = new Dog('Billy', 4, 'white and black', 2)
console.log(dog.getFullInfo());


// level 2
// 1
class Cat extends Animal {
    getFullInfo() {
        return `The name of my cat is ${this.name}`;
    }
};

const cat1 = new Cat('Meow')
console.log(cat1.getFullInfo());

// level 3
// 1
class statistics {
    constructor(arr) {
        this.arr = arr;
    }
    static arr() {
        // const arr = [0, 1, -1];
        const arr = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
        return arr;
    };
    static count() {
        // console.log(this.arr())
        return this.arr().length
    };
    static sum() {
        return this.arr().reduce((acc, curr) => acc + curr)
    }
    static min() {
        let ans = this.arr()[0]
        for (let j = 1; j < this.arr().length; j++) {
            if (this.arr()[j] < ans) {
                ans = this.arr()[j]
            }
        }
        return ans
    }
    static max() {
        let ans = this.arr()[0]
        for (let j = 1; j < this.arr().length; j++) {
            if (this.arr()[j] > ans) {
                ans = this.arr()[j]
            }
        }
        return ans
    }
    static describe() {
        return `${this.count()} and ${this.sum()}, ${this.max()}`
    }
    static range() {
        return this.max() - this.min()
    }
    static mean() {
        return Math.round(this.sum() / this.count())
    }
    static median() {
        if (this.arr().length % 2 !== 0) {
            return this.arr().slice().sort((a, b) => a - b).filter((item) => this.arr().slice().sort((a, b) => a - b).indexOf(item) === ((this.arr().length / 2) - 0.5))[0]
        }
    }
    static mode() {
        return Object.entries(this.arr().reduce((acc, curr) => {
            if (!acc[curr]) {
                acc[curr] = 1
            } else {
                acc[curr]++
            }
            return acc
        }, {})).reduce((acc, curr) => {
            let obj = {}
            obj.number = curr[0]
            obj.count = curr[1]
            acc.push(obj)
            return acc
        }, []).slice().sort((a, b) => {
            if (a.count > b.count) return -1
            if (a.count < b.count) return 1
            return 0
        }).slice(0, 1).reduce((acc, curr) => {
            let obj = {}
            obj.mode = curr.number
            obj.count = curr.count
            acc.push(obj)
            return acc
        }, [])[0]
    }
    static var() {
        return this.arr().map((item) => (Math.pow((item - this.mean()), 2))).reduce((acc, curr) => acc + curr, 0) / this.count()
    }
    static std() {
        return Math.sqrt(this.var())
    }
}

// statistics([0, 1, -1])
console.log(statistics.count())
console.log(statistics.describe())
console.log('Count:', statistics.count())

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range())// 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
//remains one question