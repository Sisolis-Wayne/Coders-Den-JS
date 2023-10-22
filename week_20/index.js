console.log('another dom stuff. not fast and furious');
const body = document.querySelector('body');
console.log(body)
body.style.margin = '0';
body.style.padding = '0';
body.style.boxSizing = 'border-box';
body.style.fontFamily = '"Poppins", sans-serif';

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column'
wrapper.style.justifyContent = 'center';
wrapper.style.alignItems = 'center';



const h1 = document.querySelector('h1');
h1.style.marginBottom  = '0'

const h2 = document.querySelector('h2');
h2.style.textDecoration = 'underline';
h2.style.fontWeight = '100';

const ul = document.querySelector('ul');
console.log(ul);
ul.style.listStyle = 'none';
ul.style.margin = '0'
ul.style.padding = '0'

const li = document.querySelectorAll('li');
console.log(li);

li.forEach((each) => {
    each.style.backgroundColor = 'green';
    each.style.width = '800px';
    // each.style.width = '45%';
    each.style.height = '46px';
    each.style.display = 'flex';
    each.style.alignItems = 'center';
    // each.style.justifyContent = 'center';
    each.style.paddingLeft = '26px';
    each.style.marginBottom = '1px';
    each.style.borderTopRightRadius = '30px';
    each.style.borderBottomLeftRadius = '30px';
    // each.style.display = 'flex';
    // each.style.alignContent = 'cent??>?>er';
    // each.style.justifyContent = 'center';
    if (each.textContent.includes('Done')) {
        each.style.backgroundColor = '#21bf73';
    }

    if (each.textContent.includes('Ongoing')) {
        each.style.backgroundColor = '#fddb3a';
    }

    if (each.textContent.includes('Coming')) {
        each.style.backgroundColor = '#fd5e53';
    }
})

// console.log(li[0].textContent.includes('Done'));


const dateDiv = document.querySelector('.wrapper div');
console.log(dateDiv);

dateDiv.classList.add('date-div');
dateDiv.style.width = '300px';
dateDiv.style.height = '30px';
dateDiv.style.borderRadius = '30px';
dateDiv.style.marginBottom = '10px';
// dateDiv.style.backgroundColor = 'red';
dateDiv.style.fontSize = '12px';
dateDiv.style.display = 'flex';
dateDiv.style.alignItems = 'center';
dateDiv.style.justifyContent = 'center';




function time() {
    const times = new Date();
    let seconds = times.getSeconds();
    let minute = times.getMinutes();
    let hour = times.getHours();
    const month =  times.toLocaleString('default', { month: 'long' });
    const year = times.getFullYear();
    const date = times.getDate();

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (minute < 10) {
        minute = `0${minute}`;
    }
    if (hour < 10) {
        hour = `0${hour}`;
    }

    dateDiv.innerHTML = `${month} ${date}, ${year} ${hour}:${minute}:${seconds}`;
}


setInterval(time, 1000)


const colors = ['#731ebb', '#1d3062', '#9cc0e3', '#a2b040', '#262747', '#21bf73', '#fddb3a'];

function color() {
    const rand = Math.floor(Math.random() * colors.length);
    const rand1 = Math.floor(Math.random() * colors.length);
    // const randColor = colors[rand];
    // console.log(randColor)

    dateDiv.style.backgroundColor = colors[rand];
    num.style.color = colors[rand1];

}


setInterval(color, 1000)
// #
// 
//

const num = document.querySelector('.wrapper h1 span');
console.log(num);

num.style.fontSize = '55px';
