// chiedo al cliente il numero di km che intende percorrere
var numero_km = prompt("Quanti chilometri prevede il tuo viaggio?");
console.log(numero_km);

// chiedo al cliente la sua età
var eta_passeggero = prompt ("Quanti anni hai?");

//calcolo prezzo del biglietto con tariffa base
var prezzo_base = numero_km * 0.21;
console.log(prezzo_base);

//designo lo sconto del 20% per gli under 18
var sconto_under18 = numero_km * ((0.21 * 20) / 100);
console.log(sconto_under18);

//designo lo sconto del 40% per gli over65
var sconto_over65 = numero_km * ((0.21 * 40) / 100);
console.log(sconto_over65);

//creo la condizione per determinare il costo finale del biglietto
if ((eta_passeggero >= 18) && (eta_passeggero <= 65)) {
    var prezzo_finale = prezzo_base.toFixed(2);
} else if (eta_passeggero < 18) {
    prezzo_finale = (prezzo_base - sconto_under18).toFixed(2);
} else {
    prezzo_finale = (prezzo_base - sconto_over65).toFixed(2);
}

// stampo i risultati nella pagina html e lo rendo visibile con l'assegnazione della classe per evitare che la pagina si visualizzi durante l'inserimento dei dati nel prompt
document.getElementById('km').innerHTML= numero_km + " " + "km";
document.getElementById('age').innerHTML= eta_passeggero + " " + "anni";
document.getElementById('price').innerHTML= prezzo_finale + " " + "euro";
document.getElementById("card-container").setAttribute("class", "visible");
