import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './views/Home/Home'
import Chisiamo from './views/Chi siamo/Chi siamo'
import Contatti from './views/Contatti/Contatti'




export default function FunRoutes() {
    return <Router>
         <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/chi siamo" element={<Chisiamo />}/>
             <Route path="/contatti" element={<Contatti />}/>
         </Routes>
        </Router>
    
}