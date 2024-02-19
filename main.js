// Esercizio 1

let punteggio = 0
let punteggio2 = 0

let tiri = 4

for(let i = 1; i <= tiri; i++){

    let random = Math.floor(Math.random() * (12 - 1) + 1);

    punteggio = punteggio + random;

    

    console.log(`Al tiro di dado numero ${i} è uscito ${random} e quindi il punteggio del primo giocatore è ${punteggio}`); 

    let random2 = Math.floor(Math.random() * (12 - 1) + 1);

    punteggio2 = punteggio2 + random2;

    console.log(`Al tiro di dado numero ${i} è uscito ${random2} e quindi il punteggio del secondo giocatore è ${punteggio2}`);
    
    
}

if (punteggio > punteggio2) { 

    console.log(`Il giocatore 1 ha vinto!`);
    
} else if (punteggio < punteggio2){

    console.log(`Il giocatore 2 ha vinto!`);
    
} else {

    console.log(`I giocatore hanno pareggiato!`);
}