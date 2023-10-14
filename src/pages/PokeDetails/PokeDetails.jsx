import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './PokeDetails.css'


function PokeDetails () {
    const {id} = useParams()
    const [card, setCard] = useState(null)

    async function downloadSingleData () {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // console.log('response of movie details data', response.data)
        setCard(response.data)
    }
   

    useEffect(() => {
        downloadSingleData()
    }, [id])
    
    return (
        <>
            <Link to="/"><h1 style={{textAlign: "center"}}>Poked-Ex</h1></Link>
            { card && <div className="pokemon-wrapper">
                <div className="p-img">
                    <img src={card.sprites.other.dream_world.front_default} alt="" />
                </div>
                <div className="p-details">
                    <p><b>Name:-</b>   {(!card.name) ? "Not found" : card.name}</p>
                    <p><b>Ability:-</b>   {card.abilities[0].ability.name}</p>
                    <p><b>Height:-</b> {card.height} cm.</p>
                    <p><b>Weight:-</b> {card.weight} gm.</p>
                    <p><b>Total Fights:-</b> {card.base_experience}</p>
                </div>
            </div>}
        </>
    )
}

export default PokeDetails;