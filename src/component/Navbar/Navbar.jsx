import { useNavigate } from 'react-router-dom';
import usePokemonData from '../hooks/usePokemonData';
import './Navbar.css'
import { useState } from 'react';

function Navbar () {
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [singleData] = usePokemonData()
    const navigator = useNavigate()
    function handleInput (id) {
        console.log("Id is", id)
        navigator(`poke/${id}`)
    }
    // console.log("searchTerm", searchTerm)
    return (
        <>  
            <div className="input-wrapper">
                <div className='input-class'>
                    <input type="text" placeholder="search here..." 
                        onFocus={() => setIsAutoCompleteVisible(true)}
                        onBlur={() => setIsAutoCompleteVisible(false)}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="auto-result" style={{display: (isAutoCompleteVisible) ? 'block': 'none'}}>
                        {singleData.length > 0 && singleData.map((data) => <p key={data.data.id} onMouseDown={() => handleInput(data.data.id)} >{data.data.name}</p>)}
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar;