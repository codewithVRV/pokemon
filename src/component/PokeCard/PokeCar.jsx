import { useNavigate } from 'react-router-dom';
import './PokeCard.css'

function PokeCard ({name, poster, id }) {

    const navigator = useNavigate()

    function handlePokeCard () {
        navigator(`poke/${id}`)

    }
    return (
        <>
            
            <div className="poke-wrapper" onClick={handlePokeCard}>
                <div className='poke-img'>
                    <img src={poster} alt="" />
                </div>
                <h2>{name}</h2>
            </div>
        </>
    )
}

export default PokeCard;