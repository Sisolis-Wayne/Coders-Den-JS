import { asabenehChallenges2020 } from "../data/challenges_info.js"
console.log(asabenehChallenges2020);

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.fontFamily = '"Poppins", sans-serif';

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';

const h1 = document.createElement('h1');
h1.innerHTML = `Asabeneh Yetayeh challlenges in <span>2020</span>`;
wrapper.appendChild(h1);


const h2 = document.createElement('h2');
h2.innerHTML = '30 days of javascript challenge';
wrapper.appendChild(h2);

const dateDiv = document.createElement('div');
// dateDiv.innerHTML = 'This is the div to display the date';
dateDiv.style.paddingInline = '20px';
dateDiv.style.marginBottom = '3px'
wrapper.appendChild(dateDiv);

const ul = document.createElement('ul');
for (let i = 0; i < 8; i++) {
    let newLi = document.createElement('li');
    ul.appendChild(newLi);
}
// ul.innerHTML = `<li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>`;
wrapper.appendChild(ul);

ul.style.listStyle = 'none';
ul.style.padding = '0';
ul.style.margin = '0';

const li = document.querySelectorAll('li');
console.log(li);
li.forEach((each) => {
    each.style.width = '1000px';
    each.style.height = '46px';
    // each.style.backgroundColor = 'coral';
    each.style.marginBottom = '1px';
    each.style.paddingInline = '35px'

    for (let i = 0; i < 3; i++) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `This is div ${i}`;
        newDiv.classList.add('new-div');
        each.appendChild(newDiv);
    }

    each.style.display = 'flex';
    each.style.justifyContent = 'space-between';
    each.style.alignItems = 'center';
    each.style.height = 'auto';
})

const span2020 = document.querySelector('h1 span');
span2020.style.fontSize = '55px'
console.log(span2020);

const colors = ['#731ebb', '#1d3062', '#9cc0e3', '#a2b040', '#262747', '#21bf73', '#fddb3a'];

function color() {
    const rand = Math.floor(Math.random() * colors.length)
    const rand1 = Math.floor(Math.random() * colors.length)
    // console.log(rand);
    dateDiv.style.backgroundColor = colors[rand];
    span2020.style.color = colors[rand1];
}

setInterval(color, 1000)

function date() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hr = date.getHours();
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear();
    // console.log(min)
    dateDiv.innerHTML = `${month} ${year} ${hr}:${min}:${sec}`;

}

setInterval(date, 1000)

// console.log(newDiv)
// console.log(newLi)
// console.log(li)
const newDiv = document.querySelectorAll('.new-div');
console.log(newDiv);

for (let i = 0, j = 0; i < newDiv.length; i += 3, j++) {
    // console.log(i);
    newDiv[i].innerHTML = asabenehChallenges2020.challenges[j].name;
}


for (let i = 2, j = 0; i < newDiv.length; i += 3, j++) {
    // console.log(i);
    newDiv[i].innerHTML = asabenehChallenges2020.challenges[j].status;
    if (asabenehChallenges2020.challenges[j].status.toLowerCase() === 'done') {
        li[j].style.backgroundColor = '#21bf73'
    }

    if (asabenehChallenges2020.challenges[j].status.toLowerCase() === 'ongoing') {
        li[j].style.backgroundColor = '#fddb3a'
    }

    if (asabenehChallenges2020.challenges[j].status.toLowerCase() === 'coming') {
        li[j].style.backgroundColor = '#fd5e53'
    }
}


//........................................................
const first = newDiv[1];
console.log(first)
first.innerHTML = `
                    <details>
                    <summary>Python</summary>
                    <p>Django</p>
                    <p>Flask</p>
                    <p>Numpy</p>
                    <p>Pandas</p>
                    <p>Pand</p>
                    </details>`

// first.style.height = 'auto'

// console.log(li[0])

const firstAgain = document.querySelectorAll(`.new-div details`);
console.log(firstAgain)
console.log(firstAgain[0])
const n = document.createElement('p');
n.innerHTML = 'new para'
firstAgain[0].appendChild(n);
//........................................................


for  (let i = 1, k = 0; i < newDiv.length; i += 3, k++) {
    console.log(i)

    newDiv[i].innerHTML = `
                            <details>
                            <summary>Mython</summary>
                            </details>
    `

    for (let j = 0; j < asabenehChallenges2020.challenges[k].topics.length; j++) {
        let newP = document.createElement('p');
        newP.innerHTML = `${asabenehChallenges2020.challenges[k].topics[j]}`;
        const newDivUnder = document.querySelectorAll(`.new-div details`);
        newDivUnder[k].appendChild(newP);
        console.log(newDivUnder)
    }

}