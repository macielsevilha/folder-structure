import Styles from './estilo.module.css'
import dados from '../dados/dados.json'
let Teste = () => {

    return <div> {Array.from(Array(40), (e, i) => {
            return <span key={i}>{i}</span>
     
  })}</div>
}
 
export default function ColetarDados() {
  return (
    <div>
      <h1>Estrutura</h1>
      <Teste />
      <Teste />
      {/*          
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
         </div> */}
    </div>
  )
}