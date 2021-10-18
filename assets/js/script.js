// Declaring Game Variables
const gameContent = $(`.gameContent`);
const startGameButton = $(`#startGame`);

// Array
const selections = [
    {
        name: `Rock`,
        beats: `Scissors`
    },
    {
        name: `Paper`,
        beats: `Rock`
    },
    {
        name: `Scissors`,
        beats: `Paper`
    }
];

// Functionality
gameContent.hide();
startGameButton.on(`click`, event => {
    gameContent.show(500);
    let randomChoice = Math.floor(Math.random() * selections.length);
    const computerChoice = selections[randomChoice].name;
    $(`.computerSelection`).html(computerChoice);
})