/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata. 
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console 
con il numero della cella cliccata.*/

//# Griglia campo minato
//- Costruisco il layout statico in html e css
//- Importo gli elementi dal DOM
//  - importo innanzittutto il contenitore dei quadrati
const squaresContainerDomElement = document.querySelector('.squares-container');
console.log(squaresContainerDomElement);
//  - successivamente importo il bottone
const buttonDomElement = document.getElementById('button');
console.log(buttonDomElement);
//  - al quale click partirà l'intera funzione
buttonDomElement.addEventListener('click', function () {
    squaresContainerDomElement.innerHTML = ''; //- per far si che non si aggiungano altri quadrati oltre i 100 già generati al primo click, assegno il contenuto a stringa vuota
//  - adesso posso generare i 100 quadrati attraverso il ciclo for
    for (let i = 0; i < 100; i++) {
    let n = i + 1;
    console.log(n);

    const square = `<div class="square">${n}</div>`;
//  - adesso posso riempire il contenitore dei quadrati e quindi la stringa
    squaresContainerDomElement.innerHTML += square;
    }
//- recupero le caselle dal DOM dentro il click, perché altrimenti fuori dall'evento non ci sarebbero, è solo al click che compaiono
    const squareDomElements = document.querySelectorAll('.square');
    console.log(squareDomElements);
//- aggiungo il ciclo for così da aggiungere su ogni quadratino un eventListener che ascolti il click quando ci clicco sopra
    for (let i = 0; i < squareDomElements.length; i++) {
        const currentSquareElement = squareDomElements[i]; //- prendo il quadratino corrente per poi assegnargli l'eventListener
    //- assegno al quadratino corrente l'eventListener
        currentSquareElement.addEventListener('click', function () {
        console.log('click su quadratino numero: ' + (i + 1)) //- aggiungo tra parentesi i + 1, perché se mettessi solo i mi risulterebbe al click il numero prima, per questo aggiungo + 1, così mi darà il numero corrispondente. Nel ciclo for precedente infatti stampo n = i + 1
    
    //- assegno al quadratino il colore azzurro, dando al quadratino corrente la classe blue creata in css, attraverso classList.add
        currentSquareElement.classList.add('blue');
        })
    }
})

