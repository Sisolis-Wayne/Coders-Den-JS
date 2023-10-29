import { asabenehChallenges2020 } from "../data/challenges_info.js";
// console.log(asabenehChallenges2020);

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";
document.body.style.fontFamily = '"Poppins", sans-serif';
document.body.style.marginBottom = "60px";


const wrapper = document.querySelector(".wrapper");
console.log(wrapper);
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";

const h1 = document.createElement("h1");
h1.innerHTML = `${asabenehChallenges2020.challengeTitle} in <span>${asabenehChallenges2020.challengeYear}</span>`;
h1.style.margin = '0';
h1.style.padding = '0';
wrapper.appendChild(h1);

const h2 = document.createElement("h2");
h2.innerHTML = `${asabenehChallenges2020.challengeSubtitle}`;
h2.style.margin = '0';
h2.style.marginTop = '-6px';
h2.style.marginBottom = '10px';
h2.style.fontWeight = '100';
h2.style.textDecoration = 'underline';
wrapper.appendChild(h2);

const dateDiv = document.createElement("div");
// dateDiv.innerHTML = 'This is the div to display the date';
dateDiv.style.paddingInline = "20px";
// dateDiv.style.marginBottom = "50px";
dateDiv.style.width = '300px';
dateDiv.style.height = '30px';
dateDiv.style.borderRadius = '30px';
dateDiv.style.marginBottom = '15px';
dateDiv.style.fontSize = '12px';
dateDiv.style.display = 'flex';
dateDiv.style.alignItems = 'center';
dateDiv.style.justifyContent = 'center';
wrapper.appendChild(dateDiv);

