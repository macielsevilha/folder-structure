import Styles from './estilo.module.css'
import dados from '../dados/dados.json'

function Teste() {

  for(let i = 0; i < 5; i++) {
    
const nome = dados.map(e => {
  return e.nome

})
  return (
    <div className={Styles.estrutura}>
      <div>
        <span>{nome}</span>
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
  )
  }
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