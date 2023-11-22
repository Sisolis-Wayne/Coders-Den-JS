// console.log('me');
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
h1.innerHTML = 'WORLD COUNTRIES LIST';
h1.style.margin = '0px';
h1.style.letterSpacing = '10px';
document.body.appendChild(h1);
// console.log(h1);

const h2 = document.createElement('h2');
// h2.innerHTML = 'Total Number of Countries';
h2.style.fontSize = '20px';
h2.style.margin = '0px';
document.body.appendChild(h2);

const h3 = document.createElement('h3');
// h3.innerHTML = 'WORLD COUNTRIES LIST';
h3.style.margin = '0px';
h3.style.fontSize = '10px';
h3.style.fontWeight = '100';
h3.innerHTML = '30daysOfJavaScript: DOM day 2';
document.body.appendChild(h3);

const h3_1 = document.createElement('h3');
// h3_1.innerHTML = 'WORLD COUNTRIES LIST';
h3_1.style.margin = '0px';
h3_1.style.fontSize = '10px';
h3_1.style.fontWeight = '100';
h3_1.innerHTML = 'Author: Akorede Mohammed';
document.body.appendChild(h3_1);


const div = document.createElement('div');
// div.innerHTML = 'this is a new div';
div.classList.add('countries-div');
div.style.width = `${106 * 6}px`;
div.style.margin = 'auto'
div.style.display = 'flex';
div.style.flexWrap = 'wrap';
document.body.appendChild(div);



// for (let i = 0; i < )
// const div = document.createElement('div');


const countriesAPI = 'https://restcountries.com/v2/all';

async function nat () {
        try {
            const response = await fetch(countriesAPI);
            const data = await response.json();
            // console.log(data);
            let arr = [];
            for (const countries of data) {
                arr.push(countries.name);
            }
            h2.innerHTML = `Total Number of Countries: ${arr.length}`;
            // console.log(arr);

            for (let i = 0; i < arr.length; i++) {
                const newDiv = document.createElement('div');
                newDiv.textContent = `${arr[i].toUpperCase()}`;
                newDiv.style.width = '100px';
                newDiv.style.height = '100px';
                newDiv.style.border = '1px solid #EFEFEF';
                newDiv.style.marginBottom = '4px';
                newDiv.style.marginRight = '4px';
                // newDiv.style.color = '#fff';
                newDiv.style.display = 'flex';
                newDiv.style.justifyContent = 'center';
                newDiv.style.alignItems = 'center';
                newDiv.style.fontSize = '12px';
                newDiv.style.fontWeight = '500';
                newDiv.style.textAlign = ' center'
                div.appendChild(newDiv);
            }
        } catch (error) {
            error = 'Listening to Juice WRLD';
        }
}

nat()


// ............................................... 
// fetch method

// fetch(countriesAPI)
// .then(response => response.json())
// .then(data => {
//     let arr = []
//     for (const countries of data) {
//         name = countries.name 
//         arr.push(name)
//     }
//     console.log(arr);

    // for (let i = 0; i < arr.length; i++) {
    //     const newDiv = document.createElement('div');
    //     newDiv.textContent = `${arr[i]}`;
    //     newDiv.style.width = '40px';
    //     newDiv.style.width = '40px';
    //     // console.log(countries[i].name)
    //     div.appendChild(newDiv);
    // }
// })
// .catch(error => {
//     error = 'time really moves fast fast fast fast'
//     console.log(error)
// })

// ................................................