const ul = document.createElement("ul");
for (let i = 0; i < 8; i++) {
  let newLi = document.createElement("li");
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

ul.style.listStyle = "none";
ul.style.padding = "0";
ul.style.margin = "0";

const li = document.querySelectorAll("li");
console.log(li);
li.forEach((each) => {
  each.style.width = "800px";
  // each.style.height = "46px";
  // each.style.backgroundColor = 'coral';
  each.style.marginBottom = "1px";
  each.style.paddingInline = "35px";
  each.style.paddingBlock = "15px";

  for (let i = 0; i < 3; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `This is div ${i}`;
    newDiv.classList.add("new-div");
    each.appendChild(newDiv);
  }

  each.style.display = "flex";
  each.style.justifyContent = "space-between";
  each.style.alignItems = "center";
  each.style.height = "auto";
  each.style.borderTopRightRadius = '30px';
  each.style.borderBottomLeftRadius = '30px';
  each.style.borderBottomRightRadius = '30px';
});

const span2020 = document.querySelector("h1 span");
span2020.style.fontSize = "55px";
console.log(span2020);

const colors = [
  "#731ebb",
  "#1d3062",
  "#9cc0e3",
  "#a2b040",
  "#262747",
  "#21bf73",
  "#fddb3a",
];

function color() {
  const rand = Math.floor(Math.random() * colors.length);
  const rand1 = Math.floor(Math.random() * colors.length);
  // console.log(rand);
  dateDiv.style.backgroundColor = colors[rand];
  span2020.style.color = colors[rand1];
}

setInterval(color, 1000);

function date() {
  const date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hr = date.getHours();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (hr < 10) {
    hr = `0${hr}`;
  }

  dateDiv.innerHTML = `${month} ${year} ${hr}:${min}:${sec}`;
}

setInterval(date, 1000);

// console.log(newDiv)
// console.log(newLi)
// console.log(li)
const newDiv = document.querySelectorAll(".new-div");
console.log(newDiv);

for (let i = 0, j = 0; i < newDiv.length; i += 3, j++) {
  // console.log(i);
  if (asabenehChallenges2020.challenges[j].githubUrl) {
    newDiv[i].innerHTML = `<a href='${asabenehChallenges2020.challenges[j].githubUrl}' target='_blank'>${asabenehChallenges2020.challenges[j].name}</a>`;
  } else {
    newDiv[i].innerHTML = asabenehChallenges2020.challenges[j].name;
  }
}

for (let i = 2, j = 0; i < newDiv.length; i += 3, j++) {
  // console.log(i);
  newDiv[i].innerHTML = asabenehChallenges2020.challenges[j].status;
  if (asabenehChallenges2020.challenges[j].status.toLowerCase() === "done") {
    li[j].style.backgroundColor = "#21bf73";
  }

  if (asabenehChallenges2020.challenges[j].status.toLowerCase() === "ongoing") {
    li[j].style.backgroundColor = "#fddb3a";
  }

  if (asabenehChallenges2020.challenges[j].status.toLowerCase() === "coming") {
    li[j].style.backgroundColor = "#fd5e53";
  }
}

//........................................................
// const first = newDiv[1];
// console.log(first)
// first.innerHTML = `
//                     <details>
//                     <summary>Python</summary>
//                     <p>Django</p>
//                     <p>Flask</p>
//                     <p>Numpy</p>
//                     <p>Pandas</p>
//                     <p>Pand</p>
//                     </details>`

// // first.style.height = 'auto'

// // console.log(li[0])

// const firstAgain = document.querySelectorAll(`.new-div details`);
// console.log(firstAgain)
// console.log(firstAgain[0])
// const n = document.createElement('p');
// n.innerHTML = 'new para'
// firstAgain[0].appendChild(n);
// //........................................................

const nameOfTrack = [
  "Python",
  "JavaScript",
  "HTML & CSS",
  "React",
  "ReactNative",
  "Fullstack",
  "Data Analysis",
  "Machine Learning",
];

for (let i = 1, k = 0; i < newDiv.length; i += 3, k++) {
  // console.log(i) // check how to change the summary marker

  newDiv[i].innerHTML = `
                            <details>
                            <summary>${nameOfTrack[k]}</summary> 
                            </details>
    `;

  for (let j = 0; j < asabenehChallenges2020.challenges[k].topics.length; j++) {
    let newP = document.createElement("p");
    newP.innerHTML = `${asabenehChallenges2020.challenges[k].topics[j]}`;
    const newDivUnder = document.querySelectorAll(`.new-div details`);
    newDivUnder[k].appendChild(newP);
    // console.log(newDivUnder)
  }
}

const newP = document.querySelectorAll(".new-div details p");
console.log(newP);

newP.forEach((each) => {
  each.style.fontSize = "12px";
  each.style.margin = "0";
  each.style.marginBottom = "3px";
});

const nameOfAuthor = document.createElement("h3");
nameOfAuthor.innerHTML = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;
nameOfAuthor.style.textAlign = "center";
nameOfAuthor.style.fontSize = "28px";
// nameOfAuthor.style.margin = '0';
nameOfAuthor.style.marginBottom = '10px';
wrapper.appendChild(nameOfAuthor);

const iconDiv = document.createElement("div");
iconDiv.classList.add("icon-div");
wrapper.appendChild(iconDiv);

console.log(iconDiv);

let iconNum = 0;

for (let i = 0; i < asabenehChallenges2020.author.socialLinks.length; i++) {
  if (asabenehChallenges2020.author.socialLinks[i].fontawesomeIcon) iconNum++;
}

console.log(iconNum);

const newUl = document.createElement("ul");
newUl.classList.add("new-ul");
newUl.style.listStyle = "none";
newUl.style.margin = "0";
newUl.style.padding = "0";
newUl.style.display = "flex";
newUl.style.justifyContent = "center";
newUl.style.alignItems = "center";
iconDiv.appendChild(newUl);

for (let i = 0; i < iconNum; i++) {
  const newLiAgain = document.createElement("li");
  newLiAgain.innerHTML = `<a href='${asabenehChallenges2020.author.socialLinks[i].url}' target='_blank' class='under-nli-again'>${asabenehChallenges2020.author.socialLinks[i].fontawesomeIcon}</a>`;
  newLiAgain.classList.add("new-li-again");
  newUl.appendChild(newLiAgain);
}

const newLiAgain = document.querySelectorAll(".new-li-again");
console.log(newLiAgain);

newLiAgain.forEach((each) => {
  each.style.fontSize = "33px";
  // each.style.color = 'black';
  each.style.marginLeft = "10px";
});

const nli = document.querySelectorAll(".under-nli-again");
console.log(nli);

nli.forEach((each) => {
  each.style.color = "#000000";
  // each.style.color = 'black';
});

const aboutInfo = document.createElement("div");
aboutInfo.innerHTML = `<p class='about-info-p'>${asabenehChallenges2020.author.bio}</p>`;
aboutInfo.style.width = "800px";
wrapper.appendChild(aboutInfo);

// console.log(aboutInfo);
const aboutInfoP = document.querySelector(".about-info-p");
// aboutInfoP.style.fontSize = '30px';
aboutInfoP.style.textAlign = "center";

const otherInfo = document.createElement("div");
otherInfo.style.width = '800px'
otherInfo.style.display = 'flex';
otherInfo.style.justifyContent = 'space-between';
// otherInfo.style.alignItems = 'center';
wrapper.appendChild(otherInfo);

for (let i = 0; i < 3; i++) {
  const otherInfoDivs = document.createElement("div");
  otherInfoDivs.innerHTML = `${i + 1}`;
  otherInfoDivs.classList.add("other-info-divs");
  otherInfo.appendChild(otherInfoDivs);
}

const otherInfoDivs = document.querySelectorAll(".other-info-divs");
console.log(otherInfoDivs);


const moreAbout = ['Titles', 'Skills', 'Qualifications'];
const emojiArr = ['✅','📖','👨‍🎓'];

for (let i = 0; i < otherInfoDivs.length; i++) {
  // moreAbout[i].sytle.fontWeight = 'bold';
  otherInfoDivs[i].innerHTML = `<p>${moreAbout[i]}</p>`;
  // nD stands for new div
  
  for (let j = 0, k = 0, l = 1; j < asabenehChallenges2020.author[`${moreAbout[i].toLowerCase()}`].length; j++, l++) {
    const nD = document.createElement('div');
    // nD.innerHTML = `${j + 1}`;
    if (moreAbout[i].toLowerCase() === 'titles') {
      nD.innerHTML = `
                      <span>${asabenehChallenges2020.author[`${moreAbout[i].toLowerCase()}`][j][0]}</span> <span>${asabenehChallenges2020.author[`${moreAbout[i].toLowerCase()}`][j][1]}</span>
                      `;
    } else if (moreAbout[i].toLowerCase() === 'skills') {
      nD.innerHTML = `
                      <span>${emojiArr[k]}</span> <span>${asabenehChallenges2020.author[`${moreAbout[i].toLowerCase()}`][j]}</span>
                      `;
    } else {
      nD.innerHTML = `
                      <span>${emojiArr[l]}</span> <span>${asabenehChallenges2020.author[`${moreAbout[i].toLowerCase()}`][j]}</span>
                      `;
                      l = 1;
    }
    nD.classList.add('n-d');
    otherInfoDivs[i].appendChild(nD);
  }
}

const otherInfoDivsP = document.querySelectorAll('.other-info-divs p');
// console.log(otherInfoDivsP);
otherInfoDivsP.forEach((each) => {
  each.style.fontWeight = 'bold';
})

const divKeyword = document.createElement('div');
divKeyword.style.width = '800px';
// divKeyword.style.display = 'flex';
// divKeyword.style.justifyContent = 'start';
divKeyword.innerHTML = `<h4>Keyword</h4>`;
wrapper.appendChild(divKeyword);

const divUnderKeywords = document.createElement('div');
// divUnderKeywords.style.width = '800px';
divUnderKeywords.style.marginLeft = '36px';
divUnderKeywords.style.display = 'flex';
divUnderKeywords.style.justifyContent = 'space-between';
divUnderKeywords.style.flexWrap = 'wrap';
divKeyword.appendChild(divUnderKeywords);

for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
  if (asabenehChallenges2020.keywords[i] === 'Web Storage' || asabenehChallenges2020.keywords[i] === 'localStorage' || asabenehChallenges2020.keywords[i] === 'sessionStorage') continue;
  const newkeyword = document.createElement('div');
  newkeyword.classList.add('new-key-word');
  newkeyword.innerHTML = `<span class='new-key-word-span'># ${asabenehChallenges2020.keywords[i]}</span>`;
  divUnderKeywords.appendChild(newkeyword);
}

const newkeyword = document.querySelectorAll('.new-key-word');
// console.log(newkeyword);
newkeyword.forEach((each) => {
  each.style.marginBottom = '21px';

})

const newKeyWordSpan = document.querySelectorAll('.new-key-word-span');
console.log(newKeyWordSpan);

const colorsKeywords = ['#693860', '#009841', '#e2ec4e', '#cb577c', '#e74d58', '#23de8b', '#defd8d', '#e3e114', '#d91892', '#e0a9cb', '#f0d349', '#2baf07', '#cabe66', '#1535bd', '#01a20f', '#21f0bc', '#6c9284', '#f05167', '#757c7f', '#5d9e6f', '#c94b65', '#265712', '#b8c9db', '#a79ae2', '#844445', '#10c619', '#a2552d', '#509ea7', '#9b8a68', '#fce84c', '#88cce6', '#66de30'];
console.log(colorsKeywords.length);

newKeyWordSpan.forEach((each, i) => {
  each.style.backgroundColor = `${colorsKeywords[i]}`;
  each.style.paddingInline = '13px';
  each.style.paddingBlock = '7px';
  each.style.borderRadius = '20px';
  each.style.marginRight = '7px';
  each.style.fontStyle = 'italic'
})