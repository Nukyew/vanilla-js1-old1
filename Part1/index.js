let board = []

function resetBoard() {
    let resetTd = document.getElementsByTagName("td")
    for (let j = 0; j < resetTd.length; j++){
        resetTd[j].innerText = "";
    }
    playerSpan.innerText = 'X'
    board = []
    /*
    for (let i = 0; i < 9; i++){
        game[i] = undefined;
        document.getElementById(i).innerText = ""
    }
    */ //above is brian's method (works great)
}

function play(clickedId){
    playerSpan = document.getElementById("player")
    clickedElement = document.getElementById(clickedId)
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        if (clickedElement.innerText === 'X' || clickedElement.innerText === "") {
            clickedElement.innerText = "X"
            board[clickedId] = "X"
        }
       // clickedElement.innerText = 'X';
       // board[clickedId] = "X"
    } else {
        playerSpan.innerText = 'X';
        if (clickedElement.innerText === 'O' || clickedElement.innerText === "") {
            clickedElement.innerText = "O"
            board[clickedId] = "O"
        }
        //clickedElement.innerText = 'O';
        //board[clickedId] = "O"
    }


    console.log(board)
    let topLeft = board[0]
    let topCenter = board[1]
    let topRight = board[2]
    let middleLeft = board[3]
    let middleCenter = board[4]
    let middleRight = board[5]
    let bottomLeft = board[6]
    let bottomCenter = board[7]
    let bottomRight = board[8]
    
    let boardFull = true;
    let winner = false;

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert(`Winner is ${board[clickedId]}`)
        winner = true;
        resetBoard()
    } else if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert(`Winner is ${board[clickedId]}`)
        winner = true;
        resetBoard()
    } else if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`Winner is ${board[clickedId]}`)
        winner = true;
        resetBoard()
    } else if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`Winner is ${board[clickedId]}`)
        winner = true;
        resetBoard()
    } else if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`Winner is ${board[clickedId]}`)
        winner = true;
        resetBoard()
    } else if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert(`Winner is ${board[clickedId]}`)
        winner = true;
        resetBoard()
    } else if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`Winner is ${board[clickedId]}`)
        winner = true;
        resetBoard()
    } else if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        alert(`Winner is ${board[clickedId]}`)
        winner = true;
        resetBoard()
    }
    for (i = 0; i < 9; i++){
        if (board[i] === undefined){
            boardFull = false;
        }
    }
    if (boardFull === true){
        alert("NOBODY WINS")
        resetBoard()
    }
}


