// Hemos omitido los acentos en los comentarios por compatibilidad

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

  //Guarda el resultado en variables

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});

function cargarJSON(json){

//Guarda el resultado en variables
  var info = JSON.parse(json.response);
  var fechaActual = info.fechaActual;

  var eventos = info.eventos

    //filtro para enventos futuros:
    var eFuturos = eventos.filter( x=> x.fecha > fechaActual);

    //se ordenan los eventos futuros en forma ascendente mas cercanos a la fecha referencia:
    var newEFuturos = eFuturos.sort((a,b) => {
        if(a.fecha > b.fecha){
          return 1;
        }
        if(a.fecha < b.fecha){
          return -1;
        }
        return 0;
    })
    //se recorre el arreglo tantas veces sea su longitud y se llama a la funcion que carga los datos dinamicamente
    for (var i = 0; i < newEFuturos.length; i++) {
    
        agregarEventoF(newEFuturos[i]);
      
    }
}

//funcion que modifica el DOM con los eventos futuros
function agregarEventoF(e){

  let contenedorEventosF = document.getElementById('proximos');
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
