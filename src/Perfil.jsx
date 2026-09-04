import { useState } from "react"

function Perfil(){

    let [handleprofile, sethandleProfile] = useState(false)
    let usuario = {
        nome: "Caynan",
        email: "heilagvagga@gmail.com",
        senha: "123123"
    } 


return(

    <div>

        <h1>Perfil de usuario</h1>
        <p>veja aqui sua informações do perfil</p>
        
        <button onClick={ () => sethandleProfile( !handleprofile ) } >Carregar Perfil</button>
                
        {
            handleprofile == true ?
                <div>
                    <p>Nome: {usuario.nome} </p>
                    <p>E-mail: {usuario.email} </p>
                    <button>Alterar Senha</button>
                </div>
            :
                <p> </p>
        }

    
    </div>

)

}

export default Perfil