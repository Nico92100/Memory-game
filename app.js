document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
{
  name: 'color',
  img: 'images/color.png'
},
{
  name: 'color',
  img: 'images/color.png'
},
{
  name: 'noir1',
  img: 'images/noir1.png'
},
{
  name: 'noir1',
  img: 'images/noir1.png'
}
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector.('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
      card.setAttribute('src', 'images/cover.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
  }
}


function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('Vous en avez trouvez une!')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/cover.png')
    cards[optionTwoId].setAttribute('src', 'images/cover.png')
    alert('Désolé, réessayez')
  }
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length/2) {
  resultDisplay.textContent = 'Bravo! vous les avez tous trouvé!'
}

}


function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}
createBoard()
