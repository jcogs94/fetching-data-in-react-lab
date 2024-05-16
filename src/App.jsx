// src/App.jsx
import { useEffect, useState } from "react"
import * as starshipService from "./services/starshipService.js"
import TypeSelectors from "./components/TypeSelectors/TypeSelectors.jsx"
import StarshipList from "./components/StarshipList/StarshipList.jsx"
import StarshipSearch from "./components/StarshipSearch/StarshipSearch.jsx"
import './App.css'

const App = () => {
  const [starshipList, setStarshipList] = useState({})
  const [searchTerm, setSearchTerm] = useState({})
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStarshipList(await starshipService.search(searchTerm))
  }

  useEffect(() => {
    const fetchIndex = async () => {
      const data = await starshipService.index()
      setStarshipList(data)
    }

    fetchIndex()
  }, [])
  
  return <>
    <main>
      <h1>Starwars API</h1>
      <TypeSelectors />
      <StarshipSearch handleChange={handleChange} handleSubmit={handleSubmit} />
      {starshipList.count ?
        <StarshipList count={starshipList.count} starships={starshipList.results} />
        : <p><em>Loading...</em></p>
      }
    </main>
  </>
}

export default App
