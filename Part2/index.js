let cardId = document.getElementById("cardId")
let cardStyle = document.getElementById("cardStyle")

//console.dir(cardId)
//console.log(cardStyle)
 
function setCard(){
    var card = document.getElementById(cardId.value)
    card.style.color = cardStyle.value
}

function resetHand() {
    cardStyle.value = null;
    cardId.value = null;
    let arr = document.getElementsByTagName("section")
    for (let i = 0; i < arr.length; i++){
        arr[i].style.color = null
    }
}