import axios from "axios"
import { useEffect, useState } from "react"

function usePokemonData () {
    const [pokeData, setPokeData] = useState([])
    const [singleData, setSingleData] = useState([])

    async function downloadAllPokemon() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokeData(response.data.results) // first method
        

    }
    // console.log("pokedata is ", pokeData)
    // async function singlePokemon () {
    //     const urls = pokeData.map((data) => data.url)
    //     const response = await axios.all((urls.map(url => axios.get(url))))
    //     setSingleData([...response]) // second method
    // }

    async function singlePokemon () {
        const urls = pokeData.map((data) => data.name)
        const response = await axios.all((urls.map(url => axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`))))
        setSingleData([...response]) // second method
    }


    useEffect(() => {
        downloadAllPokemon()
        singlePokemon()
        
    }, [pokeData])

    return [singleData]
}
export default usePokemonData;