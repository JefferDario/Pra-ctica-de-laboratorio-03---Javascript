var direccion
var numIma
var num=0
var participantes = ['images/foto.jpg', 'images/foto1.jpg', 'images/foto3.jpg', 'images/foto4.jpg', 
'images/foto5.jpg', 'images/foto6.jpg', 'images/foto7.jpg', 'images/foto8.jpg', 'images/foto9.jpg', 'images/foto10.jpg'];

function iniciar() {
    console.log(participantes)
    
    for (var i = 0; i < 5; i++) {
        participantes[i] = Math.floor(Math.random() * (10))
    }
    console.log(participantes)
    numIma = participantes.slice(0, 5)
    //alert('Se escogieron las ' + numIma.length + ' imagenes aleatorias')
    console.log(numIma)
    console.log(num)
    direccion = "images/foto" + numIma[num] + ".jpg";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
    document.getElementById("previous").disabled = true;
    document.getElementById("next").disabled = false;
}


function siguiente() {
    num++
    if (num == 4) {
        document.getElementById("next").disabled = true;
        document.getElementById("previous").disabled = false;
    }
    else if (num == 0) {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled = false;
    } else {
        document.getElementById("next").disabled = false;
        document.getElementById("previous").disabled = false;
    }
    direccion = "images/foto" + numIma[num] + ".jpg";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
}

function anterior() {
    num--
    if (num == 4) {
        document.getElementById("next").disabled = true;
        document.getElementById("previous").disabled = false;
    }
    else if (num == 0) {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled = false;
    } else {
        document.getElementById("next").disabled = false;
        document.getElementById("previous").disabled = false;
    }
    direccion = "images/foto" + numIma[num] + ".jpg";
    console.log(direccion);
    document.getElementById("foto").src = direccion;
}

