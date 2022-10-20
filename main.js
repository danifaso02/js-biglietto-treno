"use: strict";

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Input da tastiera km e età
const Kilometers = Number(prompt("Inserire i Km da percorrere"));
const Age = Number(prompt("Inserisci la tua età"));

// Calcolo prezzo biglietto standard
let FirstPrice = Kilometers * 0.21;

// Calcolo prezzi biglietti varie età
if(Age < 18){
    EndPrice = (FirstPrice * 20 / 100);
    document.querySelector("h2").innerHTML = `${EndPrice.toFixed(2)} €`;
}
if(Age > 65){
    EndPrice = (FirstPrice * 40 / 100);
    document.querySelector("h2").innerHTML = `${EndPrice.toFixed(2)} €`;
} 
else{
    EndPrice = FirstPrice;
    document.querySelector("h2").innerHTML = `${EndPrice.toFixed(2)} €`;
}