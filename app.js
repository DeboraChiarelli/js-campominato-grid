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
    squaresContainerDomElement.innerHTML = ''; //- per far si che non si aggiungano altri quadrati oltre i 100 già generati al primo click
//  - adesso posso generare i 100 quadrati attraverso il ciclo for
    for (let i = 0; i < 100; i++)
    console.log(i + 1);
    const squareDom = `div class="square">${promptMail} è presente il lista`
})

