console.log(`JS is Connected`);

var gameButton = document.querySelector(`.gameButton`);
gameButton.addEventListener(`click`, event => {
    // Execute code below
    gameButton.innerHTML++;
})
