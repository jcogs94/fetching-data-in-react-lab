import './TypeSelectors.css'

const TypeSelectors = ({ handleType }) => {
    return <>
        <ul id="type">
            <li><button onClick={() => handleType('starships')}>Starships</button></li>
            <li><button onClick={() => handleType('films')}>Films</button></li>
            <li><button onClick={() => handleType('planets')}>Planets</button></li>
            <li><button onClick={() => handleType('vehicles')}>Vehicles</button></li>
            <li><button onClick={() => handleType('species')}>Species</button></li>
            <li><button onClick={() => handleType('people')}>People</button></li>
        </ul>
    </>
}

export default TypeSelectors
