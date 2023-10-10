import { useNavigate } from 'react-router-dom';
import './PokeCard.css'

function PokeCard ({name, poster, id }) {

    const navigator = useNavigate()

    function handlePokeCard () {
        console.log("id is, ",id)
        console.log("function clicked")
        navigator(`poke/${id}`)

    }
    return (
        <>
            <div className="poke-wrapper" onClick={handlePokeCard}>
                <h3>{name}</h3>
                <div className='poke-img'>
                    <img src={poster} alt="" />
                </div>
            </div>
        </>
    )
}

export default PokeCard;