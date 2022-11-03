import Styles from './estilo.module.css'
import dados from '../dados/dados.json'
 
const nome = dados.map(e => {
  return e

})

export default function ColetarDados() {
    return (
       <div>
         <h1>Estrutura</h1>
         <div className={Styles.estrutura}>
           <div>
             <span>{ dado }</span>
           </div>
           <div>
             <span>data</span>
           </div>
           <div>
             <span>nome empresa</span>
           </div>
           <button>
              Clique
            </button>
         </div>
         <div className={Styles.estrutura}>
           <div>
             <span>nome</span>
           </div>
           <div>
             <span>data</span>
           </div>
           <div>
             <span>nome empresa</span>
           </div>
           <button>
              Clique
            </button>
         </div>
         <div className={Styles.estrutura}>
           <div>
             <span>nome</span>
           </div>
           <div>
             <span>data</span>
           </div>
           <div>
             <span>nome empresa</span>
           </div>
           <button>
              Clique
            </button>
         </div>
       </div>
    )
}