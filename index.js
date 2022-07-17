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

// Create matrix for grids
//Add borders to grids,
//display flex to make squars
//Asign image peace to each row-id
// root.style.display="flex"
// root.style.justifyContent="center"

//Creates the columns and rows using loops, assigns a dinamic name to each column and row.
for(let i=0; i<3; i++){
const column =document.createElement("div");
column.id=`column-${i}`
root.appendChild(column);
// column.style.border="1px solid black";
column.style.width="300";
column.style.height="300";


for(let j=0; j<3; j++)
{

const row= document.createElement("div");
row.id =`${i}-${j}`;
column.appendChild(row);
row.textContent=`${row.id}`
row.style.border="1px solid black"
row.style.height="100px";
row.style.width="100px";
}
}

