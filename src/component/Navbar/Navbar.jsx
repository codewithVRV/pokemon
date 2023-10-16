import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import useDebounce from '../hooks/useDebounce';

function Navbar () {

    
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false)
    let [searchTerm, setSearchTerm] = useState("")
    const [singleData, setSingleData] = useState([])

    const navigator = useNavigate()

    function handleInput (id) {
        navigator(`poke/${id}`)
    }
    
    async function downloadByName () {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${(searchTerm) ? searchTerm : ""}`)
        setSingleData(response.data)
    }

    useEffect (() => {
        downloadByName ()

    }, [searchTerm])

    return (
        <>  
            <div className="input-wrapper">
                <div className='input-class'>
                    <input type="text" placeholder="search here..." 
                        onFocus={() => setIsAutoCompleteVisible(true)}
                        onBlur={() => setIsAutoCompleteVisible(false)}
                        onChange={useDebounce((e) => setSearchTerm(e.target.value.toLowerCase()))}
                    />
                    <div className="auto-result" style={{display: (isAutoCompleteVisible) ? 'block': 'none'}}>
                        {singleData && <p key={singleData.id}
                         onMouseDown={() => handleInput(singleData.id)} >{singleData.name}</p>}
                        <p className='input-color'>Searching for... {searchTerm}</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar;