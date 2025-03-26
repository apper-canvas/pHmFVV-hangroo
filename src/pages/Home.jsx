import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, Trophy, Settings } from 'lucide-react'
import MainFeature from '../components/MainFeature'

const Home = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [difficulty, setDifficulty] = useState('medium')
  const [category, setCategory] = useState('animals')
  
  const categories = [
    { id: 'animals', name: 'Animals' },
    { id: 'countries', name: 'Countries' },
    { id: 'food', name: 'Food & Drinks' },
    { id: 'aussie', name: 'Aussie Slang' }
  ]
  
  const difficulties = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' }
  ]
  
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-outback-sand mb-2">
          G'day, Mate!
        </h1>
        <p className="text-lg text-surface-600 dark:text-surface-300">
          Can you guess the word before the kangaroo appears?
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-3">
          <MainFeature 
            difficulty={difficulty} 
            category={category} 
          />
        </div>
        
        <div className="md:col-span-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-surface-800 rounded-2xl p-4 shadow-card"
          >
            <div className="flex items-center gap-2 mb-3">
              <Settings size={18} className="text-primary" />
              <h2 className="font-heading text-lg">Game Settings</h2>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
                Category
              </label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 rounded-lg bg-surface-100 dark:bg-surface-700 border border-surface-200 dark:border-surface-600 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-surface-600 dark:text-surface-300 mb-1">
                Difficulty
              </label>
              <div className="flex gap-1">
                {difficulties.map(diff => (
                  <button
                    key={diff.id}
                    onClick={() => setDifficulty(diff.id)}
                    className={`flex-1 py-1 px-2 text-sm rounded-lg transition-all ${
                      difficulty === diff.id 
                        ? 'bg-primary text-white font-medium' 
                        : 'bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-surface-600'
                    }`}
                  >
                    {diff.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-surface-800 rounded-2xl p-4 shadow-card"
          >
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={18} className="text-primary" />
              <h2 className="font-heading text-lg">Leaderboard</h2>
            </div>
            
            <p className="text-sm text-surface-500 dark:text-surface-400 italic">
              Coming soon in the full version!
            </p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => setShowInfo(true)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-outback-sand/20 dark:bg-outback-sand/10 hover:bg-outback-sand/30 dark:hover:bg-outback-sand/20 rounded-lg text-surface-700 dark:text-surface-300 transition-colors"
          >
            <Info size={16} />
            <span>How to Play</span>
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowInfo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-surface-800 rounded-2xl p-6 max-w-md w-full shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-heading font-bold text-secondary dark:text-outback-sand mb-4">
                How to Play HangRoo
              </h2>
              
              <div className="space-y-3 text-surface-700 dark:text-surface-300">
                <p>1. A random word will be selected based on your chosen category and difficulty.</p>
                <p>2. Guess one letter at a time by clicking on the keyboard.</p>
                <p>3. Correct guesses reveal the letter in the word.</p>
                <p>4. Incorrect guesses will gradually draw our kangaroo friend.</p>
                <p>5. Win by guessing the word before the kangaroo is fully drawn!</p>
              </div>
              
              <button
                onClick={() => setShowInfo(false)}
                className="mt-6 w-full btn btn-primary"
              >
                Got it!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home