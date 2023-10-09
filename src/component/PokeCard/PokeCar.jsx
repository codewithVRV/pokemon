import './PokeCard.css'

function PokeCard ({name, poster }) {
    return (
        <>
            <div className="poke-wrapper">
                <h3>{name}</h3>
                <div className='poke-img'>
                    <img src={poster} alt="" />
                </div>
            </div>
        </>
    )
}

export default PokeCard;