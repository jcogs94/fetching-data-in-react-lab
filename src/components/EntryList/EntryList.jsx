import EntryCard from "./EntryCard/EntryCard.jsx"

const EntryList = ({ count, entries, type }) => {
    const title = type.charAt(0).toUpperCase() + type.slice(1)
    
    return <>
        <section id="entry-list">
            <h3>{title}</h3>
            <p><em>Number of results: {count}</em></p>
            <ul>
                {entries.map( (entry, index) =>
                    <EntryCard key={index}
                        entry={entry} type={type}
                    />
                )}
            </ul>
        </section>
    </>
}

export default EntryList
