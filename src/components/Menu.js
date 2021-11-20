import pesce from './pesce.webp'
import pesce2 from './fritto.jpg'
import pesce3 from './Fritto-di-paranza.jpg'


function Menu() {

   /* const food = { title:"fritto di pesce",
         cost: {
             amount: 26,
             currency:"€"
          }
        }

        const food2 = { title:"zuppa di pesce",
         cost: {
             amount: 40,
             currency:"€"
         }
        }

        const food3 = { title:"fritto di paranza",
        cost: {
            amount: 30,
            currency:"€"
        }
       }*/

    return (
        <div className="container">
         <h1>Cosa vorresti ordinare?</h1>
         <div className ="testo1"> <img src={pesce} width="300px" height="230px"></img>
         <div className="descrizione">Fritto di pesce</div>
         <div className="prezzo">30 €</div>
         <button>Ordina</button>
         </div>
         <div className ="testo2"> <img src={pesce2} width="300px" height="230px"></img>
         <div className="descrizione">Zuppa di pesce</div>
         <div className="prezzo">55 €</div>
         <button>Ordina</button>
         </div>
         <div className ="testo3"><img src={pesce3} width="300px" height="230px"></img>
         <div className="descrizione">Fritto di paranza</div>
         <div className="prezzo">56 €</div>
         <button>Ordina</button>
         </div>
       
         </div>  
  );
   
}

export default Menu;