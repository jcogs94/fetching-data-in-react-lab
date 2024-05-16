const Search = ({ handleChange, handleSubmit, searchTerm }) => {
    return <>
        <div id="search">
            <h3>Search</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchTerm">Search Term:</label>
                <input type="text" name="searchTerm" onChange={handleChange} value={searchTerm} />
                <button type="submit">Search</button>
            </form>
        </div>
    </>
}

export default Search
