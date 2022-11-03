import Styles from './estilo.module.css'
import dados from '../dados/dados.json'

const dado = dados
const propriedade = () => {
  alert()
}

function data() {
  var testeData = date();
  console.log(testeData);
  console.log("A variável testeData é do tipo: " + typeof (testeData));

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
            <div className={Styles.propriedade}>
              <span>{dado.nome}</span>
            </div>
          </div>
        </div>
      })}
      <div>
        <button onClick={data}>Data</button>
      </div>
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