$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  let peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function(){
    if(this.status == 200 &&
      this.readyState == 4){
        cargarJSON(this);
      }
  }
  peticion.open('GET', '/carpetaProyecto/info.json', true)
  peticion.send();

});

function cargarJSON(json){

  //Guarda el resultado en variables
  var info = JSON.parse(json.response);
  var fechaActual = info.fechaActual;

  var eventos = info.eventos

    //Clasifica los eventos segun la fecha actual del JSON
    //filtro para enventos futuros:
    var eFuturos = eventos.filter( x=> x.fecha > fechaActual);

    //filtro para eventos pasados:
    var ePasados = eventos.filter( x=> x.fecha <= fechaActual);

    //se ordenan los eventos futuros mas cercanos a la fecha referencia:
    let newEFuturos = eFuturos.sort((a,b) => {
        if(a.fecha > b.fecha){
          return 1;
        }
        if(a.fecha < b.fecha){
          return -1;
        }
        return 0;
    })
    //recorre el arreglo y extrae solo dos eventos y llama a la funcion que carga los datos dinamicamente
    for (var i = 0; i < newEFuturos.length; i++) {
      if( i<=1 ){
        agregarEventoF(newEFuturos[i]);
      }
    }

    //se ordenan los eventos pasados mas cercanos a la fecha referencia:
    let newEPasados = ePasados.sort((a,b) => {
      if(a.fecha > b.fecha){
        return -1;
      }
      if(a.fecha < b.fecha){
        return 11;
      }
      return 0;
    })
    //recorre el arreglo y extrae solo dos eventos y llama a la funcion que carga los datos dinamicamente
    for (var i = 0; i < newEPasados.length; i++) {
      if( i<=1 ){
        agregarEventoP(newEPasados[i]);
      }
    }

}

//funcion que modifica el DOM con los 2 eventos futuros
function agregarEventoF(e){

    let contenedorEventosF = document.getElementById('proximos');
    let element = document.createElement('div');
    element.innerHTML = `

    <h3><a href="detalle.html?id=${e.id}">${e.nombre}</a></h3> 
    <p class="text-dark">${e.fecha}</p>
    <p>${e.descripcion}</p>

` 
element.classList.add('col-12','col-md-5','mx-auto','bg-light','p-3');

contenedorEventosF.appendChild(element);

}

//funcion que modifica el DOM con los 2 eventos pasados
function agregarEventoP(e){

  let contenedorEventosF = document.getElementById('pasados');
  let element = document.createElement('div');
  element.innerHTML = `

  <h3><a href="detalle.html?id=${e.id}">${e.nombre}</a></h3>
  <p class="text-dark">${e.fecha}</p>
  <p>${e.descripcion}</p>

` 
element.classList.add('col-12','col-md-5','mx-auto','bg-light','p-3');

contenedorEventosF.appendChild(element);

}