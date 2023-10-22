const colors = ['#731ebb', '#1d3062', '#9cc0e3', '#a2b040', '#262747'];

function color() {
    const rand = Math.floor(Math.random() * 5);
    const randColor = colors[rand];
    console.log(randColor)
}

// setInterval(color, 1000);
console.log(colors.length)