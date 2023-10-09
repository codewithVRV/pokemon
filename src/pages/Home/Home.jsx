import PokeCard from "../../component/PokeCard/PokeCar";
import './Home.css'
import usePokemonData from "../../component/hooks/usePokemonData";

function Home () {

    const [singleData] = usePokemonData()
    return (
        <>
            <div className="all-pokemon-wrapper">
                {singleData.length > 0  && singleData.map((data) => <PokeCard 
                                            key={data.data.id} name={data.data.name}
                                            poster={data.data.sprites.front_default}
                />)}
            </div>
        </>
    )
}

export default Home;