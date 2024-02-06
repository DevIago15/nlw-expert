import React from 'react'
import ReactDOM from 'react-dom/client'
import { App }  from './app'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render( // cria o root pra exibir o programa na index
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
