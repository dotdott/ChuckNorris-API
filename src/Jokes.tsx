import { useState } from 'react';
import SearchJoke from '../src/SearchJoke';


export function Jokes() {
    const [Jokes, setJokes] = useState('');

    const [NewQueue, setNewQueue] = useState(false);
  
    const [ChuckIcon, setChuckIcon] = useState('');
  
  
  async function updateJokes() {
      setNewQueue(false)
      const url = `https://api.chucknorris.io/jokes/random`;
  
     await fetch(url)
        .then(response => {
          return response.json()
        })
        .then(json => {
          setChuckIcon(json.icon_url)
          setJokes(json.value)
        });
  
    }  
    
    return (
        <div className="App">
          <div className="container">
            <h1 className="title">
              <img src={ChuckIcon} className="chuck-icon"/>
              Chuck Norris Jokes
              <img src={ChuckIcon} className="chuck-icon"/>
            </h1>
    
            <SearchJoke 
              Jokes={Jokes} 
              NewQueue={NewQueue}
              setNewQueue={setNewQueue} 
              updateJokes={updateJokes} 
              />
    
          </div>
      </div>
    )
}