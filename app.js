console.log("this is the begining of my app.")


const state = {
    board: [],
    player: '',
    gameMode: '', 
}



function buildBoard(){

    for(let i=0;i<6;i++){
        const row =[];
    for(let j=0; j<7;j++){
        row.push("");
    }

    state.board.push(row)
    }
    document.getElementById('player').innerHTML = 'Player 1 Go'
    state.player = 'player1'
    // console.log(state.board);
}


let count = 0

// buildBoard();

const boardElement = document.createElement("div");
const appElement = document.getElementById("app");


function renderBoard(){
    
    for(let i=0;i<state.board.length; i++){

        for(let j=0; j<state.board[i].length;j++){
            count++
        cellElement = document.createElement('div');
        cellElement.classList.add(`cell`);
        cellElement.setAttribute("id", `${count}`)
        cellElement.dataset.colum = j 
        cellElement.dataset.row = i 

        boardElement.appendChild(cellElement);

        }

    }
//   console.log(boardElement);

}




function bootstrap(){

    appElement.appendChild(boardElement);
    boardElement.classList.add("board");
    buildBoard();
    renderBoard();
    
    

}







document.getElementById('app').addEventListener('click', function(e){

    // checkRows()
    
    //we get the id of the cell were clicking
    let squareId = (e.target.id)
    //we get the number of the colum that we get 
    let squareColum =(e.target.dataset.colum);
    //we get the number of row we get
    let squareRow = (e.target.dataset.row);
    //next step would have to be to check if the bottom cell is empty
    //set up variable that brings the value of the div
    let position = document.getElementById(squareId).innerHTML

    //set up the turn for the player that is in turn considering we already defined 
    //player1 by default on the board set up

    currentPlayer = state.player;

    currentRow = state.board[+squareRow]
    currentCol = +squareColum


    for(let i=5; i> -1; i--){

        if((state.board[i][squareColum] !== 1) && (state.board[i][squareColum] !== 5) &&currentPlayer == 'player1'){

            state.board[i][squareColum] = 1 

            const squareData = document.querySelectorAll(`[data-row="${i}"]`);
            squareData[squareColum].classList.add('red');

            state.player = 'player2'

          document.getElementById('player').innerHTML = 'Player 2 Go'
              
            
            i = i - 6

        } else if((state.board[i][squareColum] !== 5) && (state.board[i][squareColum] !== 1) &&currentPlayer == 'player2'){

            state.board[i][squareColum] = 5

            const squareData = document.querySelectorAll(`[data-row="${i}"]`);
            squareData[squareColum].classList.add('black');
            state.player = 'player1'

           document.getElementById('player').innerHTML = 'Player 1 Go'


            // newRow = i
            // newCol = squareColum  
            
            i = i - 6
        }
    }


 });






 document.getElementById('app').addEventListener('click', function(e){

    let currentBoard = state.board

    
    //we get the number of the colum that we get 
    let columnum =(e.target.dataset.colum);
    //we get the number of row we get
    let rownum = (e.target.dataset.row);

    let rowsRed = 0
    let rowsBlack = 0
    let colsRed = 0
    let colsBlack = 0
    
    // console.log(columnum);
    

    for(let i=5; i> -1; i--){

        if(currentBoard[i][columnum] == 1 ){
            rowsRed = rowsRed + 1
            if(rowsBlack !== 0){
                rowsBlack = rowsBlack - 5
            }
        }

        if(currentBoard[i][columnum] == 5 ){
            rowsBlack = rowsBlack + 5
            if(rowsRed !== 0){
            rowsRed = rowsRed - 1
             }
        }

        if(rowsRed == 4 ){
            document.getElementById('win').innerHTML = "Player 1 Red Wins Congrats"
           
        }

        if(rowsBlack == 20 ){
            document.getElementById('win').innerHTML = "Player 2 Black Wins Congrats"
            return
        }


        const dataRow = document.querySelectorAll(`[data-row="${i}"]`);

        for( let j=0; j<7;j++){

            let checkData = dataRow[j]

            if(checkData.classList.contains('red')){

                 colsRed = colsRed + 1

            }

            if(checkData.classList.contains('black')){

                colsBlack = colsBlack + 1

           }

            // console.log(checkData)


        }




        
        
            // squareData[coluolumnum].classList.add('red');
     
    }

    console.log(colsRed);
    console.log(colsBlack);

   
    // console.log(colsRed)
    // console.log(colsBlack)

 

 });





bootstrap();