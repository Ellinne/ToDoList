const inputBox = document.getElementById("input-box");
const container = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === "") alert("Write a task");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;  //И текст и разметка
        container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

    }
    inputBox.value='';
    save(); // сохраняем данные
}

container.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
        else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        save();
    }

}, false);

function save(){
    localStorage.setItem("data", container.innerHTML); // сохр понктов
}

function showAll(){
    container.innerHTML = localStorage.getItem("data"); // прогрузка данных
}

showAll();

















