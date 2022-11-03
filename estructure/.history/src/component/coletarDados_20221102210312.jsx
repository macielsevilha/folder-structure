import Styles from './estilo.module.css'
import dados from '../dados/dados.json'

const dado = dados
const propriedade = () => {
 alert()
}

export default function ColetarDados() {
  return (
    <div>
      {dado.map((dado) => {
        return <div className={Styles.estrutura}>
        <div>
          <span>{dado.nome}</span>
        </div>
        <div>
          <span>{dado.data}</span>
        </div>
        <div>
          <span>{dado.empresa}</span>
        </div>
        <div>
            <button onClick={propriedade}>
           propriedade
         </button>
         <div>
              <span>dado.nome</span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
           </div>
           </div>
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