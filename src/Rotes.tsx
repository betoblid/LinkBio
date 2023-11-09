import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Erro from "./Pages/Erro";


const Rotes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotes;