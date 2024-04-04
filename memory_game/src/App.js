import './App.css';
import { useState, useEffect } from 'react'
import Cards from './components/Cards';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const [choiseOne, setChoiseOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }))

    setCards(shuffleCards)
    setTurns(0)
  }


  const handleChoise = (card) => {
    choiseOne ? setChoiceTwo(card) : setChoiseOne(card)
  }

  useEffect(() => {
    if (choiseOne && choiceTwo) {
      setDisabled(true)
      if ((choiseOne.src === choiceTwo.src) && (choiseOne.id !== choiceTwo.id)) {
        setCards((prevCards) => {
          return prevCards.map(card => {
            if (card.src === choiseOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        restTurns()
      } else {
        setTimeout(() => {
          restTurns()
        }, 1000);
      }

    }
  }, [choiseOne, choiceTwo])

  const restTurns = () => {
    setChoiseOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn + 1)
    setDisabled(false)
  }

  console.log(cards);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h1 style={{ color: '#fff' }}>مصی عشق</h1>
      <button onClick={shuffleCards} >New Game</button>


      <Cards
        cards={cards}
        handleChoise={handleChoise}
        choiceOne={choiseOne}
        choiceTwo={choiceTwo}
        disabled = {disabled}
      />

      <p style={{ color: '#fff' }}>Turns : {turns}</p>
    </div>
  );
}

export default App;