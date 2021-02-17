import React, { useState, useEffect } from 'react';
import App from './App';

const SearchJoke = ({
    Jokes,  
    updateJokes, 
    NewQueue, 
    setNewQueue,
    }) => {

    const [FoundJoke, setFoundJoke] = useState('');

    const [Queue, setQueue] = useState(0);

    const [InputValue, setInputValue] = useState('');

    useEffect(() => {
        if(InputValue != ''){
            searchJoke(url)
        }
    }, [Queue])
    
    const updateSearchValue = e => {
        setInputValue(e.target.value)
    }

    const url = `https://api.chucknorris.io/jokes/search?query=${InputValue}`;
    const ReturnJoke = e => {
        // e.preventDefault();
        setNewQueue(true)

        searchJoke(url);
    }

    const searchJoke = async url => {
        await fetch(url)
            .then(response => {
            return response.json()
            })
            .then(json => {
                setFoundJoke(json.result[Queue].value);                
            })
    }

    const nextJoke = () => {
        setQueue(currCount => currCount + 1);
        searchJoke(url);
    }   

    const prevJoke = () => {
        if(Queue <= 0){
            setQueue(0);
        }else {
            setQueue(currCount => currCount - 1);
            searchJoke(url)
        }
    }

    return (
        <div className="container">
        {NewQueue ? (
            <form onSubmit={e => e.preventDefault()}>
            <input 
                type="text" 
                name="searchJoke" 
                id="searchJoke" 
                onChange={updateSearchValue} 
                placeholder="Search Jokes"
            />
            <button type="submit" onClick={ReturnJoke}>Search</button>

                <h1 className="joke-title">{InputValue} Joke {Queue}</h1>
                <p className="the-joke">{FoundJoke}</p>

            <button onClick={prevJoke}>Previous</button>
            <button onClick={nextJoke}>Next</button>
            <button className="random-jokes" onClick={updateJokes}>The jokes on you</button>
        </form>
        ) : (
            <form onSubmit={e => e.preventDefault()}>
            <input 
                type="text" 
                name="searchJoke" 
                id="searchJoke" 
                onChange={updateSearchValue} 
                placeholder="Search Jokes"
            />
                <button type="submit" onClick={ReturnJoke}>Search</button>

                    <h1 className="joke-title">Random Jokes</h1>
                    <p className="the-joke">{Jokes}</p>
                <button className="random-jokes" onClick={updateJokes}>The jokes on you</button>
           </form>
        )}         
        </div>
    )
}

export default SearchJoke;