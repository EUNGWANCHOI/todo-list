let addBtn = document.getElementById("addTodo");
let inputBox = document.getElementById("inputField");
let todoList = document.getElementById("todos");

// 할 일 생성 함수
const createTodoElement = (content) => {
  const todo = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
  text.textContent = content;

  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  delBtn.addEventListener("click", () => todo.remove());

  todo.appendChild(checkbox);
  todo.appendChild(text);
  todo.appendChild(delBtn);

  return todo;
};

// 할 일 추가 함수(list)
const addTodo = () => {
  const value = inputBox.value.trim();
  if (value !== "") {
    const todoItem = createTodoElement(value);
    todoList.appendChild(todoItem);
    inputBox.value = "";
    return;
  }
  alert("할 일을 입력해주세요");
};

addBtn.addEventListener("click", addTodo);
