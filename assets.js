


var arrayInput = [];
var contador = 0;

var agregar = function (){

    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastName").value;
    var direccion = document.getElementById("Direction").value;


    arrayInput.push({nombre:nombre ,apellido:apellido,direccion:direccion })
    contador ++
    imprimir()
    local()
}

function imprimir (valor){

    
        var tabla = document.getElementById("datos")
        tabla.innerHTML = ""
        for (let i= 0; i < arrayInput.length; i++) {
            
            
            var nombre = arrayInput[i].nombre
            var apellido = arrayInput[i].apellido
            var direccion = arrayInput[i].direccion
            var numero = i+1
    
            tabla.innerHTML +=
             "<tr><th scope='row'>"+numero+"</th> <td>"+nombre+"</td> <td>"+apellido+"</td> <td>"+direccion+"</td> <td><button type='button' class='btn btn-danger accion' onclick='eliminar("+numero+")'>Eliminar</button></td> </tr>"
       }
   

}
       


function eliminar (indice){
    var indicereal= indice -1
    arrayInput.splice(indicereal,1)
    imprimir()
    local()
}

function local (){
    localStorage.setItem('Lista',JSON.stringify(arrayInput))
}

function recarga(){
    var arrayInputLocal = JSON.parse(localStorage.getItem('Lista'))

    console.log(arrayInputLocal)
    var tabla = document.getElementById("datos")
        tabla.innerHTML = ""
        for (let i= 0; i < arrayInputLocal.length; i++) {
            
            
            var nombre = arrayInputLocal[i].nombre
            var apellido = arrayInputLocal[i].apellido
            var direccion = arrayInputLocal[i].direccion
            var numero = i+1
    
            tabla.innerHTML +=
             "<tr><th scope='row'>"+numero+"</th> <td>"+nombre+"</td> <td>"+apellido+"</td> <td>"+direccion+"</td> <td><button type='button' class='btn btn-danger accion' onclick='eliminar("+numero+")'>Eliminar</button></td> </tr>"
       }
    arrayInput = arrayInputLocal
}
recarga()