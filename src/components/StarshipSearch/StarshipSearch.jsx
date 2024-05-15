const StarshipSearch = () => {
    return <>
        <div id="starship-search">
            <h3>Search</h3>
            <form>
                <label htmlFor="searchTerm">Search Term:</label>
                <input type="text" name="searchTerm"/>
                <button type="submit">Search</button>
            </form>
        </div>
    </>
}

export default StarshipSearch
