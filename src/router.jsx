import {BrowserRouter, Routes,Route} from 'react-router-dom' 
import Emo from './Pages/Emo'
import End from './Pages/End'

const RouterBox = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Emo/>}/>
                <Route path='/end' element={<End/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterBox