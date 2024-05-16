// src/App.jsx
import { useEffect, useState } from "react"
import * as swapiService from "./services/swapiService.js"
import TypeSelectors from "./components/TypeSelectors/TypeSelectors.jsx"
import EntryList from "./components/EntryList/EntryList.jsx"
import Search from "./components/Search/Search.jsx"
import './App.css'

const App = () => {
  const [entryList, setEntryList] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [type, setType] = useState('starships')
  
  const handleType = async (type) => {
    setType(type)
    setSearchTerm('')
    setEntryList(await swapiService.index(type))
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newList = await swapiService.search(type, searchTerm)
    newList.type = type
    setEntryList(newList)
  }

  useEffect(() => {
    const fetchIndex = async () => {
      const data = await swapiService.index(type)
      setEntryList(data)
    }

    fetchIndex()
  }, [])
  
  return <>
    <main>
      <h1>Starwars API</h1>
      <TypeSelectors handleType={handleType} />
      <Search handleChange={handleChange} handleSubmit={handleSubmit}
        searchTerm={searchTerm} />
      {entryList.count ?
        <EntryList count={entryList.count}
          entries={entryList.results}
          type={type}
        />
        : <p><em>Loading...</em></p>
      }
    </main>
  </>
}

export default App
