function CompruebaPalindromo() {
  var espalindromo = true;

  var cadena = document.getElementById('texto').value; //Cogemos la cadena que haya puesto en el input

  cadena = cadena.toLowerCase(); //La ponemos en minúsculas

  var cadenaLimpia = LimpiaCadena(cadena); // La limpiamos de espacios llamando a la función aparte.


  //console.log(cadenaLimpia);

  var letrasSinEspacios = cadenaLimpia.split(""); //Creamos un array con todas las letras

  var letrasSinEspaciosInvertida = cadenaLimpia.split("").reverse(); //Creamos un array con todas las letras pero
  // invertidas.

  //console.log(letrasSinEspacios);
  //console.log(letrasSinEspaciosInvertida);

  //En este bucle comprobamos letra por letras si es igual o no, en el momento que no haya una igual
  // el booleano "espalindromo" pasará a ser false.
  
  for (var i = 0; i < letrasSinEspacios.length; i++) {
    if (letrasSinEspacios[i] == letrasSinEspaciosInvertida[i]) {

    }
    else {
      espalindromo = false;
    }
  }

  if (espalindromo) {
    document.getElementById('resultadoPalabra').innerHTML = "¡La palabra introducida es palíndroma!";
  }
  else {
    document.getElementById('resultadoPalabra').innerHTML = "La palabra introducida no es palíndroma :(";
  }

  
//Función para quitar los espacios en blanco
  function LimpiaCadena(cadenaArray) {
    var cadenaLimpia = "";
    for (i in cadenaArray) {
      if (cadenaArray[i] != " ") {
        cadenaLimpia += cadenaArray[i];
      }
    }

    cadenaLimpia = LimpiaCadenaTildes(cadenaLimpia);    
    
    return cadenaLimpia;

  }


//Función para quitar las tildes de las letras
  function LimpiaCadenaTildes(cadenaLimpia){
    return cadenaLimpia.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  }

  

}

