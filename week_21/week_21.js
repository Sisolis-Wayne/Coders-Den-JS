console.log('I will make it in all I do. Amen🙏')

// level 1
// 1
const firstTitleTag = document.querySelector('p');
console.log(firstTitleTag);

const firstTitleTag2 = document.getElementsByTagName('p')[0];
console.log(firstTitleTag2);

// 2
const para1 = document.querySelector('#first-para');
console.log(para1);

const para2 = document.querySelector('#second-para');
console.log(para2);

const para3 = document.querySelector('#third-para');
console.log(para3);

const paraId1 = document.getElementById('first-para');
const paraId2 = document.getElementById('second-para');
const paraId3 = document.getElementById('third-para');

console.log(paraId1);
console.log(paraId2);
console.log(paraId3);

// 3
const allPara = document.querySelectorAll('p');
const allPara1 = document.getElementsByTagName('p');

console.log(allPara);
console.log(allPara1);

// 4
allPara.forEach(each => console.log(each.textContent));

// 5
fourthPara = allPara[3];
fourthPara.innerHTML = 'This is the fourth paragraph';
console.log(fourthPara);

// 6
fourthPara.setAttribute('class', 'new-title');
fourthPara.setAttribute('class', 'new-title-again');
fourthPara.setAttribute('id', 'fourth-title');

/**
 * another method of setting attribute; setAttribute overwrites the class and
 * id previously present while classList.add/remove appends
 */

fourthPara.classList.add('new-title', 'another-new-title');

// level 2
// 1 & 2
arrayOfColors = ['black', 'yellow'];
// allPara[0].style.color = 'red';
// for (const [elem, i] of allPara) {
//     console.log(elem, i)
// } not working.....don't know why. I now know why

allPara.forEach((each, i) => {
    if (i % 2 === 0) {
        each.style.backgroundColor = arrayOfColors[0];
        each.style.color = 'green';
    }
    else {
        each.style.color = 'red';
        each.style.backgroundColor = arrayOfColors[1];
    }
})

// 3
// a similar work on id and class have been done in level 1, no. 6
fourthPara.innerHTML = `${fourthPara.textContent}. This is another night to try my best`;
console.log(fourthPara);


