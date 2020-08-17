document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
{
  name: 'color',
  img: 'images/color.png'
},
{
  name: 'color4',
  img: 'images/color4.png'
},
{
  name: 'noir1',
  img: 'images/noir1.png'
},
{
  name: 'color1',
  img: 'images/color1.png'
},
{
  name: 'noir1',
  img: 'images/noir1.png'
},
{
  name: 'color1',
  img: 'images/color1.png'
},
{
  name: 'color3',
  img: 'images/color3.png'
},
{
  name: 'color2',
  img: 'images/color2.png'
},
{
  name: 'color3',
  img: 'images/color3.png'
},
{
  name: 'color2',
  img: 'images/color2.png'
},
{
  name: 'color',
  img: 'images/color.png'
},
{
  name: 'color4',
  img: 'images/color4.png'
}
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/cover.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
  }
}


function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

   if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/cover.png')
      cards[optionTwoId].setAttribute('src', 'images/cover.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/cover.png')
      cards[optionTwoId].setAttribute('src', 'images/cover.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
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
})
