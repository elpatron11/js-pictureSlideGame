
//Asign created divs and containers.

const centerDiv=document.querySelector("#centerAlign");
const root = document.querySelector("#wholeGrid");

//Apply flex to divs to create row, to center align and margins.
root.style.display="flex";
root.style.flexDirection="row";
centerDiv.style.display="flex";
centerDiv.style.alignItems="center";
centerDiv.style.justifyContent="center";
//Declare global variables to save position if image and later shuffle this.
let count=0;
let globalArray=[];
let shuffleArray=[];
let savedPosition=[];
let positionWith0= null;
let numberOfMoves;
let bestRecord; 

let music = new Audio('./assets/background.mp3');



if(localStorage.record) //To store in local browser first ask if it exist, then we read it.
    bestRecord = JSON.parse(localStorage.record);
else
    bestRecord=0; //if nothing is stored we initialize the vaiable.

if(localStorage.answer){
 numberOfMoves = JSON.parse(localStorage.answer);
 
}
else
   {  numberOfMoves=0;}

const numberMoves = document.createElement("label")
numberMoves.textContent= `Number of moves: ${numberOfMoves}`
numberMoves.style.padding="1em"
document.getElementById("Labels").appendChild(numberMoves);

const lastRecord = document.createElement("label")
lastRecord.textContent= `Best Score: ${bestRecord}`
lastRecord.style.padding="1em"
document.getElementById("Labels").appendChild(lastRecord);
const dropDown = document.getElementById("picture");
let picturePicked = dropDown.options[dropDown.selectedIndex].value;

document.addEventListener("change", (e)=>{
picturePicked = e.target.value;
restartGame()
})



//Creates the columns and rows using loops, assigns a dinamic name to each column and row.

function creatingGrid(){
    // Create matrix for grids
    for(let i=0, vertical=0; i<3; i++ , vertical= vertical-100){
        const column =document.createElement("div"); 
        column.id=`column-${i}` //Creates a dinamic id for each column (in total 3)
        root.appendChild(column);//adds the column to the main div
        column.style.width="300"; //The grid size will be 300px x 300px
        column.style.height="300";
        
    //This loop keeps track of the position we will set for each background image. So every time it runes the position 
    // well be changed by 100px to the left. The variable is horizontal.
        for(let j=0, horizontal= 0 ; j<3; j++, horizontal = horizontal -100){
            count++;
            const row= document.createElement("div");  //we will create 3 divs rows inside each div column and later apply flex.
            row.id =`${i}-${j}`; // this will be the dinamic name for each grid so everyone has a different name.
            column.appendChild(row);  //Adding the rows 3 times to each column.
            savedPosition[count]= count; 
            // row.textContent=`${savedPosition[count]}` //this text content will display the div id name as a text to keep track.
            row.style.border="1px solid black" 
            row.style.height="100px"; 
            row.style.width="100px";
            
            if(count !== 9){
                    row.style.backgroundImage= picturePicked; //we will use this image as a background
                    row.style.backgroundPosition= `${vertical}` + "px" +" "+ `${horizontal}` + "px"                    
                    row.style.backgroundSize="300px 300px" //we set the image to be 300x300 even when the square size is really 100px
                    globalArray[count]= `${vertical}` + "px" +" "+ `${horizontal}` + "px"; //in this global array we will save the position
            }

            else{
                row.style.backgroundPosition="0";
                row.style.backgroundSize="300px 300px";
                globalArray[count]="0";
            }


        shuffleArray[count] =globalArray[count]
        // console.log(vertical,horizontal);
        
        
        }
    }


}

