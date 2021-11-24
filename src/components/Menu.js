import pesce from './pesce.webp'
import pesce2 from './fritto.jpg'
import pesce3 from './Fritto-di-paranza.jpg'
import React,{useState} from 'react'



function Menu() {
  const [count,setcount] = useState(1)
  const [count2,setcount2] = useState(1)
  const [count3,setcount3] = useState(1)
         return (
        <div className="container">
         <h1>Cosa vorresti ordinare?</h1>
         <div className ="testo1"> <img src={pesce} width="300px" height="230px"></img>
         <div className="descrizione">Fritto di pesce</div>
         <div className="prezzo">30 €</div>
         <button onClick={() => setcount(count + 1)}>Aggiungi</button>
         <p>{count}</p>
         <button onClick={() => setcount(count - 1)}>Togli</button>
         </div>
         <div className ="testo2"> <img src={pesce2} width="300px" height="230px"></img>
         <div className="descrizione">Zuppa di pesce</div>
         <div className="prezzo">55 €</div>
         <button onClick={() => setcount2(count2 + 1)}>Aggiungi</button>
         <p>{count2}</p>
         <button onClick={() => setcount2(count2 - 1)}>Togli</button>
         </div>
         <div className ="testo3"><img src={pesce3} width="300px" height="230px"></img>
         <div className="descrizione">Fritto di paranza</div>
         <div className="prezzo">56 €</div>
         <button onClick={() => setcount3(count3 + 1)}>Aggiungi</button>
         <p>{count3}</p>
         <button onClick={() => setcount3(count3 - 1)}>Togli</button>
     
         </div>
       
         </div>  
  );
   
}

export default Menu;