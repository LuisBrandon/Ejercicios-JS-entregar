
var numRandom = Math.floor(Math.random() * 101);
var aux = 1;
var intentos = 1;

console.log(numRandom);

function CheckNumber(value) {
    var userNumber;
    //Comprueba si el valor es un número y si está entre 1 y 100.
    if (isNaN(value) || value < 1 || value > 100) {
        document.getElementById("infoParrafo").innerHTML = "Woops... introduce de nuevo el número!";
    }
    else {

        userNumber = value;
        userNumber = parseInt(userNumber);        
        CompruebaGanador(userNumber);
        CompruebaNumero(userNumber);
        intentos++;
          
    }

    function CompruebaGanador(userNumber){
        if(userNumber == numRandom){
            document.getElementById("infoParrafo").innerHTML = "¡Enhorabuena, has acertado el número! Has necesitado " + intentos + " intentos";
            document.getElementById('buttonNumber').disabled = true;
        }
    }

    function CompruebaNumero(userNumber){        
        

        if(userNumber < numRandom){
            
            var izquierda = parseInt(userNumber);
            document.getElementById("infoParrafo").innerHTML = "Mi número está entre " + izquierda + " y " + 100;   

        }

        if(userNumber > numRandom){

            var derecha = parseInt(userNumber);
            document.getElementById("infoParrafo").innerHTML = "Mi número está entre " + 1 + " y " +derecha;
                      
        }
    }
}

