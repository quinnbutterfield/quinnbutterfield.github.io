
import './App.css'

import '@mantine/core/styles.css';

import { Button, MantineProvider, Title, createTheme, MantineColorsTuple, Accordion, Card } from '@mantine/core';
import Fuzztext from './Fuzztext';




function App() {

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
        <><h1>Quinn Butterfield</h1>
           <Fuzztext  text='overcoming entropy through overwhelming delusion'/>

          <div className="card">
            <Button>
              Click here to erase your regrets
            </Button>
          </div>
          <Card>
            <Title order={3}>Travel Diaries</Title>
          <Accordion defaultValue={''}>
            {items}  
          </Accordion> 
          </Card>
                   
          </>


      }


    </MantineProvider>
  );

}

export default App
