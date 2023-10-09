import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "../../component/PokeCard/PokeCar";

function Home () {

    const [pokeData, setPokeData] = useState([])
    const [singleData, setSingleData] = useState([])

    async function downloadAllPokemon() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokeData(response.data.results) // first method
        

    }
    async function singlePokemon () {
        // urls is an array which contains multiple url inside this array
        // let urls = ["www.google.com", "something.com", "facebook.com"] like this
        const urls = pokeData.map((data) => data.url)
        const response = await axios.all((urls.map(url => axios.get(url))))
        setSingleData([...response]) // second method
    }
    // console.log("single", singleData)


    useEffect(() => {
        downloadAllPokemon()
        singlePokemon()
    }, [])
    return (
        <>
            {singleData.length > 0  && singleData.map((data) => <PokeCard 
                                        key={data.data.id} name={data.data.name}
                                        poster={data.data.sprites.front_default}
            />)}
        </>
    )
}

export default Home;