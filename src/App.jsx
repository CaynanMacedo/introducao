import { use, useState } from "react"

function App() {

  let [nome, setnome] = useState("Aguardando...")

  function mudarNome(){
    setnome("Caynan")
  }

  
  return ( 
  
    <div>
      <h1>Hello World</h1>
      <p>Estou aprendendo React XD</p>

      <p>Meu nome é {nome}</p>
      <button onClick={ mudarNome } >Carregar nome</button>
    
    </div>
  )
}

export default App
