const EntryCard = ({ entry, type }) => {
    switch (type) {
        case 'starships':
            return <>
                <li className="starship-card">
                    <h4>{entry.name}</h4>
                    <p><b>Class:</b> {entry.starship_class}</p>
                    <p><b>Manufacturer:</b> {entry.manufacturer}</p>
                    <p><b>Model:</b> {entry.model}</p>
                </li>
            </>
        case 'films':
            return <>
                <li className="film-card">
                    <h4>Episode {entry.episode_id} - {entry.title}</h4>
                    <p><b>Director:</b> {entry.director}</p>
                </li>
            </>
        case 'planets':
            return <>
                <li className="planet-card">
                    <h4>{entry.name}</h4>
                    <p><b>Population:</b> {entry.population}</p>
                    <p><b>Climate:</b> {entry.climate}</p>
                </li>
            </>
        case 'vehicles':
            return <>
                <li className="vehicle-card">
                    <h4>{entry.name}</h4>
                    <p><b>Class:</b> {entry.vehicle_class}</p>
                    <p><b>Manufacturer:</b> {entry.manufacturer}</p>
                    <p><b>Model:</b> {entry.model}</p>
                </li>
            </>
        case 'species':
            return <>
                <li className="species-card">
                    <h4>{entry.name}</h4>
                    <p><b>Language:</b> {entry.language}</p>
                    <p><b>Classification:</b> {entry.classification}</p>
                </li>
            </>
        default:
            return <p>Error...</p>
    }
}

export default EntryCard
