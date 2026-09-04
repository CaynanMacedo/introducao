import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Formulario from './formulario.jsx'
import Perfil from './perfil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Perfil />
  </StrictMode>,
)
