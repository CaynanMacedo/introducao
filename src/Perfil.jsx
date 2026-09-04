import { useState } from "react"

function Perfil(){

    let [handleprofile, sethandleprofile] = useState(false)
    let usuario = {
        nome: "Caynan",
        email: "heilagvagga@gmail.com",
        senha: "123123"
    } 


return(

    <div>

        <h1>Perfil de usuario</h1>
        <p>veja aqui sua informações do perfil</p>
        <button>Carregar Perfil</button>

        <div>
            <p>Nome: {usuario.nome} </p>
            <p>E-mail: {usuario.email} </p>
            <button>Alterar Senha</button>
        </div>
    
    </div>

)

}

export default Perfil