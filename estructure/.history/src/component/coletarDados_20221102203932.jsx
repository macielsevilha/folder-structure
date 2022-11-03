import Styles from './estilo.module.css'
import dados from '../dados/dados.json'

const teste = ["teste1", "teste2", "teste3"];

export default function ColetarDados() {
  return (
    <div>
      {teste.forEach((teste) => {
        return <div className={Styles.estrutura}>
        <div>
          <span>{teste}</span>
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