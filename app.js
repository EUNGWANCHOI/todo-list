let addBtn = document.getElementById("addTodo");
let inputBox = document.getElementById("inputField");
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
