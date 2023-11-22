// alert('Happy Sunday');

const button = document.querySelector('button');
button.style.margin = '20px';
button.style.padding = '20px';
button.addEventListener('dblclick', select => {
    console.log('select gives the event listener object:', select)
    console.log('select.target gives the selected element: ', select.target)
    console.log('select.target.textContent gives content of selected element: ',select.target.textContent)
    console.log('select.target.textContent gives content of selected element: ',select.target.innerHTML)
    console.log('select.target.textContent gives content of selected element: ',select.target.innerText)
    // alert('this button was clicked')
})

button.addEventListener('click', select => {
    console.log('the button was clicked')
})

// let i = 0;
// button.addEventListener('mouseenter', select => {
//     console.log('the mouse just entered')
//     i++
//     if (i === 10) console.log(`${i}`,': the mouse just entered for the tenth time')
// })

window.addEventListener('keydown', select => {
    console.log(select)
    console.log(select.target)
    button.innerHTML = select.key
})

// window.addEventListener('')

console.log(button)
console.log(button.style)
console.log(button.textContent)
console.log(button.innerHTML)
console.log(button.innerText)