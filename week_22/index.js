const body = document.body;
// console.log(body);
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.margin = '0';
body.style.padding = '0';
body.style.boxSizing = 'border-box';
body.style.fontFamily = '"Poppins", sans-serif';

const h1 = document.createElement('h1');
h1.innerHTML = 'Number Generator';
h1.style.marginBottom = '0px';
h1.style.padding = '0px';
document.body.appendChild(h1);

const h2 = document.createElement('h2');
h2.innerHTML = '30daysOfJavaScript: DOM day 2';
h2.style.textDecoration = 'underline';
h2.style.fontWeight = '100';
h2.style.margin = '0px';
document.body.appendChild(h2);

const h6 = document.createElement('h6');
h6.innerHTML = 'Author: Akorede Mohammed';
h6.style.textDecoration = 'underline';
h6.style.fontWeight = '100';
h6.style.marginTop = '10px';
h6.style.marginBottom = '10px';
document.body.appendChild(h6);

const div = document.createElement('div');
// div.innerHTML = 'this is a new div';
div.classList.add('num-div');
div.style.width = `${104 * 6}px`;
div.style.margin = 'auto'
document.body.appendChild(div);

for (i = 0; i < 102; i++) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = i;
    // newDiv.style.width = '40px';
    newDiv.style.width = `100px`;
    newDiv.style.height = `100px`;
    newDiv.style.backgroundColor = 'red';
    newDiv.style.marginBottom = '4px';
    newDiv.style.marginRight = '4px';
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'center';
    newDiv.style.alignItems = 'center';
    newDiv.style.color = '#fff';
    newDiv.style.fontSize = '30px';

    if (i % 2 === 0) {
        newDiv.style.backgroundColor = '#21bf73';
    }

    if (i % 2 !== 0) {
        newDiv.style.backgroundColor = '#fddb3a';
    }

    if (isPrime(i)) {
        // console.log('yes');
        newDiv.style.backgroundColor = '#fd5e53';
    }

    div.appendChild(newDiv);
}

div.style.display = 'flex';
div.style.flexWrap = 'wrap';

//

// body.style.justifyContent = 'space-between';
// body.style.flexWrap = 'wrap';

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= Math.floor(s); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};




