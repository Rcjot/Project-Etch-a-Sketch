const rowContainer = document.querySelector("#row-container");

let size = 16;
let sizepx = 700/size;
let myAttribute = 'height: '+sizepx+'px; width:'+sizepx +'px';
for (let i = 1; i <= size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    rowContainer.appendChild(gridRow);
    for (let j = 1; j <=size; j++){
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



