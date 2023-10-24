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
dateDiv.innerHTML = 'This is the div to display the date';
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
    each.style.backgroundColor = 'coral';
    each.style.marginBottom = '1px';
    each.style.paddingInline = '35px'

    for (let i = 0; i < 3; i++) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `This is div ${i}`;
        each.appendChild(newDiv);
    }

    each.style.display = 'flex';
    each.style.justifyContent = 'space-between';
    each.style.alignItems = 'center'
})

const span2020 = document.querySelector('h1 span');
span2020.style.fontSize = '55px'
console.log(span2020);

const colors = ['#731ebb', '#1d3062', '#9cc0e3', '#a2b040', '#262747', '#21bf73', '#fddb3a'];

function color() {
    const rand = Math.floor(Math.random() * colors.length)
    // console.log(rand);
    span2020.style.color = colors[rand];
}

setInterval(color, 1000)

function date() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hr = date.getHours();
    const month = date.toLocaleString('default', { month: 'long' })
    // console.log(min)
}

setInterval(date, 1000)