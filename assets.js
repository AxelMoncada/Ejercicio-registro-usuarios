


var arrayInput = [];
var contador = 0;

var agregar = function (){

    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastName").value;
    var direccion = document.getElementById("Direction").value;


    arrayInput.push({nombre:nombre ,apellido:apellido,direccion:direccion })
    contador ++
    imprimir()
    console.log(arrayInput)
}

function imprimir (){

    for (let i= 0; i < arrayInput.length; i++) {
        const element = arrayInput[i];

        var tabla = document.getElementById("tabla")

        tabla.innerHTML += "<tr><th>"+[i]+"</th><td>"+arrayInput[name]+"</td><td>"+arrayInput.apellido+"</td><td>"+arrayInput.direccion+"</td></tr>"
        
        console.log(typeof(arrayInput[i]))
        
    }
       
}