function mostrarFoto10(){
    document.getElementById("foto").style.display="block";

}
    

function ocultarFoto10(){
    document.getElementById("foto").style.display="none";
    
}

function validarTelefono10(){
  var telefono = document.getElementById("telefono").value;

  var mensaje = new Array();

  var flagNum = false;
  var flagDigitos = false;

  var n = telefono.length;
  if(n < 10 || n > 10){
      flagNum = true;
      mensaje.push("El teléfono debe tener exactamente 10 números")
  }

  var numero = 0;
  for(var i=0; i<n; i++){
      if((telefono.charCodeAt(i) >= 48) && (telefono.charCodeAt(i) <= 57)) numero++;
  }
  if(numero == 0){
      flagDigitos = true;
      mensaje.push("El télefono debe solo contener números del 0 al 9")
  }

  if(!flagNum && !flagDigitos){
    document.getElementById("msg").innerHTML="";

    var li = document.createElement("li");
    li.innerHTML = "<span class = 'telefonoCorrecto'>El telefono ingresado es correcto</span>";
    document.getElementById("msg").appendChild(li);
}else{
    imprimirErrores(mensaje);
}

}

function imprimirErrores(errores){
    var listaErrores = document.getElementById("msg");
    listaErrores.innerHTML = "";

    errores.forEach(function (error){
        var li = document.createElement("li");
        li.innerHTML = "<span class = 'error'>"+error+"</span>";
        listaErrores.appendChild(li);
    });

}