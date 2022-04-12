const arrayCards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let arrayIncludeCards = [];
let cardsNumber;


function chooseCardsNumber(){
    cardsNumber = Number(prompt("Digite a quantidade de cartas para o jogo:"));

    if((cardsNumber >= 4) && (cardsNumber <= 14) && (cardsNumber%2 == 0)){

        arrayCards.sort(comparator);
        cardsToGaming();

    } else {

        while((cardsNumber < 4) || (cardsNumber > 14 || (cardsNumber%2 != 0))){

            alert("Por favor, digite um número de cartas entre 4 e 14.");
            cardsNumber = Number(prompt("Digite a quantidade de cartas para o jogo:"));
        }
    }
}   
chooseCardsNumber();

function comparator(){

    return Math.random() -0.3;
}

function cardsToGaming(){

    for(let i = 0; i < cardsNumber/2; i++){

        let getCard = arrayCards[i];
        
        arrayIncludeCards.push(getCard);
        arrayIncludeCards.push(getCard);
        console.log(arrayIncludeCards);

    }
    arrayIncludeCards.sort(comparatorAllCards);
    addCardsGame();
}

function comparatorAllCards(){
    return Math.random() -0.3;
}

function addCardsGame(){
    
    let addNumberCards = document.querySelector(".cards-section");
    
    for( let i = 0; i < arrayIncludeCards.length; i++){

        addNumberCards.innerHTML += `
        
        <div class="">
            
            <div class="card" onclick="rotateCard(this)" id="${arrayIncludeCards[i]}">
                <img src="images/${arrayIncludeCards[i]}.gif" alt="card">
            </div>        
        </div>
        `;
        // <div class="card" onclick="rotateCard(this)"">
        //         <img src="images/front.png" alt="front-card">
        //     </div>
    }
}

let arrayCardsSelected = [];
function rotateCard(card){

    
    if(card !== null){

        card.classList.add("back-face");
        
        if(arrayCardsSelected.length < 2){

            arrayCardsSelected.push(card.id);
            
            if(arrayCardsSelected.length == 2){
                compareCards();
            }
        } 
    }

}
function compareCards(){
    if(arrayCardsSelected[0] == arrayCardsSelected[1]){

        
    } else if(arrayCardsSelected[0] !== arrayCardsSelected[1]){
        
        console.log(arrayCardsSelected);
        let cardRemove1 = document.getElementById(`${arrayCardsSelected[0]}`);
        
        if(cardRemove1 != null){
            
            console.log("entrei no if");
            
            cardRemove1.classList.remove("back-face");
            setTimeout(removeCard, 500);
        }
        
        if(cardRemove1 == null){
            
            console.log("entrei no else");
            setTimeout(refreshArrayCardsCompared, 1000);
            
        }    
    }
}
function removeCard(){
    let cardRemove2 = document.getElementById(`${arrayCardsSelected[1]}`);
    if(cardRemove2 != null){
            
        console.log("entrei no if");

        cardRemove2.classList.remove("back-face");

    }
}
function refreshArrayCardsCompared(){
    arrayCardsSelected = [];
}
