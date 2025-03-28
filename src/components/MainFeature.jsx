import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RefreshCw, AlertCircle } from 'lucide-react'

// Word lists for different categories and difficulties
const wordLists = {
  animals: {
    easy: ['DOG', 'CAT', 'COW', 'PIG', 'FOX', 'BIRD', 'FISH'],
    medium: ['KOALA', 'WOMBAT', 'DINGO', 'POSSUM', 'PARROT', 'LIZARD'],
    hard: ['PLATYPUS', 'KANGAROO', 'CASSOWARY', 'KOOKABURRA', 'TASMANIAN']
  },
  countries: {
    easy: ['USA', 'PERU', 'CUBA', 'ITALY', 'SPAIN', 'CHINA'],
    medium: ['BRAZIL', 'CANADA', 'MEXICO', 'FRANCE', 'RUSSIA', 'JAPAN'],
    hard: ['AUSTRALIA', 'SINGAPORE', 'ARGENTINA', 'SWITZERLAND', 'INDONESIA']
  },
  food: {
    easy: ['MEAT', 'RICE', 'FISH', 'CAKE', 'MILK', 'EGGS'],
    medium: ['BURGER', 'PIZZA', 'PASTA', 'SUSHI', 'SALAD', 'STEAK'],
    hard: ['VEGEMITE', 'LAMINGTON', 'PAVLOVA', 'MEAT PIE', 'ANZAC BISCUIT']
  },
  aussie: {
    easy: ['MATE', 'GDAY', 'ARVO', 'BARBIE', 'LOLLY', 'BREKKIE'],
    medium: ['STUBBY', 'THONGS', 'DUNNY', 'ESKY', 'FOOTY', 'MOZZIE'],
    hard: ['FAIR DINKUM', 'STREWTH', 'DRONGO', 'CRIKEY', 'SHEILA', 'COBBER']
  }
}

// Keyboard layout
const keyboardRows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]

// Kangaroo drawing parts (SVG paths)
const kangarooParts = [
  "M40,100 C35,95 30,90 30,85 C30,80 35,75 40,70", // tail
  "M40,70 C45,65 50,60 55,60 C60,60 65,65 70,70", // body
  "M70,70 C75,65 80,60 80,55 C80,50 75,45 70,40", // neck
  "M70,40 C65,35 60,30 55,30 C50,30 45,35 40,40", // head
  "M45,35 C45,35 45,35 45,35", // eye
  "M55,60 C50,65 45,70 45,75 C45,80 50,85 55,90", // left leg
  "M70,70 C75,75 80,80 80,85 C80,90 75,95 70,100" // right leg
]