//This function will suffle the array of the background image poistions and save it in another array to alter use.
function shuffle(){
     // This loop will run a set amount of times to swap the arrays.
    for(let i=1; i<10;i++){
        let randomnum =0 ;
        let randomnum2 =0 ; //We use this to make sure the number generated is from 1-9 only because our array is from 1-9
    // console.log(globalArray[i]);
    // console.log(shuffleArray[i]);
        while (randomnum == 0 || randomnum2 == 0){ //while this is runing the random index numbers will never be 0.
             randomnum= Math.floor(Math.random()*10);
             randomnum2= Math.floor(Math.random()*10); //this generates 2 different numbers from 1-9 to use as index.
        }
       
        //Now we will swap two background image position in the same array to change its value and save in the shuffle array.
        [shuffleArray[randomnum], shuffleArray[randomnum2]] = [shuffleArray[randomnum2], shuffleArray[randomnum]];
        [savedPosition[randomnum], savedPosition[randomnum2]] = [savedPosition[randomnum2], savedPosition[randomnum]];
        
    }

    for(let j=1; j<10;j++){
        
        if (shuffleArray[j] === "0"){
                positionWith0= j;
                
            }
           
    }   
     
}

//Here we will create the new grid using the positions from the shuffle array(using shuffle function first) instead.
 function fixShuffleGrid(){
    let counter1=0;
    for(let i=0;i<3;i++)
        for(let j=0;j<3;j++){
            counter1++;
            const newcolumn = document.getElementById(`${i}-${j}`) ;//Here we just access the divs we created in creategrid function.
            newcolumn.style.backgroundPosition = shuffleArray[counter1]; //now we will add the new position to each div.
            if(shuffleArray[counter1] !== "0"){  //we need to make sure the empty div doesnt have the back image
                newcolumn.style.backgroundImage= picturePicked; // Set background image again in case this was an empty square.
                // newcolumn.style.backgroundSize="300px 300px"
                newcolumn.style.backgroundPosition = shuffleArray[counter1]
                // newcolumn.style.textContent= savedPosition[counter1];
            }

             else{
                newcolumn.style.backgroundImage= ''; // if the value =0 it means this should be the empty square so we remove background.

             }

             
          } 
 }

         document.addEventListener("click", (e)=>{
        const capturedDiv = e.target.style.backgroundPosition;
        const capturedId = e.target.id;
        let emptyElementIdX;
        let emptyElementIdY;
        let emptyElementId;
        let counter= 0;
        const capturedIdXS= capturedId.charAt(0);
        const capturedIdYS= capturedId.charAt(2);
        const  capturedIdX = parseInt(capturedIdXS);
        const  capturedIdY = parseInt(capturedIdYS);
         
        
        for(let i=0;i<3;i++)
           { for(let j=0;j<3;j++)
                {   
                    counter++;
                    if(counter === positionWith0)//This loop is to get the poistion with 0 but in terms of x(i),y(j)
                        {
                             emptyElementIdX=i;
                             emptyElementIdY=j;
                             emptyElementId=`${i}-${j}`
                            
                        }
                }
            }
         const swap=  compareIfAdjacentToEmpty(capturedIdX,capturedIdY, emptyElementIdX, emptyElementIdY )
         if (swap){ swapAdjacentEmpty(capturedId, emptyElementId, capturedDiv, emptyElementIdX,emptyElementIdY);
            numberOfMoves++; // will start keeping track everytime you swap between divs.
            numberMoves.textContent= `Number of moves: ${numberOfMoves}` // This will update the label with number of moves.
            localStorage.answer= JSON.stringify(numberOfMoves);
            //Adding audio.
            
            const music3 = new Audio('./assets/slash.m4a');
            music3.play();
         }  
 })
