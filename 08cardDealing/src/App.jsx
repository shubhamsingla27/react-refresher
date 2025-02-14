import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [deck, setDeck] = useState([])
  const [dealtCards, setDealtCards] = useState([])

  const generateCards=()=>{
    const suits=["Spade", "Club", "Heart", "Diamond"]
    const rankes=["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "Jack","Queen" , "King"]

    const cards=[]

    for ( let suit of suits){
      for (let rank of rankes){
        cards.push({suit: suit, rank:rank})
      }
    }
    setDeck(cards)
  }
  useEffect(()=>{
    generateCards()
  },[])

  const handleCardDealing=()=>{
    const newDealtCards=[]
    const newDeck=[...deck]
    for (let i=0;i<5;i++){
      const randomIndex=Math.floor(Math.random() * newDeck.length)
      newDealtCards.push(newDeck.splice(randomIndex,1)[0])
    }
    setDeck(newDeck)
    setDealtCards((prevDealtCards)=>(
      [...prevDealtCards, newDealtCards]
    ))
  }
  useEffect(()=>{
    console.log(dealtCards)
  }, [dealtCards])

  return (
    <>
      <h1 className='text-center my-4'>Card Dealing app</h1>
      <div className='w-full max-w-md mx-auto flex justify-center'>
        <button onClick={handleCardDealing} className='w-fit bg-blue-500 text-white rounded-lg p-2'>Deal 5 cards</button>
      </div>
      <div className='w-full max-w-fit mx-auto' >
        {dealtCards.map((oneSet,index)=>(
          <div key={index} className="flex flex-nowrap gap-4 my-6">
            {oneSet.map((card)=>(
              <div key={`${card.suit}-${card.rank}`} className="w-[120px] h-[200px] flex justify-center items-center flex-col bg-white rounded-lg transform transition-transform duration-300 hover:translate-y-[-1rem]"><p>{card.suit}</p> <p>{card.rank}</p></div>
            ))}
          </div>
        ))}
      </div>

      
    </>
  )
}

export default App


