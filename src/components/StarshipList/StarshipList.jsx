import StarshipCard from "./StarshipCard/StarshipCard.jsx"

const StarshipList = ({ count, starships }) => {
    return <>
        <div id="starship-list">
            <h3>Starships</h3>
            <p>Number of results: {count}</p>
            {starships.map( (starship, index) =>
                <StarshipCard key={index}
                    name={starship.name}
                    sClass={starship.starship_class}
                    manufacturer={starship.manufacturer}
                    model={starship.model}
                />
            )}
        </div>
    </>
}

export default StarshipList
