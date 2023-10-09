function PokeCard ({name, poster }) {
    return (
        <>
            <h1>{name}</h1>
            <img src={poster} alt="" />
        </>
    )
}

export default PokeCard;