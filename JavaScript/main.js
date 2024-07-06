class TasaCambio{
    constructor(compra,venta){
        this.compra = compra;
        this.venta = venta;
    }
}

const tasasDelDia = {
    Dolar: new TasaCambio(3.70,3.90),
    Euros: new TasaCambio(3.85,3.98),
    Yen: new TasaCambio(2.90, 3.10),
    PesoMex: new TasaCambio(2.10,2.80),
    Bolivares: new TasaCambio(0.90,1.10 )
}

const citas=[];

class Cita {
    constructor(nombre,fecha,hora){
        this.nombre= nombre;
        this.fecha= fecha;
        this.hora = hora;
    }
}

function buscarMoneda(nombreMoneda){
    const resultado =[];
    for (const moneda in tasasDelDia) {
        if(moneda.toLocaleLowerCase().includes(nombreMoneda.toLocaleLowerCase())){
            resultado.push({nombre: moneda, ...tasasDelDia[moneda]})
        }
    }
    return resultado;
}

function agendarCita(){
    let nombre = prompt("Ingrese su nombre:");
    let fecha = prompt("Ingrese la fecha de la cita (DD/MM/AAAA):");
    let hora = prompt("Ingrese la hora de la cita (HH:MM):")

    const cita = new Cita(nombre, fecha, hora);
    citas.push(cita);
    alert("Cita agendada con éxito")
}

function mostrarCitas() {
    if (citas.length === 0) {
        alert("No hay citas agendadas.");
    } else {
        let textoCitas = "Citas agendadas:\n\n";
        citas.forEach((cita, index) => {
            textoCitas += `Cita ${index + 1}:\n  Nombre: ${cita.nombre}\n  Fecha: ${cita.fecha}\n  Hora: ${cita.hora}\n\n`;
        });
        alert(textoCitas);
    }
}

while(true){

    let datosCliente = prompt("Bienvenido a Cambios Sol\n Ingrese su Nombre y Apellido (o 'ESC' para salir) ");
    if(datosCliente.toUpperCase() === "ESC")break;

    let tipoCambio = "Elija una opcion: \n\n";
    tipoCambio +="1-Compra \n";
    tipoCambio +="2-Venta \n";
    tipoCambio +="3-Tasas del dia \n";
    tipoCambio +="4-Buscar Moneda \n";
    tipoCambio +="5-Agendar Cita";

    let cambio= parseInt(prompt(tipoCambio));
    if(isNaN(cambio) || cambio<1 || cambio >5){
        alert("Opción no disponible. Intenete de nuevo")
        continue;
    }

    if(cambio === 3){
        let infoTasas ="Tasas del dia: \n\n";
        for (const moneda in tasasDelDia) {
           infoTasas += `${moneda}: \n Compra: S/ ${tasasDelDia[moneda].compra}\n Venta: S/ ${tasasDelDia[moneda].venta}\n\n`;
        }
        alert(infoTasas);
       break;
    }else if(cambio ===4){
        let nombreMoneda = prompt("Ingrese el nombre de la moneda que desea buscar:");
        const resultado= buscarMoneda(nombreMoneda)
        if(resultado.length === 0){
            alert("No se encontraron monedas con ese nombre.");
        }else{
            let resultadoTexto = "Resultados de la búsqueda: \n\n";
            resultado.forEach((resultados) =>{
                resultadoTexto += `${resultados.nombre}:\n Compra: S/ ${resultados.compra}\n Venta: S/ ${resultados.venta}\n\n`;
            });
            alert(resultadoTexto)
        }
        break;
    }else if (cambio === 5){
        agendarCita();
        mostrarCitas();
        break;
    }

    let tipoMoneda = "Elija el tipo de moneda para el cambio \n\n";
    tipoMoneda += "1-Dolar\n";
    tipoMoneda += "2-Euros\n";
    tipoMoneda += "3-Yen\n";
    tipoMoneda += "4-PesoMex\n";
    tipoMoneda += "5-Bolivares"
    let moneda = parseInt(prompt(tipoMoneda));

    if(isNaN(moneda) || moneda<1 || moneda>5){
        alert("tipo de moneda no disponible. Intente de nuevo");
        continue;
    }

    let monto = parseInt(prompt("Introduzca la cantidad: Min-100, Max-5000"));
    if(isNaN(monto) || monto<100 || monto>5000){
        alert("Monto no disponible. Intente de nuevo");
        continue;
    }
    let compra;
    let venta;

    function tipoCompra() {
        if (moneda === 1) {
            compra = tasasDelDia.Dolar.compra;
        } else if (moneda === 2) {
            compra = tasasDelDia.Euros.compra;
        } else if (moneda === 3) {
            compra = tasasDelDia.Yen.compra;
        } else if (moneda === 4) {
            compra = tasasDelDia.PesoMex.compra;
        } else {
            compra = tasasDelDia.Bolivares.compra;
        }
    }
    function tipoVenta() {
        if (moneda === 1) {
            venta = tasasDelDia.Dolar.venta;
        } else if (moneda === 2) {
            venta = tasasDelDia.Euros.venta;
        } else if (moneda === 3) {
            venta = tasasDelDia.Yen.venta;
        } else if (moneda === 4) {
            venta = tasasDelDia.PesoMex.venta;
        } else {
            venta = tasasDelDia.Bolivares.venta;
        }
    }

    let montoCompra = 0;
    let montoVenta = 0;

    if(cambio ===1){
        tipoCompra();
        montoCompra = monto * compra;
        alert("Monto en Moneda S/: " + montoCompra.toFixed(2));
    }else if (cambio ===2){
        tipoVenta();
        montoVenta = monto * venta;
        alert("Monto en Moneda S/: "+ montoVenta.toFixed(2));
    }else{
        alert("Opción no válida");
    }

    function montoTotal(){
        if (cambio ===1){
            alert("Cliente:" + datosCliente +
                "\nTipo de Cambio: Compra" +
                "\nMoneda: "+ (moneda ===1 ? "Dolar" : moneda === 2 ? "Euros" : moneda ===3 ? "Yen" : moneda === 4 ? "PesoMex" : "Bolivares")+ 
                "\nMonto de Compra: " + monto +
                "\nMonto a Pagar S/: " + montoCompra.toFixed(2)
            );
        }else if(cambio === 2){
            alert("Cliente:" + datosCliente +
                "\n Tipo de Cambio: Venta " +
                "\nMoneda: " + (moneda === 1 ? "Dolar" : moneda === 2 ? "Euros": moneda === 3 ? "Yen" : moneda === 4 ? "PesoMex" : "Bolivares")+
                "\nMonto de Venta" + monto +
                "\nMonto a Pagar S/: " + montoVenta.toFixed(2)
            );
        }
    }

montoTotal();
break;
}