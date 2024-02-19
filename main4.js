// ESERCIZIO 4
// PER I NOSTALGICI DELLE STAGIONI
// Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:
// se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”


let temp = Number(prompt("Quanti gradi ci sono?"));


if(temp < -10){

    alert("copriti.... ancora ti raffreddi")

} else if(temp >= -10 && temp < 0) {

    alert("non e' tanto il freddo quanto l'umidità");

} else if (temp >= 0 && temp < 20) {

    alert("non ci sono piu' le mezze stagioni");

} else if(temp >= 20 && temp < 30) {

    alert("mi dia una peroni sudata");
} else if (temp >= 30) {

    alert("lu mare, lu sole, lu ientu");

} else {

    alert("Inserisci una temperatura")
}