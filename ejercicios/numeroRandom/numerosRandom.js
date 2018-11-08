
var numRandom = Math.floor(Math.random() * 101);

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
        console.log(typeof userNumber);

        if (userNumber == numRandom) {
            document.getElementById("infoParrafo").innerHTML = "¡Enhorabuena, has acertado el número!";
        }        
        else if (userNumber < numRandom) {
            var intervalo = userNumber;
            if(intervalo == numRandom){
            var intervalo = userNumber;
            document.getElementById("infoParrafo").innerHTML = "Mi número está entre el " + intervalo + " y el 100";

        }else{
            var intervalo = userNumber;
            document.getElementById("infoParrafo").innerHTML = "Mi número está entre el " + intervalo + " y el 100";
        }        
        } else if(userNumber > numRandom){
            var intervalo = 1;            
            document.getElementById("infoParrafo").innerHTML = "Mi número está entre el " + userNumber + " y el " + userNumber;
        }
    }

   

    

}

//document.getElementById("infoParrafo").innerHTML = "Mi número está entre el 1 y el";