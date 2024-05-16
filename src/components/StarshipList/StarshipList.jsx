import StarshipCard from "./StarshipCard/StarshipCard.jsx"

const StarshipList = ({ count, starships }) => {
    return <>
        <section id="starship-list">
            <h3>Starships</h3>
            <p><em>Number of results: {count}</em></p>
            <ul>
                {starships.map( (starship, index) =>
                    <StarshipCard key={index}
                        name={starship.name}
                        sClass={starship.starship_class}
                        manufacturer={starship.manufacturer}
                        model={starship.model}
                    />
                )}
            </ul>
        </section>
    </>
}

export default StarshipList
