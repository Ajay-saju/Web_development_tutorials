


let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function getRandomCard() {
    let randomValue = Math.floor(Math.random() * 13) + 1
    if (randomValue > 10) {
        return 10;
    } else if (randomValue === 1) {
        return 11
    } else {
        return randomValue
    }
}
function startGame() {
    isAlive = true
    let fisrt_card = getRandomCard()
    let second_card = getRandomCard()
    cards.push(fisrt_card)
    cards.push(second_card)
    sum = fisrt_card + second_card
    renderGame()
}
function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let new_card = getRandomCard()
        cards.push(new_card)
        sum = sum + new_card;
        renderGame()
    } else {
    }
}
function renderGame() {


    if (sum <= 20) {
        message = "Do you want to draw a new card ? "
    } else if (sum === 21) {
        message = "Wohoo !!!, you've got the BlackJack "
        hasBlackJack = true;


    } else {
        message = "you're out the game !"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum :" + sum

    cardsEl.textContent = "Cards :"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


}
