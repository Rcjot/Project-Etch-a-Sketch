const rowContainer = document.querySelector("#row-container");

let size = 9;
let sizepx = 700/size;
let sizeString = 'height: '+sizepx+'px; width:'+sizepx +'px';
for (let i = 1; i <= size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    rowContainer.appendChild(gridRow);
    for (let j = 1; j <=size; j++){
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridColumn");
        // gridBox.textContent = "HALO" + i;
        gridBox.setAttribute('style', sizeString);
        gridRow.appendChild(gridBox);
    }

    
    
    
}