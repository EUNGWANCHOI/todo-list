let addBtn = document.getElementById("addTodo");
let inputBox = document.getElementById("inputBox");
let todoList = document.getElementById("todos");

const createTodo = (content) => {
  const todo = document.createElement("div");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  const text = document.createElement("span");
  text.textContent = content;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", () => todo.remove());

  todo.appendChild(checkBox);
  todo.appendChild(text);
  todo.appendChild(delBtn);

  return todo;
};

const addTodo = () => {
  const value = inputBox.value.trim();
  if (value !== "") {
    const todoItem = createTodo(value);
    todoList.appendChild(todoItem);
    inputBox.value = "";
    return;
  }
  alert("할 일을 입력해주세요");
};

addBtn.addEventListener("click", addTodo);
