let addTodo = document.querySelector("#addTodo");
let list = document.querySelector("#list");
let todoInput = document.querySelector("#todoInput");
let clearTodo = document.querySelector("#clearTodo");
let list_div = document.querySelector(".list-div")

addEventListener("submit", function (event) {
  event.preventDefault();
  let orderedList = document.createElement("li");
  orderedList.setAttribute("class", "list-name");
  if (todoInput.value) {
    let todosInt = [todoInput.value];
    todos = JSON.stringify(todosInt);
    window.localStorage.setItem("todos",todos);

    let retrieve = localStorage.getItem("todos");
    let convert = JSON.parse(retrieve);
    convert.push(todosInt);
    convert = JSON.stringify(convert);
    window.localStorage.setItem("convert", convert)
  

    orderedList.innerText = todoInput.value;
    list.appendChild(orderedList);
    todoInput.value = "";
  }
  clearTodo.addEventListener("click", function () {
    list.removeChild(orderedList);
  });


// delete btton section
  let btn_div = document.createElement("div");
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "buttons");

  deleteButton.innerText = "X";
  btn_div.appendChild(deleteButton);
  orderedList.appendChild(btn_div);
  deleteButton.addEventListener("click", function () {
    list.removeChild(orderedList);
  });

  // check button section
  let checkButton = document.createElement("button");
  checkButton.setAttribute("class", "buttons");
  checkButton.innerText = "done";
  btn_div.appendChild(checkButton);
  orderedList.appendChild(btn_div);
  checkButton.addEventListener("click", function () {
    orderedList.style.textDecoration = "line-through";
  });
});

