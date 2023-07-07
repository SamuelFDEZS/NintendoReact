const Search = ({filter, setFilter}) => {
    const changeFilter = (event) => {
        setFilter(event.target.value)
    }

    return(
        <div className="search-box">
            <input type="text" name="search" id="search-box-input" placeholder="Type here" onChange={changeFilter}/>
        </div>
    )
}

export default Search