import Styles from './estilo.module.css'
import dados from '../dados/dados.json'



  let Teste = () => {
    return <ul>{Array.from(Array(10), (e, i) => {
      return <li key={i}>{i}</li>
    })}</ul>
  }
  


export default function ColetarDados() {
  
  for(let i = 0; i < 5; i++) {
     return <Teste />
  
  }
}