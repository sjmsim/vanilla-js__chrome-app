const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");



const toDoListBox = "to-Do-List-Box";
const toDoListText = "to-do-list-text";
const TODOS_LS = "toDos";


let toDos = []; 







function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}
//filter는 array의 모든 아이템을 통해 함수를 실행하고, true인 아이템들만 가지고 새로운 array를 만들고



function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
} 
// JSON.stringify();  =  ()안에 있는 것을 ''스트링 으로 만들어줌



function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;


    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
   
    li.appendChild(span);
    li.appendChild(delBtn);
    li.classList.add(toDoListBox);
    span.classList.add(toDoListText);
  

    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();

}



function handleSubmit(event){
    if (toDoInput.value === "") {
        event.preventDefault();
    } else {
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }
   
}




function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);  
        // JSON.parse() = ''스트링을 다시 오브젝트로 바꿔준다 
        parsedToDos.forEach(function (toDo){
            paintToDo(toDo.text);
        }); 
        //forEach array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 준다
    }
}

function showToDoForm(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        
        toDoForm.classList.add(HIDE);
        
    } else {
        toDoForm.classList.add(SHOW);
    
    }

}



function init(){

    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    showToDoForm();


}

init();