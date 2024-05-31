const container = document.querySelector("#container");
const canvaButton = document.querySelector('#canvasButton');
const rainbow = document.querySelector('#rainbow');
const numRange = document.querySelector('#numRange');
const numInput = document.querySelector('#numInput');
numInput.value = 5;
let rowContainerMain; // do this
let size = numInput.value;
let first = true;
//  let size = 16;


function createCanvas(mySize){
    
    let sizepx = 700/mySize;
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    container.appendChild(rowContainer);
    rowContainerMain = rowContainer; // ADOIASLDJASDk,okay
    let myAttribute = 'height: '+sizepx+'px; width:'+sizepx +'px';
    for (let i = 1; i <= mySize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        rowContainer.appendChild(gridRow);
        for (let j = 1; j <=mySize; j++){
            let opacity = 0;
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridColumn");
            gridBox.setAttribute('style', myAttribute);
            gridRow.appendChild(gridBox);
            gridBox.addEventListener("mouseover", () => {
                opacity += 0.1;
                const myFinalAttribute = myAttribute + '; background-color: black; border:0px';
                console.log(myAttribute);
                gridBox.setAttribute('style', myFinalAttribute + ' ;opacity: ' +opacity);
            })
        }    
    }

}






createCanvas(size);

rainbow.addEventListener("click", ()=>{
    removeCanvas();
})

canvaButton.addEventListener("click", () => {
    first = false;
    size = numInput.value;    
    console.log(size);  
    rowContainerMain.remove();
    createCanvas(size);
})
