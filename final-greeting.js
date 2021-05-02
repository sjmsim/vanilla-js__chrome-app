const form = document.querySelector(".js-nameForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const hello = document.querySelector(".hello");

const USER_LS = "currentUser";
const SHOW = "show";
const HIDE = "hide";

function handleSubmit(event){
    //event 막는 함수(엔터 눌럿을때 새로고침 되는 현상 막음)
    // event.preventDefault();
    const currentValue = input.value; //input에 입력된 값 정의
    paintGreeting(currentValue);
    saveName(currentValue);

}



function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function askForName(){
    form.classList.add(SHOW);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOW);
    greeting.classList.add(SHOW);
    greeting.innerText = `Hello, ${text}`;
}

function loadName(){
    
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
       
        askForName();
        
    } else {
        
        paintGreeting(currentUser);
        hello.classList.add(HIDE);
        form.classList.add(HIDE);
        

    }
}



function init(){
    loadName();

}

init();