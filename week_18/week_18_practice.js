//Callback
// const doSomething = callback => {
//     return setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       return callback('It did not go well', skills)
//     }, 2000)
//   }
  
//   const callback = (err, result) => {
//     if (err) {
//       return err;
//     }
//     return result;
//   }
  
//   console.log(doSomething(callback));
console.log('me')

//Callback
// const doSomething = callback => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS'];
//     callback(false, skills);
//   }, 2000)
// }

// const callback = (err, result) => {
//   if (err) { 
//     return console.log(err);
//   }
//   return console.log(result);
// }

// doSomething(callback);
// console.log(doSomething(callback));

// const doSomething = callback => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     callback(false, skills)
//   }, 2000)
// }

// doSomething((err, result) => {
//   if (err) {
//     return console.log(err)
//   }
//   return console.log(result)
// })

//Checking Promises now
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})

console.log(promise)

// Promise
// console.log(doPromise) 

const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const skills = ['HTML', 'JS', 'CSS']
    const skills = ['HTML']
    if (skills.length > 2) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

// console.log(doPromise)



doPromise.then(result => {
    console.log(result)
  }).catch(error => console.log(error))

console.log(doPromise)
// console.error('hit me')