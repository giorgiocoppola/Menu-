


import {useState} from 'react'
import Chisiamo from './components/Chisiamo'
import Home from './components/Home'
import Contatti from './components/Contatti'
import './App.css'


const parts = [
    Home,
    Chisiamo,
    Contatti,
  ]


const pages = [
    { component: Home, title: 'Home' },
    { component: Chisiamo, title: 'Chi siamo' },
    { component: Contatti, title: 'Contatti' },
  ]
    

  

  function App() {
    const [active,setActive] = useState(0);

    return (
          <header>

             <div className="header">Fish and Chips
             {pages.map((page,i) =>(<span onClick={()=> setActive(i)}>{page.title}</span>))}

             {parts.map((Component, i) => (
              active === i
          ? <Component key={i} />
          : null
      ))}
     
  
             
             </div>  
          </header> 
    );
} 

export default App;
