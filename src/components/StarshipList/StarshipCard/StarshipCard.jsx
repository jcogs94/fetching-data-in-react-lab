const StarshipCard = ({ name, sClass, manufacturer, model }) => {
    return <>
        <div className="starship-card">
            <h4>{name}</h4>
            <ul>
                <li>Class: {sClass}</li>
                <li>Manufacturer: {manufacturer}</li>
                <li>Model: {model}</li>
            </ul>
        </div>
    </>
}

export default StarshipCard
