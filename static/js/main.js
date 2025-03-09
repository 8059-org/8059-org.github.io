function setRandomBackground() {
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 90%)`;
}

setRandomBackground();

setInterval(setRandomBackground, 4000);
