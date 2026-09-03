import { useState } from "react"

function Formulario(){

    let [nome, setnome] = useState("")
    let [idade, setidade] = useState("")
    let [cidade, setcidade ] = useState("")
    
    function salvar(){
        alert("Seja bem-vindo(a) " +nome+ " voce tem " +idade+ " anos de idade e reside em " +cidade)
    }
    
    return(

        <div>
            <h1>Pagina de Formulario</h1>
            <p>Aprendendo a usar o input do React</p>

            <p>Digite seu nome</p>

            <input onChange={ e => setnome(e.target.value ) } />

            <p>Digite sua idade</p>

            <input onChange={ e => setidade(e.target.value ) } />

            <p>Digite sua cidade</p>

            <input onChange={ e => setcidade(e.target.value ) } />

            <br/>

            <button onClick={salvar}>solicitar</button>
        
        </div>
    
    )

}

export default Formulario