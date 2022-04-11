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
    
            <div class="card" onclick="rotateCard(this)" id="${arrayIncludeCards[i]}">
                <img src="images/front.png" alt="front-card">
                <img src="images/${arrayIncludeCards[i]}.gif" alt="card">
            </div>
    
        `;
    }
}

let arrayCardsSelected = [];
function rotateCard(card){

    
    if(card !== null){

        card.classList.add("back-face");
        
        if(arrayCardsSelected.length < 2){

            arrayCardsSelected.push(card.id);
            
            if(arrayCardsSelected.length == 2){
                compareCards(cardTurned);
            }
        } 
    }

}
function compareCards(){
    if(arrayCardsSelected[0] == arrayCardsSelected[1]){
        
        console.log(arrayCardsSelected);

    } else {
        document.getElementById(`${arrayCardsSelected[0]}`).style.transform = "rotateY(180deg)";
        arrayCardsSelected = [];
    }
}