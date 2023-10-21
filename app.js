
const cardArray = [
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
  
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
for(i = 0; i < cardArray.length; i++){
   const card =  document.createElement('img')
   card.setAttribute('src','images/blank.png')
   card.setAttribute('data-id',i)
   card.addEventListener('click',flipCard)
   gridDisplay.appendChild(card)
}
}
createBoard()


function checkMatch() {
const cards = document.querySelectorAll('img')
const optionOneId = cardsChosenIds[0]
const optionTwoId = cardsChosenIds[1]
console.log(cards)
    console.log("Check for match")

if(optionOneId === optionTwoId) {
    cards[optionOneId[0]].setAttribute('src','images/blank.png')
    cards[optionTwoId[1]].setAttribute('src','images/blank.png')
 alert("You have clicked the same image!")

}



   if(cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match")
   cards[optionOneId[0]].setAttribute('src','images/white.png')
   cards[optionTwoId[1]].setAttribute('src','images/white.png')
   cards[optionOneId[0]].removeEventListener('click',flipCard)
   cards[optionTwoId[1]].removeEventListener('click',flipCard)
   cardsWon.push(cardsChosen)
   } else {
    cards[optionOneId[0]].setAttribute('src','images/blank.png')
    cards[optionTwoId[1]].setAttribute('src','images/blank.png')
    alert("Sorry try again")
   }
   resultDisplay.textContent = cardsWon.length
   cardsChosen = []
   cardsChosenIds = []
   if(cardsWon.length == cardArray.length/2){
    resultDisplay.innerHTML = "Congratulations you found them all"
   }
}


function flipCard() { 
    
const cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenIds.push(cardId)
console.log(cardsChosen)
//console.log(cardsChosenIds)
this.setAttribute('src',cardArray[cardId].img)
if( cardsChosen.length === 2 ) {
    setTimeout(checkMatch, 500)
}

}

















