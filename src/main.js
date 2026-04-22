import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

import { productos } from './data/producto.js'
import { mostrarHero } from './components/catalogo.js'
import {mostrarCatalogo} from './components/catalogo.js'

function inicializarApp(){
  document.querySelector('#app').innerHTML = `
    ${ mostrarHero()}
    ${mostrarCatalogo()}
  `
}

inicializarApp();








