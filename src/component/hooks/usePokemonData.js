import axios from "axios"
import { useEffect, useState } from "react"

function usePokemonData () {
    const [pokeData, setPokeData] = useState([])
    const [singleData, setSingleData] = useState([])
    const [nextUrl, setNextUrl] = useState("")

    async function downloadAllPokemon() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokeData(response.data.results) // first method
        setNextUrl(response.data.next)

    }
  
    


    async function singlePokemon () {
        const urls = pokeData.map((data) => data.name)
        const response = await axios.all((urls.map(url => axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`))))
        setSingleData([...response]) // second method
    }


    useEffect(() => {
        downloadAllPokemon()
        singlePokemon()
        
    }, [pokeData])

    return [singleData, nextUrl]
}
export default usePokemonData;