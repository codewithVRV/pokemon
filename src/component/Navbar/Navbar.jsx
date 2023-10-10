import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import useDebounce from '../hooks/useDebounce';
// import useSingleData from '../hooks/useSingleData';

function Navbar () {

    
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false)
    let [searchTerm, setSearchTerm] = useState("")
    const [singleData, setSingleData] = useState([])

    const navigator = useNavigate()

    function handleInput (id) {
        navigator(`poke/${id}`)
    }
    console.log("single data is", singleData)
    
    async function downloadByName () {
        console.log("search Term is", searchTerm)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${(searchTerm) ? searchTerm : "charmander"}`)
        console.log("response of search card", response)
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
                        onChange={useDebounce((e) => setSearchTerm(e.target.value))}
                    />
                    <div className="auto-result" style={{display: (isAutoCompleteVisible) ? 'block': 'none'}}>
                        {singleData && <p key={singleData.id}
                         onMouseDown={() => handleInput(singleData.id)} >{singleData.name}</p>}
                        <p>Search Term is {searchTerm}</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar;