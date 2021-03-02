interface JokePaginationData{
    searchJoke: (arg0: string) => void;
    Queue: number;
    url: string;
    updateJokes: () => void;
    setQueue: (arg0: any) => void;
}

export function JokePagination({
    searchJoke, 
    url, 
    updateJokes,
    Queue,
    setQueue
    }: JokePaginationData) {

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

    return(
        <div>
        <button onClick={prevJoke}>Previous</button>
        <button onClick={nextJoke}>Next</button>
        <button className="random-jokes" onClick={updateJokes}>The jokes on you</button>
        </div>
    )
}