console.log(`JS is Connected`);

var gameButton = document.querySelector(`.newButton`);
gameButton.addEventListener(`click`, event => {
    // Execute code below
    gameButton.innerHTML++;
})
