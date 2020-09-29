//Define las variables que necesites

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

    //filtro para eventos pasados:
    var ePasados = eventos.filter( x=> x.fecha <= fechaActual);

    //se ordenan los eventos pasados en forma descente mas cercanos a la fecha referencia:
    var newEPasados = ePasados.sort((a,b) => {
      if(a.fecha > b.fecha){
        return -1;
      }
      if(a.fecha < b.fecha){
        return 1;
      }
      return 0;
    })
    //se recorre el arreglo tantas veces sea su longitud y se llama a la funcion que carga los datos dinamicamente
    for (var i = 0; i < newEPasados.length; i++) {

        agregarEventoP(newEPasados[i]);

    }

}

//funcion que modifica el DOM con los eventos pasados 
function agregarEventoP(e){

  let contenedorEventosF = document.getElementById('pasados');
  let element = document.createElement('div');
  element.innerHTML = `

  <h3><a href="detalle.html?id=${e.id}">${e.nombre}</a></h3>
  <p class="text-dark">${e.fecha} - ${e.lugar}</p>
  <p>${e.descripcion}</p>
  <p style="color:blueviolet">Costo: ${e.precio}</p>

` 
element.classList.add('col-10','mx-auto','mb-4','bg-light','p-3');

contenedorEventosF.appendChild(element);

}