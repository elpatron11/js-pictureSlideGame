const root = document.querySelector("#wholeGrid");
// const column =document.createElement("div");
// column.className="column"

// Create matrix for grids
//Add borders to grids,
//display flex to make squars
//Asign image peace to each row-id

for(let i=0; i<3; i++){
const column =document.createElement("div");
column.id=`column-${i}`
root.appendChild(column);
column.style.display="flex"
column.style.flexDirection="row"
column.style.alignItems="center"
// column.style.flexWrap="wrap"

for(let j=0; j<3; j++)
{

const row= document.createElement("div");
row.id =`${j}-${i}`;
column.appendChild(row);
row.textContent=`${row.id}`
row.style.border="1px solid black"
row.style.height="100px";
row.style.width="100px";

}
// column.textContent= "Column1";
}

