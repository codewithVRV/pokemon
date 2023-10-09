import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PokeDetails from "../pages/PokeDetails/PokeDetails";

function MainRouting () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/poke/:id" element={<PokeDetails />}/>
        </Routes>
    )
}

export default MainRouting;