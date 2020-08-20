import React, { useState } from 'react'
import './App.css'
import {
  Frame, Scroll, useCycle
} from 'framer'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div style={{ textAlign: 'center' }}>
    <h2>Quinn Butterfield</h2>
  </div>
)

const projects = [
  {
    id: 1,
    name: 'Wizards \'n\' Spells',
    description: 'A MUD (multi-user dungeon) game built with Scala and Akka',
    link: 'https://github.com/quinnbutterfield/wizards-n-spells'
  },
  {
    id: 2,
    name: 'Sandwich Builder Website',
    description: 'A MUD (multi-user dungeon) game built with Scala and Akka',
    link: 'https://github.com/quinnbutterfield/wizards-n-spells'
  }
]

const padded = {
  padding: 10,
}

const spring = {
  type: 'spring',
  duration: 30,
  delay: 0,
  stiffness: 500,
  damping: 60,
  mass: 1,

}



const Projects = () => (
  <div>
    <h2>Projects</h2>

    {projects.map (project =>

      <Project key={project.id}  project={project}/>

    )}

  </div>
)




const Project = ({ project }) => {

  const [expanded, setExpanded] = useState(false)

  return (

    <div className='project'>
      <motion.header className='projectTitle'
        initial={false}
        onClick={() => {
          setExpanded(!expanded)
        } }> {project.name}</motion.header>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: .2, ease: 'backInOut' }}
          >
            <p>{project.description}</p>
            <a href='https://github.com/quinnbutterfield/wizards-n-spells'>click here for more info!</a>
          </motion.section>
        )}


      </AnimatePresence>

    </div>
  )
}
const App = () => {
  return (
    <div>
      <ul className='nav'>
        <li>
          <Link style={padded} to='/'>Home</Link>
        </li>
        <li>
          <Link style={padded} to='/projects'>Projects</Link>
        </li>

      </ul>

      <Switch>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
