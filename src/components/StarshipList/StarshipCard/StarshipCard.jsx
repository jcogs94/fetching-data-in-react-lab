const StarshipCard = ({ name, sClass, manufacturer, model }) => {
    return <>
        <li className="starship-card">
            <h4>{name}</h4>
            <p><b>Class:</b> {sClass}</p>
            <p><b>Manufacturer:</b> {manufacturer}</p>
            <p><b>Model:</b> {model}</p>
        </li>
    </>
}

export default StarshipCard
