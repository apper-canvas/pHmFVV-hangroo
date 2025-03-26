import { motion } from 'framer-motion';

const BackgroundElements = () => {
  // Generate random positions for the elements
  const elements = [
    // Boomerangs
    { type: 'boomerang', x: '5%', y: '10%', size: 40, delay: 0 },
    { type: 'boomerang', x: '85%', y: '25%', size: 30, delay: 1 },
    { type: 'boomerang', x: '70%', y: '85%', size: 50, delay: 2 },
    
    // Leaves
    { type: 'leaf', x: '15%', y: '75%', size: 35, delay: 0.5 },
    { type: 'leaf', x: '80%', y: '65%', size: 25, delay: 1.5 },
    { type: 'leaf', x: '25%', y: '35%', size: 40, delay: 2.5 },
    { type: 'leaf', x: '50%', y: '15%', size: 30, delay: 3 },
    
    // Stars (for night mode)
    { type: 'star', x: '10%', y: '20%', size: 15, delay: 0.2 },
    { type: 'star', x: '30%', y: '70%', size: 10, delay: 1.8 },
    { type: 'star', x: '60%', y: '40%', size: 12, delay: 2.2 },
    { type: 'star', x: '75%', y: '10%', size: 8, delay: 3.5 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${index % 3 === 0 ? 'animate-float-slow' : index % 3 === 1 ? 'animate-float' : 'animate-float-fast'}`}
          style={{
            left: element.x,
            top: element.y,
            opacity: element.type === 'star' ? 0.7 : 0.2,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: element.type === 'star' ? 0.7 : 0.2, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: element.delay,
            ease: "easeOut" 
          }}
        >
          {element.type === 'boomerang' && (
            <svg width={element.size} height={element.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M21 3C12.5 3 4 11.5 4 21C13.5 21 21 13.5 21 3Z" 
                className="fill-kangaroo/80 dark:fill-kangaroo-light/80"
              />
            </svg>
          )}
          
          {element.type === 'leaf' && (
            <svg width={element.size} height={element.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C17.5 12 12 7.5 12 2Z" 
                className="fill-green-500/60 dark:fill-green-600/60"
              />
            </svg>
          )}
          
          {element.type === 'star' && (
            <svg width={element.size} height={element.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                className="fill-yellow-300/70 dark:fill-yellow-200/70"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundElements;