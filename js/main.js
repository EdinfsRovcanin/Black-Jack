let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cardValues = [];
let cardImages = [];
let player = {
    name: "Torsk",
    chips: 250
}
const getCardSound = new Audio("sound/120508__bigmac4029__1cards.wav");

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    
    getCardSound.play();

    isAlive = true;
    cardValues = [];
    cardImages = [];
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardValues = [firstCard.number, secondCard.number];
    cardImages = [firstCard.image, secondCard.image];
    sum = firstCard.number + secondCard.number;
    renderGame();
}



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 14) + 1;
    let cardNumber;
    let cardImage;

    if (randomNumber === 1) {
        cardNumber = 11;
        cardImage = "card01.png";
    } else if (randomNumber === 11) {
        cardNumber = 11;
        cardImage = "card11.png";
    } else if (randomNumber === 12) {
        cardNumber = 10;
        cardImage = "card12.png";
    } else if (randomNumber === 13) {
        cardNumber = 10;
        cardImage = "card13.png";
    } else if (randomNumber === 14) {
        cardNumber = 10;
        cardImage = "card14.png";
    } 
    else {
        cardNumber = randomNumber;
        cardImage = `card${randomNumber}.png`;
    }

    return {
        number: cardNumber,
        image: cardImage
    };
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    
    cardsEl.textContent = "";
    for (let i = 0; i < cardImages.length; i++) {
        const cardImg = document.createElement("img");
        cardImg.src = cardImages[i];
        cardImg.alt = `Card ${i + 1}`;
        cardImg.classList.add("card-image");
        cardsEl.appendChild(cardImg);
    }
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        getCardSound.play();
        let card = getRandomCard();
        cardValues.push(card.number);
        cardImages.push(card.image);
        sum += card.number;
        renderGame();
       
    }
}