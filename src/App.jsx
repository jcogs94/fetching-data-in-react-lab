// src/App.jsx
import { useEffect, useState } from "react"
import * as starshipService from "./services/starshipService.js"
import StarshipList from "./components/StarshipList/StarshipList.jsx"
import StarshipSearch from "./components/StarshipSearch/StarshipSearch.jsx"

const App = () => {
  const [starshipList, setStarshipList] = useState({})
  
  useEffect(() => {
    const fetchIndex = async () => {
        setStarshipList(await starshipService.index())
    }

    fetchIndex()
  })
  
  return <>
    <h1>Starwars API</h1>
    <StarshipSearch />
    <StarshipList count={starshipList.count} starships={starshipList.results} />
  </>
}

export default App
