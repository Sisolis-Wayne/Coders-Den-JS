import { asabenehChallenges2020 } from "../data/challenges_info.js";
console.log(asabenehChallenges2020);

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
wrapper.appendChild(h1);

const h2 = document.createElement("h2");
h2.innerHTML = `${asabenehChallenges2020.challengeSubtitle}`;
wrapper.appendChild(h2);

const dateDiv = document.createElement("div");
// dateDiv.innerHTML = 'This is the div to display the date';
dateDiv.style.paddingInline = "20px";
dateDiv.style.marginBottom = "3px";
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
  each.style.height = "46px";
  // each.style.backgroundColor = 'coral';
  each.style.marginBottom = "1px";
  each.style.paddingInline = "35px";

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
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hr = date.getHours();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  // console.log(min)
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
    newDiv[
      i
    ].innerHTML = `<a href='${asabenehChallenges2020.challenges[j].githubUrl}' target='_blank'>${asabenehChallenges2020.challenges[j].name}</a>`;
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
nameOfAuthor.style.fontSize = "20px";
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
  each.style.fontSize = "25px";
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

const divKeyword = document.createElement('div');
divKeyword.style.width = '800px';
// divKeyword.style.display = 'flex';
// divKeyword.style.justifyContent = 'start';
divKeyword.innerHTML = `<h4>Keyword</h4>`;
wrapper.appendChild(divKeyword);

const divUnderKeywords = document.createElement('div');
divUnderKeywords.style.width = '800px';
divUnderKeywords.style.display = 'flex';
divUnderKeywords.style.flexWrap = 'wrap';
divKeyword.appendChild(divUnderKeywords);

for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
  const newkeyword = document.createElement('div');
  newkeyword.innerHTML = `${asabenehChallenges2020.keywords[i]}`;
  newkeyword.style.backgroundColor = 'yellow';
  // newkeyword.style.width = 'auto'
  newkeyword.style.marginLeft = '10px';
  newkeyword.style.paddingRight = '40px';
  // newkeyword.style.padding = '4px';
  newkeyword.style.border = '1px solid yellow';
  newkeyword.style.marginBottom = '4px';
  newkeyword.style.borderRadius = '20%';
  divUnderKeywords.appendChild(newkeyword);
}