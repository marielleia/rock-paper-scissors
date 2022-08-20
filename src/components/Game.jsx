import React, { useState, useEffect} from 'react'

export default function Game() {
    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)
    const choices = ['rock', 'paper', 'scissors']

    const handleClick = (value) => {
        setUserChoice(value)
        generateComputerChoice()
    }

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

    useEffect(()=> {
            switch (userChoice + computerChoice) {
                case 'scissorspaper':
                case 'rockscissors':
                case 'paperrock':
                    setResult('YOU WIN!')
                    break
                case 'paperscissors':
                case 'scissorsrock':
                case 'rockpaper':
                    setResult('YOU LOSE!')
                    break
                case 'rockrock':
                case 'paperpaper':
                case 'scissorsscissors':
                    setResult('ITS A DRAW!')
            }
        }, [userChoice, computerChoice])

    return (
        <div className = 'Game'>
            <h1> Your choice is: {userChoice} </h1>
            {choices.map((choice, index) => <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
            <h1> Computer choice is: {computerChoice} </h1>

            <h1>Results: {result}</h1>
        </div>
    )
}
