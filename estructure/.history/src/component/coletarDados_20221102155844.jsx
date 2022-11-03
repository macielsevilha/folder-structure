import Styles from './estilo.module.css'

export default function ColetarDados() {
    return (
       <div>
         <h1>Estrutura</h1>
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
         </div>
         <div className={Styles.estrutura}>
           <div>
             <span>nome</span>
           </div>
           <div>
             <span>data</span>
           </div>
           <div>
            <button value='dfsd'></button>
           </div>
           <div>
             <span>nome empresa</span>
           </div>
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
         </div>
       </div>
    )
}