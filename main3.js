// ESERCIZIO 3
// DISTRIBUTORE AUTOMATICO
// Scrivere un programma che simuli un distributore di bevande:
// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza

let distributore = prompt("Seleziona la bevanda")

switch(true){

    case distributore == "1":
        alert("E' stata selezionata l'acqua");
    break;
    
    case distributore == "2":
        alert("E' stata selezionata la coca cola");
    break;

    case distributore == "3":
        alert("E' stata selezionata la birra")
    break;

    default:
        prompt("Seleziona la bevanda");
    break;
}

