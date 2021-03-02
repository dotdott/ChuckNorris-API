import React, { useEffect, useState } from 'react';
import { JokePagination } from './JokePagination';
import { SearchInput } from './SearchInput';

interface SearchJokeProps {
    Jokes: string;
    updateJokes: () => void;
    NewQueue: boolean;
    setNewQueue: (arg0: boolean) => void;
}

const SearchJoke = ({
    Jokes,  
    updateJokes, 
    NewQueue, 
    setNewQueue,
    }: SearchJokeProps) => {
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
    const ReturnJoke = () => {
        setNewQueue(true)

        searchJoke(url);
    }

    const searchJoke = async (url: string) => {
        await fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setFoundJoke(json.result[Queue].value);                
            })
    }

    return (
        <div className="container">
        {NewQueue ? (
            <form onSubmit={e => e.preventDefault()}>
                <SearchInput 
                    updateSearchValue={updateSearchValue}
                    ReturnJoke={ReturnJoke}
                />
                    <h1 className="joke-title">{InputValue} Joke {Queue}</h1>
                    <p className="the-joke">{FoundJoke}</p>

                <JokePagination 
                    Queue={Queue}
                    searchJoke={searchJoke}
                    setQueue={setQueue}
                    updateJokes={updateJokes}
                    url={url}
                />
            </form>
        ) : (
            <form onSubmit={e => e.preventDefault()}>
                <SearchInput 
                    updateSearchValue={updateSearchValue}
                    ReturnJoke={ReturnJoke}
                />

                    <h1 className="joke-title">Random Jokes</h1>
                    <p className="the-joke">{Jokes}</p>
                <button className="random-jokes" onClick={updateJokes}>The jokes on you</button>
           </form>
        )}         
        </div>
    )
}

export default SearchJoke;