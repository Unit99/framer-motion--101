import {motion} from 'framer-motion'

//components
import Container from './components/Container'
import List from './components/List'

const App = ()=>{
  const dimension = {
    width: '200px',
    height: '200px'
  }

  return (
  <>
    <Container>
      <motion.div
        className ='circle'
        style={{width: dimension.width, height: dimension.height}}
        animate={{x: 200}}
        transition={{delay: 1, duration: 1, type: 'spring', stiffness: 100, repeat: Infinity, repeatType: 'mirror', ease: 'backInOut'}}
      />

      <motion.div
        className='circle round'
        initial={{
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          opacity: 1,
          scale: 2
        }}
        transition={{
          default:{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale:{
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          }
        }}
      />

      <List />

      <motion.div 
        className='box'
        animate={{rotate: 180}}
        transition={{
          repeat: Infinity, 
          duration: 2, 
          repeatType: 'reverse', //like yoyo
        }}
      />

      <motion.aside 
        className='box' 
        style={{
          backgroundColor: 'yellow', 
          marginTop: '3em'
        }}
        animate={{
          scale: [0,1,0.5,1],
        }}
        transition={{
          times: [0, 0.1, 0.9, 1],
        }}
      />
    </Container>
  </>
  )
}

export default App