// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  let peticion = new XMLHttpRequest();
  peticion.onreadystatechange = function(){
    if(this.status == 200 &&
      this.readyState == 4){
        cargarJSON(this);
      }
  }
  peticion.open('GET', '/carpetaProyecto/info.json', true)
  peticion.send();


  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en una variable

  //Busca el elemento en el arreglo

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});

function cargarJSON(json){
  var info = JSON.parse(json.response);
  var fechaActual = info.fechaActual;

  var eventos = info.eventos

  var detalle = "";


    //se busca el elemento
    for( i=0 ; i<eventos.length ; i++ ){
      var id=/(\d+)/.exec(location.search)[0];
      if(eventos[i].id == id){
      detalle += `
  
      <div class="col-10 mx-auto mb-4 bg-light p-3">
        <h3><a href="detalle.html?id=${eventos[i].id}">${eventos[i].nombre}</a></h3>
        <p class="text-dark">${eventos[i].fecha} - ${eventos[i].lugar}</p>
        <p>${eventos[i].descripcion}</p>
        <p style="color:blueviolet">Costo: ${eventos[i].precio}</p>
        <p style="color:orange">Invitados: ${eventos[i].invitados}</p>
      </div>
    ` }
    }
    document.getElementById('evento').innerHTML = detalle

}
