
function validar(formulario) {

/*--------Validacion para el campo del NOMBRE--------*/
    if (formulario.nombres.value.trim().length == 0) {
      document.getElementById("errornombres").innerText = "Campo invalido";
      formulario.nombres.focus();
      return false;
    }
 
/*--------Validacion para el campo del EMAIL--------*/
//se asigna una expresion regular para el campo del email
var validacion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (formulario.email.value.trim().length == 0){
      document.getElementById("errorEmail").innerText = "Campo invalido";
      formulario.email.focus();
      return false;
    } else if (!validacion.test(formulario.email.value.trim())){
      document.getElementById("errorEmail").innerText = "El valor ingresado no es un email";
      formulario.email.focus()
      return false;
    }
/*--------Validacion para el campo de la CONTRASEÑA--------*/ 
    if (formulario.contrasena.value.trim().length == 0){
      document.getElementById("errorContrasena").innerText = "Campo obligatorio";
      formulario.contrasena.focus();
      return false;
    } else if(formulario.contrasena.value.trim().length < 7){
      document.getElementById("errorContrasena").innerText = "Debe tener al menos 7 caracteres";
      formulario.contrasena.focus();
      return false;
    }
/*--------Validacion para el campo de la CONFIRMACION CONTRASEÑA--------*/ 
    if(formulario.confirmacion.value != formulario.contrasena.value){
      document.getElementById("errorConfirmacion").innerText = "Las contraseñas no coinciden.";
      formulario.confirmacion.focus();
      return false;
    }
/*--------Validacion para el campo de MUSICA FAVORITA--------*/ 
    if (formulario.tipo.value == "-1"){
      document.getElementById("errorTipo").innerText = "Este campo es obligatorio";
      return false;
    }
/*--------Validacion para el campo de TERMINOS Y CONDICIONES-------*/     
    if(!formulario.acepto.checked){
      document.getElementById("errorAcepto").innerText = "Debe aceptar los términos.";
      return false;
    }
/*--------Mensaje de registro exitoso--------*/   
    alert("Registro exitoso.");
  
    return true;  

}





