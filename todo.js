const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS="toDos";

let toDos = [];
let numForId = 1;

function ranId(){
    numForId += 1;
    return numForId - 1;
}

function deleteToDo(event){   //지우는 대상의 event 수집
    const btn = event.target;
    const li = btn.parentNode;  //*****************************다시듣기
    toDoList.removeChild(li); //html상 제거
    const cleanToDos = toDos.filter(function(toDo){ // 조건대로 여과해서 배열에 담기
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.
    setItem(TODOS_LS,JSON.stringify(toDos)); // 로컬이 알아들을 수 있는말로 저장
}

function paintToDo(text){
    const li = document.createElement("li"); //큰틀에
    const delBtn = document.createElement("button"); //버튼 이랑
    delBtn.innerText = " X ";
    delBtn.addEventListener("click",deleteToDo); //지우는 버튼 작동감지
    const span = document.createElement("span"); //toDo태우고
    span.innerText = text;
    const newId = ranId();
    li.appendChild(span); // li에 toDo삽입
    li.appendChild(delBtn);// li에 버튼 삽입
    li.id = newId; // li의 id값 고유번호 부여
    toDoList.appendChild(li); //ul에 li에 넣기

    const toDoObj = { // 리스트에 넣어 로컬에 저장할 준비 object만들기
        text: text,
        id: newId
    };
    toDos.push(toDoObj); // js배열에 넣기
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // 입력창 초기화
}

function loadToDos(){
    const loadedToDos= localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        //console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();