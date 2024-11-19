console.log("Bienvenidos a Parripollo La Plata");

const nombreCliente = prompt("Bienvenido. Ingrese su nombre por favor.");
const mensaje = "Hola " + nombreCliente;
alert(mensaje);
console.log(nombreCliente);
console.log(mensaje);

let quierePedir = confirm("Deseas hacer un pedido?");


const precios = {
    polloEntero: 10000,     
    medioPollo: 5000,       
    papasFritas: 5000,      
    ensaladaRusa: 4000,     
    ensaladaTomateHuevo: 3000, 
    sinGuarnicion: 0,
        
  };

if (quierePedir) {
  let productoElegido;
  do {
    productoElegido = parseInt(prompt("Que desea llevar? \n \n1. Pollo Entero $10.000\n2. Medio Pollo $5.000"));
    switch (productoElegido) {
      case 1:
        precioProducto = precios.polloEntero; 
        alert("Elegiste pollo entero, me imagino que es para compartir..");
        console.log("Eligio: Pollo Entero");
        break;
      case 2:
        precioProducto = precios.medioPollo
        alert("Elegiste medio pollo, no te vas a quedar con hambre!");
        console.log("Eligio: Medio Pollo");
        break;
      default:
        alert("No tenemos esa opcion! Por favor, elegi una opcion valida.");
        console.log("opcion invalida.");
    }
  } while (productoElegido !== 1 && productoElegido !== 2);


  let guarnicionElegida;
  do {
    guarnicionElegida = parseInt(prompt("Elija su guarnición: \n 1. Papas fritas $5.000 \n 2. Ensalada rusa $4.000 \n 3. Ensalada de tomate y huevo $3.000\n 4. Sin guarnicion"));
    switch (guarnicionElegida) {
      case 1:
        precioGuarnicion = precios.papasFritas
        alert("Elegiste papas fritas. Cuidado con el colesterol!");
        console.log("Eligio: Papas fritas");
        break;
      case 2:
        precioGuarnicion = precios.ensaladaRusa
        alert("Elegiste ensalada rusa. Esta mal pero no tan mal!");
        console.log("Eligio: Ensalada rusa");
        break;
      case 3:
        precioGuarnicion = precios.ensaladaTomateHuevo
        alert("Elegiste ensalada de tomate y huevo. No vives de ensalada, no vives de ensalada!");
        console.log("Eligio: Ensalada de tomate y huevo");
        break;
     case 4:
        precioGuarnicion = precios.sinGuarnicion
        alert("Ninguna guarnicion va a acompañar tu pedido");
        console.log("No quiere guarnicion.");
        break;
      default:
        alert("No tenemos esa opcion! Por favor, elegi una opcion valida.");
        console.log("opcion invalida.");
    }
  } while (guarnicionElegida < 1 || guarnicionElegida > 4);




function sumar(precioProducto, precioGuarnicion) {
return precioProducto + precioGuarnicion;
  }


const total = sumar(precioProducto, precioGuarnicion);
console.log (total)


alert("¡Gracias por tu pedido, " + nombreCliente + "! El valor es de $ "+ total + "  en 50 minutos podes retirar en el local.");
} else {
alert("Chau, chau!! Te esperamos cuando quieras comer rico!");
}