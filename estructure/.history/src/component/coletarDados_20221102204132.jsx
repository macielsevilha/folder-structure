import Styles from './estilo.module.css'
import dados from '../dados/dados.json'

const dado = dados.map(e => {
  return e.name
})

export default function ColetarDados() {
  return (
    <div>
      {dado.map((dado) => {
        return <div className={Styles.estrutura}>
        <div>
          <span>{dado}</span>
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
      })}
    </div>
  )


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

}