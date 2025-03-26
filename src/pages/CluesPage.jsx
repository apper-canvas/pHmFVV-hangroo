import { useState } from 'react'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import CluesGame from '../components/CluesGame'

const CluesPage = () => {
  const [difficulty, setDifficulty] = useState('easy')
  const [category, setCategory] = useState('animals')
  const [showHelp, setShowHelp] = useState(false)

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const toggleHelp = () => {
    setShowHelp(prev => !prev)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-heading text-primary dark:text-primary-light mb-2">
          HangRoo with Clues
        </h1>
        <p className="text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
          Play HangRoo with helpful clues! Reveal hints to guess the word, but each clue will cost you points.
        </p>
      </div>

      <div className="bg-white dark:bg-surface-800 rounded-xl p-4 mb-6 shadow-card">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="bg-surface-50 dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-lg px-3 py-2 text-surface-800 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="animals">Animals</option>
                <option value="countries">Countries</option>
                <option value="food">Food</option>
                <option value="aussie">Aussie Slang</option>
              </select>
            </div>

            <div>
              <label htmlFor="difficulty" className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
                Difficulty
              </label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={handleDifficultyChange}
                className="bg-surface-50 dark:bg-surface-700 border border-surface-200 dark:border-surface-600 rounded-lg px-3 py-2 text-surface-800 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleHelp}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light"
          >
            <HelpCircle size={18} />
            <span>How to Play</span>
          </motion.button>
        </div>

        {showHelp && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-surface-50 dark:bg-surface-700 rounded-lg"
          >
            <h3 className="text-lg font-heading mb-2 text-secondary dark:text-secondary-light">How to Play with Clues</h3>
            <ul className="list-disc list-inside space-y-2 text-surface-700 dark:text-surface-200">
              <li>Guess letters to reveal the hidden word</li>
              <li>Click the <HelpCircle size={16} className="inline mb-1" /> button in the game to show clues panel</li>
              <li>Each revealed clue will cost you 3 points from your final score</li>
              <li>Use clues strategically - they help you win but reduce your score</li>
              <li>Seven incorrect guesses will complete the kangaroo drawing and end the game</li>
            </ul>
          </motion.div>
        )}
      </div>

      <CluesGame difficulty={difficulty} category={category} />
    </div>
  )
}

export default CluesPage