
// ESERCIZIO 2
//farlo con lo switch
//Scrivi un programma che dato un numero intero compreso tra 1 a 7
// visualizzi il corrispondente giorno della settimana. Sapendo che:
//   1 = lunedì
//   2 = martedì
//   3 = mercoledì
//   ...
//   7 = domenica
// Esempi:
//   Input: numero = 6
//   Output: "Sabato"
//   Input: numero = 10
//   Output: “Errore! Giorno della settimana non valido!"


let giorno = prompt("Che giorno è?");



switch (true){

    case giorno == "1":
        console.log("E' Lunedì");

    break;

    case giorno == "2":
        console.log("E' Martedì");

    break;

    case giorno == "3":
        console.log("E' Mercoledì");

    break;

    case giorno == "4":
        console.log("E' Giovedì");

    break;

    case giorno == "5":
        console.log("E' Venerdì");

    break;

    case giorno == "6":
        console.log("E' Sabato");

    break;

    case giorno == "7":
        console.log("E' Domenica");

    break;

    default:

        console.log("Questo giorno non esiste");

    break;
}

