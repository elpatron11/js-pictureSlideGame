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
centerDiv.style.height="500px"
centerDiv.style.margin="150px"
let count=0;
// Create matrix for grids
//Add borders to grids,
//display flex to make squars
//Asign image peace to each row-id
// root.style.display="flex"
// root.style.justifyContent="center"

//Creates the columns and rows using loops, assigns a dinamic name to each column and row.
function creatingGrid(){

    for(let i=0, vertical=0; i<3; i++ , vertical= vertical-100){
        const column =document.createElement("div");
        column.id=`column-${i}`
        root.appendChild(column);
        column.style.width="300";
        column.style.height="300";
        

    for(let j=0, horizontal= 0 ; j<3; j++, horizontal = horizontal -100)
        {
        
        count++;
        const row= document.createElement("div");
        row.id =`${i}-${j}`;
        column.appendChild(row);
        row.textContent=`${row.id}`
        row.style.border="1px solid black"
        row.style.height="100px";
        row.style.width="100px";
        row.style.backgroundImage= 'url("./cat1.png")';
        row.style.backgroundPosition= `${vertical}` + "px" +" "+ `${horizontal}` + "px"
        row.style.backgroundSize="300px 300px"
        console.log(vertical,horizontal);
        let globalArray=[];
        globalArray[count]= `${vertical}` + "px" +" "+ `${horizontal}` + "px";
        console.log(globalArray[count])
         // row.style.backgroundPositionX= `${vertical}` + "px";
        // row.style.backgroundPositionY= `${horizontal}` + "px";
    //     let obj={ globalposition ="value"}
    //    obj.globalposition= "1";
        // let obj= { }
        // obj.count= `${vertical}` + "px" + `${horizontal}`+ "px";
        // obj.globalPositionX= `${vertical}`+ "px"
        // obj.globalPositionY= `${horizontal}`+ "px"
        // console.log(obj);
        // console.log(count); 
        // const positionArrayX=[];
        // positionArrayX[i]= "vertical";
        // console.log(positionArrayX)
        // const positionArrayY=[];
        // positionArrayY[j]="horizontal"
        // console.log(positionArrayY)
        }
    }
// return array =[`${i}-${j}`];
}
const grid = creatingGrid();

function shuffle(){
    

}




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

