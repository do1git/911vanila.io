const body = document.querySelector("body");

const IMG_NUMBER = 4;
/*
function handleImgLoad(){
    console.log("finished");
}*/

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")

    body.prepend(image); //like appendChild
    //image.addEventListener("loadend", handleImgLoad);
}

function genNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER);  //ceil이 아닐까..
    return number;
}

function init(){
    const randonNumber = genNumber();
    paintImage(randonNumber);
}

init();