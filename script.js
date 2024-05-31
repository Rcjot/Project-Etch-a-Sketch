const container = document.querySelector("#container");
const canvaButton = document.querySelector('#canvasButton');
const rainbow = document.querySelector('#rainbow');
const black = document.querySelector('#black');
black.setAttribute('style', 'background-color: rgba(60,41,55, 0.5)');
const numRange = document.querySelector('#numRange');
const numInput = document.querySelector('#numInput');
numInput.value = 16;
let rowContainerMain; // do this
let size = numInput.value;
let first = true;
let rainbowBool = false;
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
            const rainbowColor = makeRainbow(); // put it here, 
            const blackColor = ';background-color: black';
            let opacity = 0;
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridColumn");
            gridBox.setAttribute('style', myAttribute);
            gridRow.appendChild(gridBox);
            gridBox.addEventListener("mouseover", () => {
                const myFinalColor = (rainbowBool === true) ? rainbowColor : blackColor;
                console.log(myFinalColor);
                const myFinalAttribute = myAttribute + myFinalColor +'; border:0px';
                opacity += 0.1;
                gridBox.setAttribute('style', myFinalAttribute +';opacity:'+opacity);
                
            })
        }    
    }

}

function makeRainbow(){
    let redV = Math.floor(Math.random()*100);
    let greenV = Math.floor(Math.random()*100);
    let blueV = Math.floor(Math.random()*100);
    let opacV = Math.floor(Math.random()*10)/10;
    let bgcolor = ';background-color: rgba('+ redV + ','+ greenV + ','+ blueV +')';
    return bgcolor;


}
createCanvas(size);





rainbow.addEventListener("click", ()=>{
    rainbowBool = true;
    rainbow.setAttribute('style', 'background-color: rgba(60,41,55, 0.5)');
    black.removeAttribute('style');
});
black.addEventListener("click", () =>{
    rainbowBool = false;
    black.setAttribute('style', 'background-color: rgba(60,41,55, 0.5)');
    rainbow.removeAttribute('style');

})


canvaButton.addEventListener("click", () => {
    first = false;
    size = numInput.value;    
    console.log(size);  
    rowContainerMain.remove(); // the remove here
    createCanvas(size);
})
