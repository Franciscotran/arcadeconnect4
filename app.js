const state = {
    board: [],
    player: '',
    gameWin: false, 
    playerMode: '',
    player1Name: '',
    player2Name: ''

}



function buildBoard(){

    for(let i=0;i<6;i++){
        const row =[];
    for(let j=0; j<7;j++){
        row.push("");
    }

    state.board.push(row)
    }
    
}

let count = 0

// buildBoard();

const boardElement = document.createElement("div");
const appElement = document.getElementById("app");



function playerOptions(){

    let players = document.getElementById("playerOptions");
    let selected = players.options[players.selectedIndex].text;

    if(selected == 'Single Player'){
        document.getElementById('players').classList.add('hide')
        document.getElementById('singlePlayerInput').classList.remove("singlePlayerInput")


    }else if(selected == 'Multi Player'){

        document.getElementById('players').classList.add('hide')

        document.getElementById('playerInputsNames').classList.remove("multiPlayerModeNameInput")
    }

}



function cpuPlay(){

    currentPlayer =state.player

    if(state.player2Name == "CPU" && currentPlayer == 'player2' ){
    
        let random = Math.floor(Math.random() * 6)
        currentPlayer = state.player;
    
        for(let i=5; i> -1; i--){
    
        if(state.player2Name == 'CPU'&&(state.board[i][random] !== 5) && (state.board[i][random] !== 1) &&currentPlayer == 'player2'){
    
            state.board[i][random] = 5
    
            const squareData = document.querySelectorAll(`[data-row="${i}"]`);
            squareData[random].classList.add('black');
            state.player = 'player1'
    
           document.getElementById('player').innerHTML = `Player ${state.player1Name} Go`
    
           i = i - 6   
        }
      }
    }
    
    }
    


function playerNameSingle(){

    let playerName = document.getElementById('singlePlayerName').value
    state.player1Name = `${playerName}`
    state.player2Name = "CPU"
    document.getElementById("singlePlayerInput").classList.add("singlePlayerInput")
    
     random =  Math.random()

     if(random <= 0.49){

        state.player = 'player1'
        document.getElementById('player').innerHTML = `Player ${state.player1Name} Go`
        
     }else{

        state.player = 'player2'
        document.getElementById('player').innerHTML = `Player ${state.player2Name} Go`
        setTimeout(cpuPlay, 3000);

     }


     document.getElementById("restart").classList.add("restart")
     document.getElementById("restart").classList.remove("hiddenButton")
     

}

function playerNames(){

    let playerName = document.getElementById('multiPlayer1').value
    let playerName2 = document.getElementById('multiPlayer2').value
    
    state.player1Name = `${playerName}`
    state.player2Name = `${playerName2}`
    document.getElementById('playerInputsNames').classList.add("multiPlayerModeNameInput")
    

     random =  Math.random()

     if(random <= 0.49){

        state.player = 'player1'
        document.getElementById('player').innerHTML = `Player ${state.player1Name} Go`
        
     }else{

        state.player = 'player2'
        document.getElementById('player').innerHTML = `Player ${state.player2Name} Go`
        

     }

     document.getElementById("restart").classList.add("restart")
     document.getElementById("restart").classList.remove("hiddenButton")

}




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

}


function bootstrap(){

    appElement.appendChild(boardElement);
    boardElement.classList.add("board");
    buildBoard();
    renderBoard();   

}

document.getElementById("restart").addEventListener("click", function(e){
   
    e.preventDefault();

        /*--- Reset game ---*/
  
        location.reload();
    
    


})





