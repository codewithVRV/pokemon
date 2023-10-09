import usePokemonData from '../hooks/usePokemonData';
import './Navbar.css'
import { useState } from 'react';

function Navbar () {
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [singleData] = usePokemonData()
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
                        {singleData.length > 0 && singleData.map((data) => <p key={data.data.id} >{data.data.name}</p>)}
                        {/* <p>Vishnu</p>
                        <p>Vishnu</p>
                        <p>Vishnu</p> */}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Navbar;