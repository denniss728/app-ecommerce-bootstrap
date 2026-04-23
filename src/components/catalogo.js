import * as bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
import {productos} from '../data/producto.js'


export function  mostrarHero(){
    return`
    <section class="bg-success bg-gradient text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-3">
              <iconify-icon 
                icon="mdi:fruit-cherries" 
                class="me-2">
              </iconify-icon>
              Frutas frescas
            </h1>
            <p class="lead mb-4">Las mejores frutas seleccionadas directamente del 
              campo a tu mesa. Frescas y calidad garantizada YUNIOR DENNIS
            </p>
            <a href="" class="btn btn-light btn-lg">
              <iconify-icon 
                icon="mdi:shopping" 
                class="me-2">
              </iconify-icon> 
              Ver catálogo
            </a>

          </div>
          <div class="col-lg-6 text-center">
                <iconify-icon 
                  icon="mdi:fruit-grapes" 
                  class="me-2 text-white-50" width="200">
                </iconify-icon> 
          </div>
              
        </div>

      </div>

    </section>
    
    `

}

export function mostrarCatalogo(){
    return`
    <section id="catalogo" class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold">
            <iconify-icon 
            icon="mdi:fruit-cherries" 
            class="me-2 text-success">
            </iconify-icon>
            Nuestro Catálogo
          </h2>
          <p class="text-nuted">Selecciona tus frutas favoritas </p>
        </div>
        <div class="row g-4" id="lista-productos">
          ${productos.map((producto)=>( mostrarCardProducto(producto) )).join('')}
        </div>
      </div>
    </section>
    `
}

function mostrarCardProducto(producto){
  return`
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
              <div class="position-relative">
                <img 
                  src="${producto.imagen}" 
                  alt="${producto.nombre}"
                  class="card-img-top"
                  style="height: 200px; object-fit: cover;">
                <span class="badge bg-success position-absolute top-0 end-0 m-2">Frutas</span>
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text text-muted small flex-grow-1">${producto.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                  <span class="fw-bold text-success fs-4">${producto.precio}</span>
                  <span class="text-muted small">x KG</span>
                </div>

              </div>
              <div class="card-footer bg-white border-top-0 pb-3">
                <div class="d-grid gap-2">
                  <button class="btn btn-outline-success btn-mostrar-detalle " data-id="${producto.id}">
                    <iconify-icon 
                      icon="mdi:eye" 
                      class="me-1">
                    </iconify-icon>
                    Ver Detalles
                  </button>
                  <button class="btn btn-success">
                    <iconify-icon 
                      icon="mdi:add-shopping-cart" 
                      class="me-1">
                    </iconify-icon>                
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
  `
}

export function mostrarModalDetalles(){
    return`
<div class="modal fade" id="detalleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="producto-nombre">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p id="producto-descripcion"> </p>
      </div>   
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    `
}   

function mostrarDetalle(productoId){ 
  const producto = productos.find((producto)=>(producto.id === productoId)) 

  document.getElementById("producto-nombre").textContent = producto.nombre;

  const detalleModal = new bootstrap.Modal(document.getElementById("detalleModal"));
  detalleModal.show();
}

export function configuracionPrincipalEventos(){
  document.querySelectorAll(".btn-mostrar-detalle").forEach(btn=>{
  btn.addEventListener('click', (evento) =>{
    const productoId = parseInt(evento.currentTarget.dataset.id);
    mostrarDetalle(productoId);
  })  
})
}