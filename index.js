//Asign created divs and containers.
const centerDiv=document.querySelector("#centerAlign");
const root = document.querySelector("#wholeGrid");

//Apply flex to divs to create row, to center align and margins.
root.style.display="flex";
root.style.flexDirection="row";
centerDiv.style.display="flex";
centerDiv.style.alignItems="center";
centerDiv.style.justifyContent="center";
centerDiv.style.width="500px"
centerDiv.style.height="200px"
centerDiv.style.margin="150px"

//Declare global variables to save position if image and later shuffle this.
let count=0;
let globalArray=[];
let shuffleArray=[];
let positionWith0= null;
let numberOfMoves=0;
// let shuffleB= true;
const numberMoves = document.createElement("label")
numberMoves.textContent= `Number of moves: ${numberOfMoves}`
document.getElementById("Labels").appendChild(numberMoves);

// Create matrix for grids
//Add borders to grids,
//display flex to make squars
//Asign image peace to each row-id
// root.style.display="flex"
// root.style.justifyContent="center"

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
        for(let j=0, horizontal= 0 ; j<3; j++, horizontal = horizontal -100)
        {
        
            count++;//this counter will help us number each div to later save the position in a global array.
            const row= document.createElement("div");  //we will create 3 divs rows inside each div column and later apply flex.
            row.id =`${i}-${j}`; // this will be the dinamic name for each grid so everyone has a different name.
            column.appendChild(row);  //Adding the rows 3 times to each column.
            row.textContent=`${row.id}` //this text content will display the div id name as a text to keep track.
            row.style.border="1px solid black"  //this will create the border with solid thin back line.
            row.style.height="100px"; // the size of each square will be 100x100 so when its done it will be 300x300.
            row.style.width="100px";
            
            // This condition means that when we get to the ninth loop we will leave a square empty so we can then move
            //towards this square to align the imagine in the futue.
            if(count !== 9)  
                {
                    row.style.backgroundImage= 'url("./cat1.png")'; //we will use this image as a background
                    row.style.backgroundPosition= `${vertical}` + "px" +" "+ `${horizontal}` + "px"
            //  with vertical and horizontal we move
            // -100px in the x axis and -100 in the y axis so we can simulate that we see the same 
            // image as a backgroun when we are actually watching the image in 300px x 300px 9 times in different position.
            
                    row.style.backgroundSize="300px 300px" //we set the image to be 300x300 even when the square size is really 100px
                    globalArray[count]= `${vertical}` + "px" +" "+ `${horizontal}` + "px"; //in this global array we will save the position
            //for tha background image.
                }

            else{
                row.style.backgroundPosition="0";
                row.style.backgroundSize="300px 300px";
                globalArray[count]="0";
            }


        shuffleArray[count] =globalArray[count]
        // console.log(vertical,horizontal);
        
        console.log(globalArray[count])
        }
    }


}

//This function will suffle the array of the background image poistions and save it in another array to alter use.
function shuffle(){
     
    for(let i=1; i<10;i++) // This loop will run a set amount of times to swap the arrays.
    {
        let randomnum =0 ;
        let randomnum2 =0 ; //We use this to make sure the number generated is from 1-9 only because our array is from 1-9
    // console.log(globalArray[i]);
    // console.log(shuffleArray[i]);
        while (randomnum == 0 || randomnum2 == 0){ //while this is runing the random index numbers will never be 0.
             randomnum= Math.floor(Math.random()*10);
             randomnum2= Math.floor(Math.random()*10); //this generates 2 different numbers from 1-9 to use as index.
        }
        // console.log(randomnum);
        // console.log(randomnum2);

        //Now we will swap two background image position in the same array to change its value and save in the shuffle array.
        [shuffleArray[randomnum], shuffleArray[randomnum2]] = [shuffleArray[randomnum2], shuffleArray[randomnum]];
      
    }

    for(let j=1; j<10;j++)
    {
        console.log(shuffleArray[j]) 
        if (shuffleArray[j] === "0")
            {
                positionWith0= j;
                
            }
            else
              {};
              
    }   
        // shuffleArray[9]="200px 200px"
}

