/* 
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// SELEZIONO ELEMENTI UTILI IN HTML & VARIABILI PREIMPOSTATE
const bottone = document.getElementById("btn");
const container = document.getElementById("general-container");

// FUNZIONE CREA ELEMENTO
function creaElemento(tag, classe){
    const elemento = document.createElement(tag);
    elemento.classList.add(classe);
    return elemento;
};

// AL CLICK SUL BOTTONE INSERISCO ELEMENTO SQUARE ALLINTERNO DEL CONTAINER
bottone.addEventListener("click", 
    function(){
        // CREO CICLO FOR
        for (let i = 1; i <= 100; i++){
            // CREO ELEMENTO DIV CON LA FUNZIONE E ASSEGNO LA CLASSE SQUARE
            const quadrato = creaElemento("div", "square");
            // INSERICO DENTRO AL DIV IL NUMERO DEL CICLO
            quadrato.append(i);
            container.append(quadrato);
            // AL CLICK SULL'ELEMENTO SQUARE
            quadrato.addEventListener("click",
                function(){
                    // AGGIUNGO ALL'ELEMENTO CLICCATO LA CLASSE
                    quadrato.classList.add("bg-blu");
                    // OUTPUT IN CONSOLE DEL NUMERO CLICCATO
                    console.log("Hai selezionato la cella " + i);  
                }
            )   
        }
    }
);


    

    



        