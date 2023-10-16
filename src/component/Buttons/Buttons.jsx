import { useEffect, useState } from 'react';
import './Buttons.css'
import axios from 'axios';

function ControlButton () {

    let [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    let [preUrl, setPreUrl] = useState([])

    
    // console.log("nextUrl", currentPageUrl)
    // console.log("previ", preUrl)
    async function downloadNextData() {
        let response = await axios.get(currentPageUrl)
        setCurrentPageUrl(response.data.next)
    }
    
    async function neha () {

        let arr = await axios.get(currentPageUrl)
        setPreUrl(arr.data.previous)

    }

    
    
    async function goToPrevious () {

        // console.log("previous page Clicked")
        const prePageData = await axios.get(preUrl)
        // console.log("prepagedata", prePageData)
    }

    async function goToNext () {
        // console.log("next page Clicked")
        const nextPageData = await axios.get(currentPageUrl)
        // console.log("nextPagedata", nextPageData)
    }


    useEffect(() => {
        downloadNextData()
        neha()

    }, [currentPageUrl])

    return (
        <>
            {/* {currentPageUrl.map((p) => <p key={p}>{p.results.name}</p>)} */}
            {/* <div className="button-wrapper">
                <button className="button" onClick={goToPrevious}>Pre</button>
                <button className="button" onClick={goToNext}>Next</button>
            </div> */}
        </>
        
    )
}

export default ControlButton;