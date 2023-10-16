import PokeCard from "../../component/PokeCard/PokeCar";
import './Home.css'
import axios from "axios";
import { useEffect, useState } from "react";

function Home () {


    

    const [pokemon, setPokemon] = useState([])
    const [perPageData, setPerPageData] = useState([])

    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPage, setNextPage] = useState()
    const [prePage, setPrePage] = useState()

    async function donwloadDataPerPage () {
        const response = await axios.all((pokemon.map(url => axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`))))
        setPerPageData([...response])
        
    }

    useEffect(() => {
        let cancel;
        axios.get(currentPage, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setNextPage(res.data.next)
            setPrePage(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
        })
        donwloadDataPerPage()


        return () => cancel()


    }, [pokemon])


    function gotoNextPage () {
        setCurrentPage(nextPage)
    }

    function gotoPrePage () {
    setCurrentPage(prePage)

    }


    return (
        <>
            <div className="button-wrapper">
                {prePage && <button className="button" onClick={gotoPrePage} >Pre</button>}
                <button className="button" onClick={gotoNextPage} >Next</button>
            </div>

            <div className="all-pokemon-wrapper">
                {perPageData.length > 0  && perPageData.map((data) => <PokeCard 
                                            key={data.data.id} name={data.data.name}
                                            poster={data.data.sprites.other.dream_world.front_default}
                                            id={data.data.id}
                />)}
            </div>
        </>
    )
}

export default Home;