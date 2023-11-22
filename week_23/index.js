const section = document.createElement('section');
const numGen = document.createElement('h1');
const title = document.createElement('h2');
const author = document.createElement('h3');
const actionDiv = document.createElement('div');
const aD0 = document.createElement('div');
const aD1 = document.createElement('div');
const aD2 = document.createElement('div');
const err = document.createElement('p');
const input = document.createElement('input');
const button = document.createElement('button');
const numDiv = document.createElement('div');


document.body.append(section);
section.append(numGen);
section.append(title);
section.append(author);
// section.append(err);
section.append(actionDiv);
section.append(numDiv);
actionDiv.append(aD0);
aD0.append(aD1);
aD0.append(aD2);
aD1.append(err);
aD2.append(input);
aD2.append(button);

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.fontFamily = '"Poppins", sans-serif';

section.style.display = 'flex';
section.style.flexDirection = 'column';
section.style.alignItems = 'center';

numGen.innerHTML = 'Number Generator';
numGen.style.padding = '0';
numGen.style.margin = '0';
numGen.style.color = 'green';

title.innerHTML = '30DaysOfJavaScript: DOM Day 3';
title.style.padding = '0';
title.style.margin = '0';
title.style.fontWeight = '100';

author.innerHTML = 'Author: Akorede Mohammed';
author.style.padding = '0';
author.style.margin = '0';
author.style.marginBottom = '8px';

actionDiv.style.display = 'flex';
actionDiv.style.alignItems = 'center';
actionDiv.style.width = '760px';
actionDiv.style.justifyContent = 'flex-end';

err.style.display = 'none';

input.style.border = '1px solid green';
input.style.width = '430px';
input.style.height = '30px';
input.style.paddingLeft = '10px';
input.style.marginRight = '10px';
input.style.outline = 'none';
input.type = 'text';
input.placeholder = 'Enter the length of numbers to be generated';
// console.log(input);


button.innerHTML = 'Generate Numbers';
button.style.backgroundColor = 'green';
button.style.color = '#fff';
button.style.border = '1px solid green';
button.style.borderRadius = '50px';
button.style.borderRadius = '50px';
button.style.paddingBlock = '9px';

// numDiv.style.width = '200px';
// numDiv.innerHTML = 'this is a new div for the numbers';
numDiv.style.marginTop = '20px';
numDiv.style.display = 'flex';
numDiv.style.flexWrap = 'wrap';
numDiv.style.alignItems = 'center';
numDiv.style.justifyContent = 'space- between';
numDiv.style.width = '765px';

button.addEventListener('click', function () {

    if (Number(input.value)) {

        err.style.display = 'none';

        numDiv.innerHTML = '';
        let lengthOfNum = Number(input.value);

        for (let i = 0; i < lengthOfNum; i++ ) {
            const miniDiv = document.createElement('div');
            miniDiv.innerHTML = `${i}`;
            // miniDiv.classList.add('mini-div');
            
            if (i % 2 === 0) {
                miniDiv.style.backgroundColor = '#21bf73';
            }
            
            if (i % 2 !== 0) {
                miniDiv.style.backgroundColor = '#fddb3a';
            }
            
            if (isPrime(i)) {
                // console.log('yes');
                miniDiv.style.backgroundColor = '#fd5e53';
            }

            miniDiv.style.margin = '0 5px 5px 0';
            // miniDiv.style.padding = '4px';
            // miniDiv.style.backgroundColor = 'red';
            miniDiv.style.textAlign = 'center';
            miniDiv.style.width = '60px';
            miniDiv.style.height = '40px';
            miniDiv.style.fontSize = '20px';
            miniDiv.style.color = '#fff';
            miniDiv.style.paddingInline = '10px';
            miniDiv.style.display = 'flex';
            miniDiv.style.justifyContent = 'center';
            miniDiv.style.alignItems = 'center';

            numDiv.append(miniDiv);
        }

        input.value = ''
    } else {
        if (input.value.length <= 0) {
            err.innerHTML = 'Enter a number value on the input field to generate numbers';
        } else {
            err.innerHTML = 'Input value must be a number';
        }
        err.style.fontSize = '10px';
        err.style.color = 'red';
        err.style.padding = '0';
        err.style.margin = '0';
        err.style.display = 'block';
        numDiv.innerHTML = '';
    }
})



// const miniDiv = document.querySelectorAll('.mini-div');
// // console.log(miniDiv);

// miniDiv.forEach((each) => {
//     each.style.margin = '0 5px 5px 0';
//     // each.style.padding = '4px';
//     // each.style.backgroundColor = 'red';
//     each.style.textAlign = 'center';
//     each.style.width = '60px';
//     each.style.height = '40px';
//     each.style.fontSize = '20px';
//     each.style.paddingInline = '10px';
//     each.style.display = 'flex';
//     each.style.justifyContent = 'center';
//     each.style.alignItems = 'center';
//     // each.style.widt
// })

button.addEventListener('mouseover', function () {
    // console.log('mouse');
    button.style.backgroundColor = '#5bbc7f';
})

button.addEventListener('mouseout', function () {
    button.style.backgroundColor = 'green';
})


function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= Math.floor(s); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

// console.log(input.value);

// err.style.display = 'none';


// console.log(typeof 12)
// console.log(Number('0'))
// console.log(+'ten')
// console.log(parseInt('ten'))