const MainFeature = ({ difficulty, category }) => {
  const [word, setWord] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [incorrectGuesses, setIncorrectGuesses] = useState(0)
  const [gameStatus, setGameStatus] = useState('active') // 'active', 'won', 'lost'
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  
  // Initialize or reset the game
  const initGame = () => {
    const words = wordLists[category][difficulty]
    const randomWord = words[Math.floor(Math.random() * words.length)]
    
    setWord(randomWord)
    setGuessedLetters([])
    setIncorrectGuesses(0)
    setGameStatus('active')
    setMessage('')
    setShowMessage(false)
  }
  
  // Initialize game on mount or when category/difficulty changes
  useEffect(() => {
    initGame()
  }, [category, difficulty])
  
  // Check if player has won
  useEffect(() => {
    if (gameStatus !== 'active') return
    
    // Check if all letters in the word have been guessed
    const hasWon = word.split('').every(letter => 
      guessedLetters.includes(letter) || letter === ' '
    )
    
    if (hasWon && word) {
      setGameStatus('won')
      const newScore = calculateScore()
      setScore(prev => prev + newScore)
      setStreak(prev => prev + 1)
      setMessage(`Bonza! You've won ${newScore} points!`)
      setShowMessage(true)
    }
  }, [guessedLetters, word, gameStatus])
  
  // Check if player has lost
  useEffect(() => {
    if (gameStatus !== 'active') return
    
    if (incorrectGuesses >= kangarooParts.length) {
      setGameStatus('lost')
      setStreak(0)
      setMessage(`Crikey! The word was "${word}"`)
      setShowMessage(true)
    }
  }, [incorrectGuesses, gameStatus, word])
  
  // Calculate score based on difficulty, word length, and incorrect guesses
  const calculateScore = () => {
    const difficultyMultiplier = { easy: 1, medium: 2, hard: 3 }
    const baseScore = 10 * difficultyMultiplier[difficulty]
    const lengthBonus = word.length * 2
    const incorrectPenalty = incorrectGuesses * 5
    
    return baseScore + lengthBonus - incorrectPenalty
  }
  
  // Handle letter guess
  const handleGuess = (letter) => {
    if (gameStatus !== 'active' || guessedLetters.includes(letter)) return
    
    // Add letter to guessed letters
    setGuessedLetters(prev => [...prev, letter])
    
    // Check if letter is in the word
    if (!word.includes(letter)) {
      setIncorrectGuesses(prev => prev + 1)
    }
  }
  
  // Start a new game
  const handleNewGame = () => {
    initGame()
  }
  
  // Render the word with guessed letters revealed
  const renderWord = () => {
    return word.split('').map((letter, index) => {
      const isSpace = letter === ' '
      const isGuessed = guessedLetters.includes(letter)
      const showLetter = isGuessed || isSpace || gameStatus === 'lost'
      
      return (
        <div 
          key={index} 
          className={`letter-box ${isSpace ? 'border-none' : ''}`}
        >
          {showLetter ? letter : '_'}
        </div>
      )
    })
  }
  
  // Render the keyboard
  const renderKeyboard = () => {
    return keyboardRows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-center gap-1 mb-2">
        {row.map(letter => {
          const isGuessed = guessedLetters.includes(letter)
          const isCorrect = word.includes(letter) && isGuessed
          
          let keyClass = 'keyboard-key '
          if (!isGuessed) {
            keyClass += 'keyboard-key-default'
          } else if (isCorrect) {
            keyClass += 'keyboard-key-correct'
          } else {
            keyClass += 'keyboard-key-incorrect'
          }
          
          return (
            <motion.div
              key={letter}
              whileHover={!isGuessed ? { scale: 1.05 } : {}}
              whileTap={!isGuessed ? { scale: 0.95 } : {}}
              onClick={() => handleGuess(letter)}
              className={keyClass}
            >
              {letter}
            </motion.div>
          )
        })}
      </div>
    ))
  }
  
  return (
    <div className="bg-white dark:bg-surface-800 rounded-2xl p-6 shadow-card">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-heading text-xl text-secondary dark:text-outback-sand">
            {category.charAt(0).toUpperCase() + category.slice(1)} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </h2>
          <div className="text-sm text-surface-500 dark:text-surface-400">
            Score: <span className="font-medium text-primary">{score}</span> | 
            Streak: <span className="font-medium text-primary">{streak}</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNewGame}
          className="p-2 rounded-full bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 hover:bg-surface-200 dark:hover:bg-surface-600 transition-colors"
          aria-label="New Game"
        >
          <RefreshCw size={20} />
        </motion.button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-40 h-40 relative">
            <svg viewBox="0 0 120 120" className="w-full h-full">
              {kangarooParts.map((path, index) => (
                <motion.path
                  key={index}
                  d={path}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: index < incorrectGuesses ? 1 : 0,
                    opacity: index < incorrectGuesses ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="kangaroo-part"
                />
              ))}
            </svg>
          </div>
          
          <div className="text-sm text-center text-surface-500 dark:text-surface-400 mt-2">
            {incorrectGuesses} / {kangarooParts.length} incorrect guesses
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mb-4 p-3 rounded-lg text-center ${
                  gameStatus === 'won' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <AlertCircle size={16} />
                  <span>{message}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="flex flex-wrap justify-center mb-4">
            {renderWord()}
          </div>
          
          {gameStatus !== 'active' && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNewGame}
              className="btn btn-primary mb-4"
            >
              Play Again
            </motion.button>
          )}
        </div>
      </div>
      
      <div className="mt-6">
        {renderKeyboard()}
      </div>
    </div>
  )
}

export default MainFeature