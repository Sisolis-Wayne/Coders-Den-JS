let title
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    if (i === 2) {
        title.textContent = 'this is a new file for html'
    } else {
        title.textContent = i
    }
    console.log(title)
    document.body.appendChild(title)
    
}
// const ul = document.querySelector('ul')
// console.log(ul)
// ul.innerHTML = '<li>' + '30DaysOfPython Challenge Done' + '</li>'
// ul.innerHTML = ul.innerHTML + `<li>30DaysOfPython Challenge Done</li>`