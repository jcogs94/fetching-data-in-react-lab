const BASE_URL = 'https://swapi.dev/api/starships/'

const index = async () => {
    try {
        let hasMorePages = true
        let currentURL = BASE_URL
        
        let allData = {
            count: 0,
            results: []
        }

        while (hasMorePages) {
            const res = await fetch(currentURL)
            let data = await res.json()

            
            allData.count = data.count
            allData.results = [...allData.results, ...data.results]
            
            if (data.next) {
                currentURL = data.next
            } else {
                hasMorePages = false
            }
        }
        
        return allData
    } catch (err) {
        console.log(err)
    }
}

const search = async (searchTerm) => {
    try {
        const queryStr = '?search=' + searchTerm
        const searchURL = BASE_URL + queryStr
        let currentURL = searchURL
        let hasMorePages = true
        
        let allData = {
            count: 0,
            results: []
        }

        while (hasMorePages) {
            const res = await fetch(currentURL)
            let data = await res.json()

            
            allData.count = data.count
            allData.results = [...allData.results, ...data.results]
            
            if (data.next) {
                currentURL = data.next
            } else {
                hasMorePages = false
            }
        }
        
        return allData
    } catch (err) {
        console.log(err)
    }
}

export { index, search }
