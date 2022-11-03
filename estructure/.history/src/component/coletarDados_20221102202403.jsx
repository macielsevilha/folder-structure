import Styles from './estilo.module.css'
import dados from '../dados/dados.json'
let Teste = () => {

  return (
    <div>
      
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
          if (!document.cookie || !document.cookie.includes('d-doc')) {
            window.location.href = "/"
          }
        `,
      }}
    />
    </div>
  )

    }
export default function ColetarDados() {
  return (
    <div>
      <h1>Estrutura</h1>
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