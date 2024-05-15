const StarshipSearch = ({ handleChange, handleSubmit }) => {
    return <>
        <div id="starship-search">
            <h3>Search</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchTerm">Search Term:</label>
                <input type="text" name="searchTerm" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    </>
}

export default StarshipSearch