//compares if the div selected by click is next to the empty grid so then it can sap or move it.
function compareIfAdjacentToEmpty(x ,y, emptyX, emptyY){
    let swap =false; 
   if(x+1 === emptyX && y===emptyY  ) //This checks for the adjacent divs. 
        {
            swap=true;
    }
   else if(x-1 === emptyX && y===emptyY  )
            {
        swap=true;}
    else if(x=== emptyX && y+1===emptyY  )
            {
        swap=true;    }
    else if(x === emptyX && y-1===emptyY  )
            {
        swap=true;       }

return swap; //

}
//This function gives the order to swap the two divs.
 function swapAdjacentEmpty(id, emptyId, idPosition, x , y){

    const divId = document.getElementById(id)// First we get the id for the div selected
    divId.style.backgroundPosition = "0";// we will make this div the empty one and mark with a 0 
    divId.style.backgroundImage= ''; // this will remove the image and empty the div.
    
    const emptyDivId= document.getElementById(emptyId) //to select the empty div so we can add the image corresponding
    emptyDivId.style.backgroundPosition = idPosition; //We add the idPosition sent from the image clicked and apply to the div.
    emptyDivId.style.backgroundImage= picturePicked;// We need to select the image we are working with.
    
    let counter3=0;
    let counter4=0;
    // console.log(divId, emptyDivId)
    for(let i=0; i<3;i++)
   {    for(let j=0; j<3;j++)
        {
         counter3++
                 //count for the array succes when comparing to the global position and verify if won.
            if (`${i}-${j}`=== id){// This will look for the new id with the empty position in terms of i-j with a counter to find the new position.

                positionWith0= counter3;
            }   
            else
              {};
            const background= document.getElementById(`${i}-${j}`);
             const backgroundPosition1= background.style.backgroundPosition;
             
            
             if(globalArray[counter3]=== backgroundPosition1)
                counter4++; //Counts all the image that are in the right position.
                
                if(counter4 === 8){
                        counter4=0;
                        console.log("You win.")
                        music.pause();
                        const music2 = new Audio('./assets/Winsound.m4a');
                        music2.play();
                        window.alert(`Congratulations after ${numberOfMoves} attempts you finally won`);
                        bestRecord = JSON.parse(localStorage.record);
                        numberOfMoves = JSON.parse(localStorage.answer);
                        if(bestRecord > numberOfMoves)
                        {
                            bestRecord = numberOfMoves;
                            numberOfMoves=0;
                            lastRecord.textContent= `Best Score: ${bestRecord}`;
                            localStorage.answer= JSON.stringify(numberOfMoves);
                            localStorage.record= JSON.stringify(bestRecord);
                            numberMoves.textContent= `Number of moves: ${numberOfMoves}`
                            
                        }
                        else if (bestRecord===0)
                        {
                            bestRecord = numberOfMoves;
                            numberOfMoves=0;
                            lastRecord.textContent= `Best Score: ${bestRecord}`;
                            localStorage.answer= JSON.stringify(numberOfMoves);
                            localStorage.record= JSON.stringify(bestRecord);
                            numberMoves.textContent= `Number of moves: ${numberOfMoves}`
                            
                            
                        }
                        
                        restartGame();
                    }
             
            }       
    }  
}


const buttonDiv = document.getElementById("selectdiv")
buttonDiv.addEventListener("click", ()=>{
    buttonDiv.textContent="Shuffle"
    shuffle();
    fixShuffleGrid();
    music.play();
    music.loop ='true';
    const music3 = new Audio('./assets/slash.m4a');
    music3.play();
    if(numberOfMoves!=0){
            numberOfMoves++; //When you start to shuffle more than once it will count as a moves.
            numberMoves.textContent= `Number of moves: ${numberOfMoves}`//Update new number of moves.
            localStorage.answer= JSON.stringify(numberOfMoves);
        }
})

const restartB = document.getElementById("restartB") //Get button for restarting the game
restartB.addEventListener("click", ()=>{
restartGame()
})


function restartGame() //This function resets all global variables to default and 0 so the game restarts;
{
    count=0;
    for(let i=1; i<10; i++){
        shuffleArray[i]=globalArray[i];
    }
    fixShuffleGrid();
    positionWith0= 0; //reset all global variables to restart the game
    numberOfMoves=0;
    numberMoves.textContent= `Number of moves: ${numberOfMoves}`//Update new number of moves to 0 in browser. Since we are restarting
    buttonDiv.textContent="Start Over"; // Change the display test of the shuffle button to "Start Over" once its clicked.
    localStorage.answer= JSON.stringify(numberOfMoves);
    music.play();
}

creatingGrid();

    
