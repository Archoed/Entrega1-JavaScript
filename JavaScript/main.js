class TasaCambio{
    constructor(compra,venta){
        this.compra=compra;
        this.venta = venta;

    }
}
const tasasDelDia = {
    Dolar: new TasaCambio(3.70, 3.90),
    Euros: new TasaCambio(3.85, 3.98),
    Yen: new TasaCambio(2.90, 3.10),
    PesoMex: new TasaCambio(2.10, 2.80),
    PesoArg : new TasaCambio(1.10,1.25),
    Bolivares: new TasaCambio(0.90, 1.10)
};

function realizarTransaccion(){
    const tipoTransaccion = document.getElementById("tipoTransaccion").value;
    const moneda = document.getElementById("moneda").value;
    const monto = parseFloat(document.getElementById("monto").value);
    
    if(isNaN(monto) || monto<100 || monto > 5000){
        document.getElementById("resultadoInput").value ="Monto no disponible.";
        return;
    }

    let tasa;
    if(tipoTransaccion === "compra"){
        tasa = tasasDelDia[moneda].compra;
    }else{
        tasa = tasasDelDia[moneda].venta;
    }

    const resultado = monto *tasa;
    document.getElementById("resultadoInput").value = `S/ ${resultado.toFixed(2)}`;
}