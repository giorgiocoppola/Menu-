import pesce from './pesce.webp'
import pesce2 from './fritto.jpg'
import pesce3 from './Fritto-di-paranza.jpg'
import React,{useState} from 'react'
import './Home.css';



export default function Home({max=20,min=0}) {
  const [count,setcount] = useState(0)
  const [count2,setcount2] = useState(0)
  const [count3,setcount3] = useState(0)

         return (
  
        <div className="container">
         <h1 className="link">Home</h1>
         <h1 className="dom">Cosa vorresti ordinare?</h1>
         <div className ="testo1"> <img src={pesce} width="300px" height="230px"></img>
         <div className="descrizione">Fritto di pesce</div>
         <div className="prezzo">15 €</div>
         <button onClick={() => { 
          if(count + 1 > max) {
             setcount(max)
          } else {
             setcount(count + 1)
          }
        }}>Aggiungi</button>
         <button onClick={() =>{ 
           if(count - 1 < min) {
               setcount(min);
           } else {
              setcount(count -1);
           }
        }}>Togli</button>
         <p>{count}</p>  
         </div>
         <div className ="testo2"> <img src={pesce2} width="300px" height="230px"></img>
         <div className="descrizione">Zuppa di pesce</div>
         <div className="prezzo">13 €</div>
         <button onClick={() => {
           if(count2 + 1 > max) {
             setcount2(max);
           } else {
            setcount2(count2 +1);
           }
         }}>Aggiungi</button>
         <button onClick={() => { 
           if (count2 - 1 < min) {
             setcount2(min);
           } else {
             setcount2(count2 - 1);
           }
         }}>Togli</button>
         <p>{count2}</p>
         </div>
         <div className ="testo3"><img src={pesce3} width="300px" height="230px"></img>
         <div className="descrizione">Fritto di paranza</div>
         <div className="prezzo">16 €</div>
         <button onClick={() => {
           if(count3 + 1 > max) {
             setcount3(max);
           } else {
             setcount3(count3 + 1);
           }
         }}>Aggiungi</button>
         <button onClick={() => {
           if(count3 - 1 < min) {
             setcount3(min);
           } else {
             setcount3(count3 - 1);
           }
         }}>Togli</button>
         <p>{count3}</p>
         </div>
       
         </div>  
  );
   
}



