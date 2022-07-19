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
// let shuffleB= true;


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
creatingGrid();
shuffle();
fixShuffleGrid()

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
        console.log(shuffleArray[j]) 
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






// createShuffleGrid();

// const imagepiece = document.querySelector("#0-0")
// imagepiece.style.backgroundImage= 'url("./cat1.png")';
// imagepiece.style.width="100px";
// imagepiece.style.height="100px";

// //function to take a picture and split in 9 parts
// function split image(){


// }


// //function to assign a div column/row to each part of the image.
// function assignPeace(){


// }



// //function to suffle image 
// function shuffle(){

// }

