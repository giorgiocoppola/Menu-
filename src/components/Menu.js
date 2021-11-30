import pesce from './pesce.webp'
import pesce2 from './fritto.jpg'
import pesce3 from './Fritto-di-paranza.jpg'
import React,{useState} from 'react'



function Menu() {
  const [count,setcount] = useState(0)
  const [count2,setcount2] = useState(0)
  const [count3,setcount3] = useState(0)
         return (
        <div className="container">
         <h1>Cosa vorresti ordinare?</h1>
         <div className ="testo1"> <img src={pesce} width="300px" height="230px"></img>
         <div className="descrizione">Fritto di pesce</div>
         <div className="prezzo">15 €</div>
         <button onClick={() => setcount(count + 1)}>Aggiungi</button>
         <button onClick={() =>{ count === 0 ? setcount(0) : setcount(count - 1)}}>Togli</button>
         <p>{count}</p>  
         </div>
         <div className ="testo2"> <img src={pesce2} width="300px" height="230px"></img>
         <div className="descrizione">Zuppa di pesce</div>
         <div className="prezzo">13 €</div>
         <button onClick={() => setcount2(count2 + 1)}>Aggiungi</button>
         <button onClick={() => { count2 === 0 ? setcount2(0) : setcount2(count2 - 1)}}>Togli</button>
         <p>{count2}</p>
         </div>
         <div className ="testo3"><img src={pesce3} width="300px" height="230px"></img>
         <div className="descrizione">Fritto di paranza</div>
         <div className="prezzo">16 €</div>
         <button onClick={() => setcount3(count3 + 1)}>Aggiungi</button>
         <button onClick={() => { count3 === 0 ? setcount3(0) : setcount3(count3 - 1)}}>Togli</button>
         <p>{count3}</p>
         </div>
       
         </div>  
  );
   
}

export default Menu;