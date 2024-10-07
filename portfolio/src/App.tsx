import { useState } from 'react'
import './App.css'

import '@mantine/core/styles.css';

import { Button, MantineProvider, Text, Title, createTheme, MantineColorsTuple, Accordion } from '@mantine/core';
import Fuzztext from './Fuzztext';




function App() {
  const [count, setCount] = useState(0)

  const goop: MantineColorsTuple = [
    '#e9fdf1',
    '#d7f8e3',
    '#adefc5',
    '#81e6a5',
    '#5ddf8a',
    '#46db79',
    '#39d870',
    '#2ac05e',
    '#1faa52',
    '#079343'
  ];

  const theme = createTheme({
    colors:{
      goop,
    },
    
  })


  const places = [
    {
      emoji: '☕',
      place: 'Copenhagen',
      value: 'Great bikeability and coffee'
    },
    {
      emoji: '🥙',
      place: 'Berlin',
      value: 'Techno and kebabs'
    },
    {
      emoji: '🏰',
      place: 'Prague',
      value: 'Tasty food and incredible architecture'
    },
    {
      emoji: '🦖',
      place: 'Vienna',
      value: 'Museums and 100 year rains'
    }
  ]

  const items = places.map((item) => (
    <Accordion.Item key={item.place} value={item.place}>
      <Accordion.Control icon={item.emoji}>{item.place}</Accordion.Control>
      <Accordion.Panel>{item.value}</Accordion.Panel>
    </Accordion.Item>
  ))


  return (

    <MantineProvider defaultColorScheme='dark' theme={theme}>
      {
        <><h1>Firstname Lastname</h1>
           <Fuzztext  text='overcoming entropy through overwhelming delusion'/>

          <div className="card">
            <Button onClick={() => setCount((count) => count + 100)}>
              Click here to erase your regrets
            </Button>
          </div>
          <Accordion defaultValue={''}>
            {items}  
          </Accordion>          
          </>


      }


    </MantineProvider>
  );

}

export default App
