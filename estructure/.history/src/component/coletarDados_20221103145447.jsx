import Styles from './estilo.module.css'
import dados from '../dados/dados.json'

const dado = dados
const propriedade = () => {
  alert()
}

function data() {
  Date.prototype.getMesEmPortugues = function() {
     console.log(this.getDay(), this.getMonth(), this.getFullYear())
    if (this.getMonth() == 0){this.mesEmPortugues = "Janeiro"};
    if (this.getMonth() == 1){this.mesEmPortugues = "Fevereiro"};
    if (this.getMonth() == 2){this.mesEmPortugues = "Março"};
    if (this.getMonth() == 3){this.mesEmPortugues = "Abril"};
    if (this.getMonth() == 4){this.mesEmPortugues = "Maio"};
    if (this.getMonth() == 5){this.mesEmPortugues = "Junho"};
    if (this.getMonth() == 6){this.mesEmPortugues = "Julho"};
    if (this.getMonth() == 7){this.mesEmPortugues = "Agosto"};
    if (this.getMonth() == 8){this.mesEmPortugues = "Setembro"};
    if (this.getMonth() == 9){this.mesEmPortugues = "Outubro"};
    if (this.getMonth() == 10){this.mesEmPortugues = "Novembro"};
    if (this.getMonth() == 11){this.mesEmPortugues = "Dezembro"};
};
var data = new Date();
data.getMesEmPortugues();
console.log("O mês atual é : " + data.mesEmPortugues);

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