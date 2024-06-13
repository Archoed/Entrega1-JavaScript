// Entrada de datos 
while(true){
let datosCliente = prompt("Bienvenido a Cambios Sol\nIngrese su Nombre y Apellido (o 'ESC' para salir)");
if(datosCliente.toUpperCase()==="ESC")break;


let tipoCambio = "Elija el tipo de cambio: \n\n";
tipoCambio += "1- Compra \n";
tipoCambio += "2- Venta ";
let cambio = parseInt(prompt(tipoCambio));
if(isNaN(cambio) || cambio <1 || cambio > 2){
    alert("Tipo de cambio no disponible. Intente de nuevo");
    continue;
}



let tipoMoneda = "Elija el tipo moneda para el cambio \n\n ";
tipoMoneda += "1-Dolar \n";
tipoMoneda += "2-Euros\n";
tipoMoneda += "3-Yen\n";
tipoMoneda += "4-Bolivares";
let moneda =parseInt(prompt(tipoMoneda));
if(isNaN(moneda) || moneda <1 || moneda >4){
    alert("Tipo de moneda no disponible.Intente de nuevo")
    continue;
}


let monto = parseInt(prompt("Introduzca la cantidad: Min-100, Max 10000"))
if(isNaN(monto) || monto <100 || monto >10000 ){
    alert("Monto no válido. Intente de nuevo");
    continue;
}

// console.log("Cliente: " +datosCliente);
// console.log("tipo de Cambio: " + cambio);
// console.log("Tipo de Moneda: " + moneda);
// console.log("Monto Ingresado" + monto);

let compra;
let venta;


function tipoCompra(){

    if(moneda ==1){
        compra = 3.90;

    }else if(moneda == 2){
        compra = 4.05; 

    }else if(moneda==3){
        compra =4.60;

    }else{
        compra =2.20;
    }

}

function tipoVenta(){
    if(moneda ==1){
        venta = 3.70;

    }else if(moneda == 2){
        venta = 3.85; 

    }else if(moneda==3){
        venta = 4.10;

    }else{
        venta = 1.90;
    }
}

let montoCompra =0;
let montoVenta =0;


if(cambio === 1){
    tipoCompra();
     montoCompra = monto*compra;
    alert("Monto en Moneda S/:" + montoCompra.toFixed(2))
}else if (cambio ===2){
    tipoVenta();
     montoVenta = monto*venta;
    alert("Monto en Moneda S/:" + montoVenta.toFixed(2))
}else{
    alert("Esta opción no es valida")
}

function MontoTotal() {
    if (cambio === 1) {
        alert("Cliente: " + datosCliente + 
              "\nTipo de Cambio: Compra" + 
              "\nMoneda: " + (moneda === 1 ? "Dolar" : moneda === 2 ? "Euros" : moneda === 3 ? "Yen" : "Bolivares") + 
              "\nMonto de Compra: " + monto + 
              "\nMonto a Pagar S/: " + montoCompra.toFixed(2));
    } else if (cambio === 2) {
        alert("Cliente: " + datosCliente + 
              "\nTipo de Cambio: Venta" + 
              "\nMoneda: " + (moneda === 1 ? "Dolar" : moneda === 2 ? "Euros" : moneda === 3 ? "Yen" : "Bolivares") + 
              "\nMonto de Venta: " + monto + 
              "\nDinero Recibido S/: " + montoVenta.toFixed(2));
    }
}
MontoTotal();
break;
}