const checkWin = () =>{

    let currentBoard = state.board

    //checking horizontals

    let count1 = 0
    let count5 = 0

    for(let i= 5;i>= 0;i--){

        for(let j=0; j<=6; j++){


            if(currentBoard[i][j] == 1){

                count5 = 0

                count1 = count1 +1 

            } else if(currentBoard[i][j] == 5 ){

                count1 = 0 

                count5 = count5 + 1

            }else if(currentBoard[i][j] == ''){

                count1 = 0
                count5 = 0
            }  


            if(count1 == 4) {


                document.getElementById('win').innerHTML = `Player ${state.player1Name} Wins Congrats`
                state.gameWin = true
                state.player= ""
                return

            }else if(count5 == 4){

                document.getElementById('win').innerHTML = `Player ${state.player2Name} Wins Congrats`
                state.gameWin = true
                state.player= ""
                return
            }

            

        }

        count1 = 0
        count5 = 0

    }

// checking on the verticals

    for(let j=0; j<=6; j++){


       for(let i=5; i>=0; i--){        

        if(currentBoard[i][j] == 1){

            count5 = 0

            count1 = count1 +1 

        } else if(currentBoard[i][j] == 5 ){

            count1 = 0 

            count5 = count5 + 1

        }else if(currentBoard[i][j] == ''){

            count1 = 0
            count5 = 0
        }  

        if(count1 == 4) {


            document.getElementById('win').innerHTML = `Player ${state.player1Name} Wins Congrats`
            state.gameWin = true
            state.player= ""
            return

        }else if(count5 == 4){

            document.getElementById('win').innerHTML = `Player ${state.player2Name} Wins Congrats`
            state.gameWin = true
            state.player= ""
            return
        }
        }
        // we will now continue with the diagonals
    }
    const newArray = [];

    for(let j=0; j<=6; j++){

        for(let i=5; i>=0; i--){     
            
          newArray.push(currentBoard[i][j])     
        }
    }
    
   // check every individual diagonal.

   const diagonal1 =[];
   const diagonal2 =[];
   const diagonal3 =[];
   const diagonal4 =[];
   const diagonal5 =[];
   const diagonal6 =[];
   const diagonal7 =[];
   const diagonal8 =[];
   const diagonal9 =[];
   const diagonal10 =[];
   const diagonal11 =[];
   const diagonal12 =[];
   const diagonal =
   [ diagonal1, diagonal2, diagonal3, diagonal4,diagonal5,diagonal6,diagonal7, diagonal8, diagonal9, diagonal10,diagonal11,diagonal12];
  
   // first side of diagonals 
  for(let i=0; i<41; i= i + 7){
    diagonal1.push(newArray[i])
   
   }
   for(let i=1; i<41; i= i + 7){
    diagonal2.push(newArray[i])
   
   }
   for(let i=2; i<41; i= i + 7){
    diagonal3.push(newArray[i])
   
   }
   for(let i=6; i<41; i= i + 7){
    diagonal4.push(newArray[i])
   
   }
   for(let i=12; i<41; i= i + 7){
    diagonal5.push(newArray[i])
   
   } for(let i=18; i<41; i= i + 7){
    diagonal6.push(newArray[i])
   
   }

   //other side of diagonals 
   for(let i=3; i<41; i= i + 5){
    diagonal7.push(newArray[i])
   
   }
   for(let i=4; i<41; i= i + 5){
    diagonal8.push(newArray[i])
   
   }
   for(let i=5; i<41; i= i + 5){
    diagonal9.push(newArray[i])
   
   }
   for(let i=11; i<41; i= i + 7){
    diagonal10.push(newArray[i])
   
   }
   for(let i=17; i<41; i= i + 7){
    diagonal11.push(newArray[i])
   
   } for(let i=23; i<41; i= i + 7){
    diagonal12.push(newArray[i])
   
   }


   for(let i=0;i<=11;i++){

    for(let j=0;j<=5;j++){

        if(diagonal[i][j] == 1){

            count5 = 0

            count1 = count1 +1 

        } else if(diagonal[i][j] == 5 ){

            count1 = 0 

            count5 = count5 + 1

        }else if(diagonal[i][j] == ''){

            count1 = 0
            count5 = 0
        }  

        if(count1 == 4) {


            document.getElementById('win').innerHTML = `Player ${state.player1Name} Wins Congrats`
            state.gameWin = true
            state.player= ""
            return

        }else if(count5 == 4){

            document.getElementById('win').innerHTML = `Player ${state.player2Name} Wins Congrats`
            state.gameWin = true
            state.player= ""
            return
        }
    
    }
   }
    
}
   


  





document.getElementById('app').addEventListener('click', function(e){

    
  
   

    if(state.gameWin == false){


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

          document.getElementById('player').innerHTML = `Player ${state.player2Name} Go`
  
            
            i = i - 6

            setTimeout(cpuPlay, 3000);

        } else if(state.player2Name !== 'CPU' &&(state.board[i][squareColum] !== 5) && (state.board[i][squareColum] !== 1) &&currentPlayer == 'player2'){

            state.board[i][squareColum] = 5

            const squareData = document.querySelectorAll(`[data-row="${i}"]`);
            squareData[squareColum].classList.add('black');
            state.player = 'player1'

           document.getElementById('player').innerHTML = `Player ${state.player1Name} Go`


            // newRow = i
            // newCol = squareColum  
            
            i = i - 6
        }
    }


    checkWin();
  }
 
 });

bootstrap();





// function cpuPlay(){

//     if(count5 <=2){

//        let random = Math.floor(Math.random() * 6)

//        state.board[0][random] = 5
//        const squareData = document.querySelectorAll(`[data-row="${0}"]`);
//        squareData[random].classList.add('black');
//        state.player = 'player1'

//        document.getElementById('player').innerHTML = `Player ${state.player1Name} Go`

//     }
//     }

//     cpuPlay();


