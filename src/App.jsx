
function App() {
  
  let nome = "caynan"
  let sobrenome = "Macedo"
  let nome_completo = nome +" "+ sobrenome
  let clicks = 0

  function aumentarClicks(){
    clicks += 1 
  }

  
  return ( 
  
    <div>
      <h1>Hello {2+2} you</h1>
      <p>Estou aprend{console.log("foda-se")}endo React XD</p>
      <p>Meu nome é {nome} meu sobrenome é {sobrenome} meu nome completo é {nome_completo} </p>

      <hr/>

      <p>Voce clickou {clicks} vezes</p>
      <button onClick={aumentarClicks} >Clique em Mim</button>
    
    </div>
  )
}

export default App