//Here we will create the new grid using the positions from the shuffle array(using shuffle function first) instead.
 function fixShuffleGrid(){
    let counter1=0;
    for(let i=0;i<3;i++)
        for(let j=0;j<3;j++) //To generate new matrix for filling the grid.
          {
            counter1++;
             const newcolumn = document.getElementById(`${i}-${j}`) //Here we just access the divs we created in creategrid function.
             newcolumn.style.backgroundPosition = shuffleArray[counter1] //now we will add the new position to each div.

             if(shuffleArray[counter1] !== "0") //we need to make sure the empty div doesnt have the back image.
             {  
                newcolumn.style.backgroundImage= 'url("./cat1.png")'; // Set background image again in case this was an empty square.
                // newcolumn.style.backgroundSize="300px 300px"
                newcolumn.style.backgroundPosition = shuffleArray[counter1]
            }

             else{
                newcolumn.style.backgroundImage= ''; // if the value =0 it means this should be the empty square so we remove background.

             }

             console.log(newcolumn.style.backgroundPosition)
          } 
 }

//   const buttonDiv = document.getElementById("selectdiv")
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
         
        // console.log(typeof(capturedIdXS) , capturedIdYS,capturedIdX, typeof(capturedIdY ))

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
         if (swap)
         { swapAdjacentEmpty(capturedId, emptyElementId, capturedDiv, emptyElementIdX,emptyElementIdY);
            numberOfMoves++; // will start keeping track everytime you swap between divs.
            numberMoves.textContent= `Number of moves: ${numberOfMoves}` // This will update the label with number of moves.
             console.log(numberOfMoves)
            
            }
        // console.log(capturedDiv)
        // console.log(capturedId)
        // console.log(emptyElementIdX)
        // console.log(emptyElementIdY)
        
 })
//compares if the div selected by click is next to the empty grid so then it can sap or move it.
function compareIfAdjacentToEmpty(x ,y, emptyX, emptyY){
    let swap =false; 
   if(x+1 === emptyX && y===emptyY  ) //This checks for the adjacent divs. 
        { console.log("move to the right");
            swap=true;
    }
   else if(x-1 === emptyX && y===emptyY  )
            {console.log("move to the left");
        swap=true;}
    else if(x=== emptyX && y+1===emptyY  )
            {console.log("move down");
        swap=true;    }
    else if(x === emptyX && y-1===emptyY  )
            {console.log("move to the up");
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
    emptyDivId.style.backgroundImage= 'url("./cat1.png")';// We need to select the image we are working with.
    let counter3=0;
    let counter4=0;
    // console.log(divId, emptyDivId)
    for(let i=0; i<3;i++)
   {    for(let j=0; j<3;j++)
        {
         counter3++
         console.log(globalArray[counter3])
          //count for the array succes when comparing to the global position and verify if won.
         console.log(id)
            if (`${i}-${j}`=== id)// This will look for the new id with the empty position in terms of i-j with a counter to find the new position.
            {
                positionWith0= counter3;
                console.log(counter3)
            }
            else
              {};
            const background= document.getElementById(`${i}-${j}`);
             const backgroundPosition1= background.style.backgroundPosition;
             console.log(backgroundPosition1);
            
             if(globalArray[counter3]=== backgroundPosition1)     
            {
                counter4++;
                console.log(counter4);
                if(counter4 === 8)
                    {
                        console.log("You win.")
                    }
            }
             
        }       
    }  

   //Add Compare if won function.
}


const buttonDiv = document.getElementById("selectdiv")
buttonDiv.addEventListener("click", ()=>{
    buttonDiv.textContent="Shuffle"
    shuffle();
    fixShuffleGrid();
    if(numberOfMoves!=0)// If number of moves is not shuffled for the first time wont work
        {
            numberOfMoves++; //When you start to shuffle more than once it will count as a moves.
            numberMoves.textContent= `Number of moves: ${numberOfMoves}`//Update new number of moves.
        }
})
creatingGrid();
// shuffle();
// fixShuffleGrid();