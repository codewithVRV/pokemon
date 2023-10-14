import PokeCard from "../../component/PokeCard/PokeCar";
import './Home.css'
import usePokemonData from "../../component/hooks/usePokemonData";

function Home () {

    const [singleData] = usePokemonData()
    // console.log("single, data, list" , singleData)
    return (
        <>

            <div className="all-pokemon-wrapper">
                {singleData.length > 0  && singleData.map((data) => <PokeCard 
                                            key={data.data.id} name={data.data.name}
                                            poster={data.data.sprites.other.dream_world.front_default}
                                            id={data.data.id}
                />)}
            </div>
        </>
    )
}

export default Home;