import Styles from './estilo.module.css'
import dados from '../dados/dados.json'

export default function ColetarDados() {
  return (
    <div>
      <h1>Estrutura</h1>
      {(() => {
        for (let i = 0; i < 5; i++) {
          return (
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
          )
        }
      })()}

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