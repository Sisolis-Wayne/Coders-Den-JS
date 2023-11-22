// condole.log('mousse');
const section = document.createElement('section');
const div = document.createElement('div');
const p = document.createElement('p');
const p1 = document.createElement('p');

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.boxSizing = 'border-box';
document.body.style.fontFamily = '"Poppins", sans-serif';

document.body.append(section);
section.append(div);
div.append(p);
div.append(p1);


section.style.width = '100%';
section.style.height = '100vh';
// section.style.backgroundColor = 'green';
section.style.display = 'flex';
section.style.justifyContent = 'center';
section.style.alignItems = 'center';

div.style.width = 'auto';
div.style.height = '100px';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.flexDirection = 'column';
// div.style.backgroundColor = 'blue';

// p.innerHTML = `Press any Keyboard <span class='change'>key</span>`;
p.innerHTML = `Press any Keyboard key`;
p.classList.add('styles');

p1.classList.add('styles');
p1.style.display = 'none';

const styles = document.querySelectorAll('.styles');
// console.log(styles);
styles.forEach(each => {
    each.style.fontSize = '30px';
    // p.style.border = '1px solid red';
    // p.style.boxShadow = '';
    each.style.boxShadow = '2px 1px 5px 0px #B7B7B7';
    each.style.padding = '30px';
    each.style.textShadow = '0px 2px 2px #7A7575';
    
});



// change.style.border = '1px solid green';
// change.style.boxShadow = '2px -1px 5px 0px #B7B7B7';

// console.log(change);

window.addEventListener('keydown', function (key) {
    // console.log(key);
    p.innerHTML = `You pressed <span class='change'>${key.key}</span>`;
    const change = document.querySelector('.change');
    change.style.color = '#24C056';
    if (key.keyCode === 32) {
        change.innerHTML = 'Space';
    }
    p1.innerHTML = `${key.keyCode}`;
    // p1.innerHTML = `${key.key.charCodeAt()}`;
    p1.style.display = 'block';
    p1.style.color = '#24C056';
    p1.style.fontSize = '80px';
})


// console.log('a'.charCodeAt());
// console.log('A'.charCodeAt()); 5bbc7a





