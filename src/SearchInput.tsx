interface SearchInputProps{
    updateSearchValue: (arg0: any) => void;
    ReturnJoke: () => void;
}

export function SearchInput({updateSearchValue, ReturnJoke}: SearchInputProps){
    return (
        <>
        <input 
        type="text" 
        name="searchJoke" 
        id="searchJoke" 
        onChange={updateSearchValue} 
        placeholder="Search Jokes"
    />
        <button type="submit" onClick={ReturnJoke}>Search</button>
    </>
    )
}