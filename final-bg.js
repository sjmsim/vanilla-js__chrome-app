
const body = document.querySelector("body");
const newDiv = document.createElement("div");
const bgBox = document.querySelector(".js-bg-box");




const IMG_NUMBER = 9;


function handleImgLoad(){
    console.log("finished loading");
}


function paintImage(imgNumber){

    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    bgBox.appendChild(image);


}



function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number;
}



function init (){
    const ramdomNumber = genRandom();
    paintImage(ramdomNumber);

}


init();

